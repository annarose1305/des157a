(function (){
    'use strict';
    console.log('reading JS');

    const blurry = document.querySelector('.lake');

    blurry.addEventListener('mouseover',function(){
        setTimeout( function(){
            blurry.style.filter = 'blur(5px) brightness(75%)';
            setTimeout(function(){
                blurry.style.filter = 'blur(10px) brightness(50%)';
                setTimeout(function(){
                    blurry.style.filter = 'blur(15px) brightness(25%)';
                    setTimeout(function(){
                        blurry.style.filter = 'blur(20px) brightness(0%)';
                        setTimeout(function(){
                            blurry.removeAttribute('style');
                        },3000);
                    },3000);
                }, 3000);
            }, 3000);
        }, 3000 );
    });

    const container = document.querySelector('div');
    const image = document.querySelector('div img');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;

    container.addEventListener('mousemove', reportPos);

    function reportPos(event){
        const mousePosX = Math.ceil((event.clientX -(container.getBoundingClientRect().left)) / percent);

        if (prevLoc !== mousePosX){
            const addedPx = mousePosX * 30;
            image.style.width = (500 + addedPx)+'px';
            prevLoc = mousePosX;
        }
    }
})();