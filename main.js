song="";

function preload()
{
    song = loadSound("gandagana-remix-song-mp3")
    song = loadSound("Dhoom Tara BEll Bottom 128kbps.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0 ,0 ,600,500);
}