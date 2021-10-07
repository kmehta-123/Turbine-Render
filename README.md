# Turbine-Render
This is a 3D Render of a rocket turbine wireframe written in p5.js, a visual framework of JavaScript. Using the arrow keys, the user can control the pitch and yaw of the turbine and, with mouse input, can control the roll, which accelerates and decelerates for as long as the mouse is pressed and released.
There are various hyperparameters that control various geometric properties of the render:

automate: if this is set to true, then the turbine goes into an idle mode, where the program automatically controls the pitch and yaw without user input and the user cannot enter any keyboard input

lineVisiblity: if set to false, the program hides the lines and shows only the points at which the lines begin and end

radius: determines the furthest distance between the center and the outermost point on the turbine

density: sets how close together or far apart the lines in the wireframe will be; the higher the density, the closer the lines are

userRange: describes the range of motion of the turbine while the user is able to control it

idleRange: describes the range of motion of the turbine while it is in idle mode

colorOn: if this is set to true, each line is colored as a function of its position in the render

The render is created with an algorithm that uses the same mathematical principles as polar functions. Every point is a function of its angle, and these points are stored in an array. The algorithm then iterates through the array and draws a line connecting each point to every other point in the array. The result of doing this with another set of points with a variable offset is a wireframe effect as seen in this program.
