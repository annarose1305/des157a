(function (){
    'use strict';
    console.log('reading JS');

    const form = document.querySelector('#myForm');
    const madlib = document.querySelector('.madlib');


    form.addEventListener('submit', function(event){
        event.preventDefault();

        const place = document.querySelector('#place').value;

        const drink = document.querySelector('#drink').value;

        const animal = document.querySelector('#animal').value;

        const verb = document.querySelector('#verb').value;

        const adj = document.querySelector('#adj').value;

        if (place == ''){
            document.querySelector('#place').focus();
            alert('please enter a number');
        } else if (drink == ''){
            document.querySelector('#drink').focus();
        }
        else if (animal == ''){
            document.querySelector('#animal').focus();
        }
        else if (verb == ''){
            document.querySelector('#verb').focus();
        }
        else if (adj == ''){
            document.querySelector('#adj').focus();
        }
        else {
            madlib.innerHTML = `<p>Dear journal...</p>
                <p>Today I went to ${place}. I expected it to go like every other time, but this time it was eventful! I decided to buy ${drink} but I spilled it while walking... Why? Because a ${animal} was ${verb} nearby. It looked so ${adj}, so I had to take a moment to admire it.</p>

                <p>It spotted me looking at it and decided to approach me... Only to taste the drink that was on the floor. The ${animal} hated it.</p>`;
            
                document.querySelector('#overlay').className='showing';

                document.querySelector('#place').value = '';
                document.querySelector('#drink').value = '';
                document.querySelector('#animal').value = '';
                document.querySelector('#verb').value = '';
                document.querySelector('#adj').value = '';
        } 

        document.querySelector('.close').addEventListener('click', function(event){
                event.preventDefault();
                document.querySelector('#overlay').className='hidden';
            });

            document.addEventListener('keydown', function(event){
                if(event.key === 'Escape'){
                    document.querySelector('#overlay').className ='hidden';
                }
            });

        });
    
    })();