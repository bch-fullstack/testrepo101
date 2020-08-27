

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

    var navBar = document.createElement('ul');
    navBar.innerHTML = '<li><a id="home" class="btn" href="default.asp">Home</a></li><li><a id="news" class="btn" href="news.asp">News</a></li><li><a id="contact" class="btn" href="contact.asp">Contact</a></li><li><a id="about" class="btn">About</a></li>';
    document.body.appendChild(navBar)

    var contentEl = document.createElement('div');
    contentEl.id = 'content';
    document.body.appendChild(contentEl)

    function loadAbout() {
        document.getElementById('content').innerText = 'Welcome';
        document.getElementById('title').style.display = 'none';
    }

    document.getElementById('about').addEventListener('click', loadAbout);
}


document.addEventListener('DOMContentLoaded', startScript)