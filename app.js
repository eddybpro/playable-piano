const pianoKeys = document.querySelectorAll('.key');
const availablekeys = [];
const showKeysBtn = document.getElementById('showHide')
const volume = document.getElementById('volume')
const keys = document.body;
const audio = new Audio(`assets/tunes/a.wav`);


volume.addEventListener('input', (e)=>{
    audio.volume = e.target.value;
})

showKeysBtn.addEventListener('click', ()=>{
    pianoKeys.forEach(key=>{
        key.firstElementChild.classList.toggle('hide');
    })
})

keys.addEventListener('keyup', (e)=>playAudio(e.key))

pianoKeys.forEach(key=>{
    availablekeys.push(key.dataset.key)
    key.addEventListener('click',()=> playAudio(key.dataset.key))
})

function playAudio(key){
    if(availablekeys.includes(key)){
        audio.src = `assets/tunes/${key}.wav`
        audio.play();
        const klickedKey = document.querySelector(`[data-key = "${key}"] `);
        klickedKey.classList.add('klicked');

        setTimeout(()=>{
            klickedKey.classList.remove('klicked')
        },850)
    }
}

