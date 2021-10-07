function setup() {
  createCanvas(600, 600);
}

var phi = 0;
var automate = true;
var lineVisibility = true;
var radius = 181;
var roll = 0;
var yaw = 0;
var pitch = 0;
var turbineX = [];
var turbineY = [];
var density = 10;
var userRange = 400/300;
var idleRange = 100;
var rollV = 0;
var rollA = 0.1;
var colorOn = false;
var speed = 0.005;

draw = function() 
{
    // build turbine data
    for(var i = 0; i < 360; i++)
    {
        turbineX[i] = radius*cos(i+roll) + width/2;
        turbineY[i] = radius* sin(i+roll) + width/2;
    }
    background(0, 0, 0);
    
    // draw turbine
    for(var i = 0; i < turbineX.length; i+=density)
    {
        point(turbineX[i], turbineY[i]);
        for(var j = turbineX.length-1; j >= 0; j-=density)
        {
            if(colorOn)
            {
                stroke(255-i%255, j%255, i%255);
            }
            else
            {
                stroke(255);
            }
            point(turbineX[i]+yaw, turbineY[i]+pitch);
            if(lineVisibility)
            {
                line(turbineX[i]+yaw, turbineY[i]+pitch, turbineX[j], turbineY[j]);
            }
        }
    }
    roll += rollV;
    // user input
    if(mouseIsPressed && !automate)
    {
        rollV += rollA;
    }
    else
    {
        rollV -= rollA;
    }
    if(rollV < 0)
    {
        rollV = 0;
    }
    if(!automate)
    {
        if(keyIsPressed)
        {
            if(keyCode === UP_ARROW)
            {
                pitch-=userRange;
            }
            if(keyCode === DOWN_ARROW)
            {
                pitch+=userRange;
            }
            if(keyCode === RIGHT_ARROW)
            {
                yaw+=userRange;
            }
            if(keyCode === LEFT_ARROW)
            {
                yaw-=userRange;
            }
        }
    }
    else
    {
        pitch = sin(phi) * idleRange;
        yaw = cos(phi) * idleRange;
        phi+=speed;
    }
    if(phi > 360)
    {
        phi = 0;
    }
};
