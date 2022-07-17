document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    
    const mono = document.querySelector('#mono')
    const ease = document.querySelector('#ease')

    const primary = document.querySelector('.loader-primary')
    const secondary = document.querySelector('.loader-secondary')

    mono.addEventListener('click', function(){
        if(primary.classList.contains('ease')){
            primary.classList.remove('ease')
            primary.classList.add('mono')
        }

        if(secondary.classList.contains('ease')){
            secondary.classList.remove('ease')
            secondary.classList.add('mono')
        }
    })

    ease.addEventListener('click', function(){
        if(!primary.classList.contains('ease')){
            primary.classList.add('ease')
            primary.classList.remove('mono')
        }

        if(!secondary.classList.contains('ease')){
            secondary.classList.add('ease')
            secondary.classList.remove('mono')
        }
    })
})