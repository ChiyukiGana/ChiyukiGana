const backgroundImageSrc=["https://rpic.origz.com/api.php?category=pixiv","https://api.boxmoe.com/random.php","https://imgapi.xl0408.top"];const backgroundImage=document.getElementById("background_image");let backgroundImageLoaded=false;function BackgroundImageLoaded(){backgroundImageLoaded=true;backgroundImage.style.animation="AmOpacity 2s";backgroundImage.style.opacity="1"}function BackgroundStart(){let counter=0;backgroundImage.onload=BackgroundImageLoaded;backgroundImage.style.opacity="0";backgroundImage.src=backgroundImageSrc[counter];setTimeout(function(){let handle=setInterval(function(){if(backgroundImageLoaded==false){backgroundImage.src=backgroundImageSrc[counter];counter++;if(counter>=backgroundImageSrc.length)counter=0}else{clearInterval(handle)}},2000)},2000)}