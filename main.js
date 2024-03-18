function setup(){
    video = createCapture(VIDEO);
    video.size(600,900);
    video.position(100,100)

    canvas = createCanvas(500,430);
    canvas.position(840,340)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){

}

function modelLoaded(){
console.log('PoseNet is initialized!')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}