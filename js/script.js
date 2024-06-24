let $ = document;

const input = $.querySelector('input');
const addBtn = $.querySelector('.add');
const eraserBtn = $.querySelector('.eraser');
const colorsBox = $.querySelectorAll('.color-container > div');
const notesContainer= $.querySelector('.note-container');

function generateNewNote(){
    let newDivElement = $.createElement('div');
    newDivElement.className = 'note-container';
    let inputBg = input.style.backgroundColor;
    newDivElement.style.backgroundColor = inputBg;

    newDivElement.addEventListener('click', removeNote)

    let newNotePElement = $.createElement('p');
    newNotePElement.className = 'red';
    newNotePElement.innerHTML = input.value;
    newDivElement.appendChild(newNotePElement);

    notesContainer.appendChild(newDivElement);
    removeStyle();
}

function removeStyle(){
    input.value = '';
    input.style.backgroundColor = '';
}
function removeNote(event){
    event.target.parentElement.remove();
}

colorsBox.forEach(function(colorBox){
    colorBox.addEventListener('click' , function (event) {
        let background = getComputedStyle(colorBox).backgroundColor;
        input.style.backgroundColor = background;
    })
});

eraserBtn.addEventListener('click' , ()=>{
    removeStyle();
})


input.addEventListener('keydown', function(event){
    if(event.keyCode === 13 && input.value){
        generateNewNote();
    }
});


addBtn.addEventListener('click' , function(){
    if(input.value){
        generateNewNote();
    }
});
