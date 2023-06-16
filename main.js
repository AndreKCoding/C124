function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 300);
    canvas.position(700, 200);

    video = createCapture(VIDEO);
    video.size(500, 300);
    video.position(200, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded()
{
    console.log("Modelo foi Carregado");
}

function draw()
{
    background('white');
}

function gotposes(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}