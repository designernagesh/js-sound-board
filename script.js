let music1 = document.getElementById('music1');
let music2 = document.getElementById('music2');
let music3 = document.getElementById('music3');
let music4 = document.getElementById('music4');
let music5 = document.getElementById('music5');

let container = document.querySelector(".container");

let musicNames = ['Music One', 'Music Two', 'Music Three', 'Music Four', 'Music Five']

musicNames.forEach(music => {
    var btn = document.createElement('button');
    btn.classList = 'btn btn-danger m-2';
    btn.innerText= '♫ ' + music;    
    container.appendChild(btn);       
})
var btns = document.querySelectorAll(".btn");

function audioPlayPause(btn, music){
    btn.addEventListener('click', () =>{    
        return music.paused ? music.play() : music.pause();
    })
}
audioPlayPause(btns[0], music1);
audioPlayPause(btns[1], music2);
audioPlayPause(btns[2], music3);
audioPlayPause(btns[3], music4);
audioPlayPause(btns[4], music5);