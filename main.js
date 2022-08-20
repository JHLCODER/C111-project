
function setup(){
    canvas = createCanvas(300 ,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 ,300)
    video.hide();
}


function draw(){
 image(video, 0, 0 , 300, 300);
}

function take_snapshot(){
    save("myFilterImage.png");
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1EzIcSx1W/model.json',modelLoaded);