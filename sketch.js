var L=14;
var n=1<<L;
var tree=[];

var t=4.5; //spread of tree
var l=130; //length of branches(base length)
var thk=10;	//thickness of base branch

function setup() {
  // put setup code here
  createCanvas(window.innerWidth,window.innerHeight);  //full scr
  // createCanvas(700, 700);  //test scr
  
  if(width<height){
	  t=6;
	  l=110;
  }
    
  
}

function draw() {
  // put drawing code here
  // record the canvas(start)
  
  // if(frameCount===1)
  // capturer.start()
  
  
  // background(20);
  
  
  background(0,30);
  stroke(255);
  if(frameCount %30== 0 ){
	  tree[0]=[]
	  tree[0].push(0)
	  tree[0].push(0)
	  tree[0].push(width/2)
	  tree[0].push(height)
	  tree[0].push(thk)
	  console.log(n);
	  tree[1]=[];
	  tree[1].push(l)
	  tree[1].push(-PI/2);
	  tree[1].push(width/2);
	  tree[1].push(height-l);
	  tree[1].push(thk);
	  for(var i=1;i<n/2;i++){
		tree[2*i]=[]
		tree[2*i].push(random(tree[i][0]/2,tree[i][0])) //l
		tree[2*i].push(tree[i][1]-random(PI/t)); //th
		tree[2*i].push(tree[i][2]+tree[2*i][0]*cos(tree[2*i][1])); //x
		tree[2*i].push(tree[i][3]+tree[2*i][0]*sin(tree[2*i][1])); //y
		tree[2*i].push(2*tree[i][4]/3); //strk
		tree[2*i+1]=[]
		tree[2*i+1].push(random(tree[i][0]/2,tree[i][0]))
		tree[2*i+1].push(tree[i][1]+random(PI/t));
		tree[2*i+1].push(tree[i][2]+tree[2*i+1][0]*cos(tree[2*i+1][1]));
		tree[2*i+1].push(tree[i][3]+tree[2*i+1][0]*sin(tree[2*i+1][1]));
		tree[2*i+1].push(2*tree[i][4]/3); //strk

	  }
	  
	  for(var i=1;i<n;i++){
		strokeWeight(tree[i][4])
		line(tree[floor(i/2)][2],tree[floor(i/2)][3],tree[i][2],tree[i][3])
	  }
  }
  
  frameRate(15);
  

  


  
  // record the canvas(end)

  // var sec=3
  // if(frameCount< 60*sec){
  //   capturer.capture(canvas)
  // }
  // else if(frameCount ===60*sec ){
  //   capturer.save();
  //   capturer.stop();
  // }

}

