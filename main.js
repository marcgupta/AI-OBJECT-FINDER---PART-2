status = "";
object = "";

function setup() {
    canvas = createCanvas(300,250);
    canvas.position(550,310);
video = createCapture(VIDEO);
video.size(300,250);
video.hide();

}

function start() {

        object_Detector = ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML = "Status: Detecting Objects";
        object = document.getElementById("object").value;

}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
}
function draw(){
    image(video,0,0,300,250);
}