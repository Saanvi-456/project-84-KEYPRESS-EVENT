canvas = document.getElementById('myCanvas');
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = newImage(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;  
}
function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			{
				document.getElementById("d1").innerHTML="You pressed Alphabet Key";
				img_image=Alpkey.png;
			console.log("alphbet key");
			}
			
		otherkey();
		{
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
			img_image=otherkey.png;
			console.log("other key");
		}
		
	}
}

if (keyPressed == '40')
    {
    img_image-"Arrkey.png"
	console.log("you pressed arrow key");
   }
   
   if (keyPressed == '38')
    {
    img_image-"Arrkey.png"
	console.log("you pressed arrow key");
   }
   if (keyPressed == '37')
   {
   img_image-"Arrkey.png"
   console.log("you pressed arrow key");
  }
  if (keyPressed == '39')
  {
  img_image-"Arrkey.png"
  console.log("you pressed arrow key");
 }
 if (keyPressed > '90')
 {
 img_image-"Alphkey.png"
 console.log("you pressed Alphbet key");
}
if (keyPressed == '18')
    {
    img_image-"spkey.png"
	console.log("you pressed special key");
   }	

   if (keyPressed == '91')
    {
    img_image-"spkey.png"
	console.log("you pressed special key");
   }
   if (keyPressed == '27')
    {
    img_image-"spkey.png"
	console.log("you pressed special key");
   }
   