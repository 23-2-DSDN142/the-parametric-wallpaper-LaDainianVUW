//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 90;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 100;
}
 
function wallpaper_background() {
  background(51); //black background, makes the symbol pop out more
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    let maskx = 100;
    let maskY = 100;
    let rightblackeyex = 120;
    let rightblackeyeY = 90;
    let leftblackeyex = 80;
    let leftblackeyeY = 90;
    let rightwhiteeyex = 120;
    let rightwhiteeyeY = 90;
    let leftwhiteeyex = 80
    let leftwhiteeyeY = 90

    
if (maskY > 100) {
  console.log("The number is positive.");
} else if (maskY < 100) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
  
  ellipse(maskx,maskY,100,100);
  fill('black')
  circle(20,20);
  //Note: red mask
  function draw () {}
  ellipse(rightblackeyex,rightblackeyeY,35,50);
  fill('black')
  circle(10,10)
  //Note: right black eye
  function draw() {}
  ellipse(leftblackeyex,leftblackeyeY,35,50);
  fill('red')
  circle(10,10);
  //Note: left black eye
  function draw() {}
  ellipse(leftwhiteeyex,leftwhiteeyeY,20,30);
  fill('red')
  circle(10,10);
  //Note: left white eye
  function draw() {}
  ellipse(rightwhiteeyex,rightwhiteeyeY,20,30);
  fill('white')
  circle(10,10)
  //Note: right white eye
  }

;
