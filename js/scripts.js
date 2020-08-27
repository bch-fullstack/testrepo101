

function startScript(){
    console.log('hello world');
    document.body.style.backgroundImage = 'url("https://i2.wp.com/files.123freevectors.com/wp-content/original/169733-shiny-abstract-pink-and-blue-background-vector-image.jpg?w=800&q=95")';

    var titleWrapperEl = document.createElement('div');
    titleWrapperEl.id = 'title-wrapper';
    titleWrapperEl.style.top = '50%';
    titleWrapperEl.style.width = '100%';
    titleWrapperEl.style.textAlign = 'center';
    titleWrapperEl.style.fontFamily = 'impact';

    console.log(titleWrapperEl.style);
    // titleWrapperEl.style.cssText = 'top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase;'

    document.body.appendChild(titleWrapperEl);

    var titleEl = document.createElement('div');
    titleEl.id = 'title';
    titleEl.innerText = 'Work under progress';
    // document.getElementById('title-wrapper').appendChild(titleEl);
    document.getElementById('title-wrapper').appendChild(titleEl);

}


document.addEventListener('DOMContentLoaded', startScript)