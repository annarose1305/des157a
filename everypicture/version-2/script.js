(function(){
    'use strict';
    console.log('reading JS');

    window.addEventListener('load', function(){
        const sliderContent = document.querySelector('.my_pics');
        const sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "pics";
        document.querySelector('.slider').appendChild(cloned);

        let root = document.querySelector(':root');
        const endLeftPos = `-${sliderWidth}px`;
        root.style.setProperty('--sliderwidth', endLeftPos);
        console.log(getComputedStyle(root).getPropertyValue('--sliderWidth'));
        document.querySelector('.slider').classList.add('animate');

        document.querySelector('.slider').addEventListener('mouseover', function(){
            document.querySelector('.animate').style.animationPlayState = 'paused';
        });

        document.querySelector('.slider').addEventListener('mouseout', function(){
            document.querySelector('.animate').style.animationPlayState = 'running';
        });

        document.addEventListener('click', function(event){
        if(event.target.className == 'photo'){
            console.log(event.target.src);
        }
    } );
    });
    
})();