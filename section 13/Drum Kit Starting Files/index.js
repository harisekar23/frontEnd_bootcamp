function handleClick() {
    var buttonName = this.textContent;
    makeSound(buttonName);
    buttonAnimation(buttonName);
}

document.addEventListener('keypress', function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

for(let i = 0; i < document.querySelectorAll('.drum').length; i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', handleClick);
}

function makeSound(buttonName)
{
    switch(buttonName)
    {
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
            
        default:
            break;
    }
}

function buttonAnimation(key)
{
    var activeButton = document.querySelector('.' + key);
    activeButton.classList.add('pressed');
    setTimeout(function()
    {
        activeButton.classList.remove('pressed');
    }, 200);
}