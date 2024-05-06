
function preLoad() {
    video= createVideo('video.mp4');
    video.hide();
}
function setup() {
    canvas = createCanvas(480,380);
    canvas.centre();
}
function draw() {
    image(video,0,0,480,380);
}