const addBtn = document.querySelector('.form a')
const textBox = document.querySelector('.form input')
const item = document.querySelector('.item-main-container')
const items = document.querySelector('.items')
const list = document.getElementById('list')
const close = document.getElementById('close')


function ui(){
addBtn.addEventListener('click',()=>{
if(textBox.value === ''){
    alert('please add an item')
}
else{
   uiDisplay()
}
})

document.addEventListener('keypress',(event)=>{

if(event.keyCode === 13){
    if(textBox.value === ""){
        alert('please add an item')
    }
    else{
        uiDisplay()
    }
   }
})
}
let data = []

function uiDisplay(){

    let counter = 0
    const markup = `
    <div class="item-main-container" id="list-${counter+=1}">
    <div class="item">
                    <h5 class = "item-name text-capitalize">${textBox.value}</h5>
                    <div class="task-btn">
                       <button><i class="far fa-times-circle x"></i></button>
                    </div>
                    </div
    `
    
        item.insertAdjacentHTML("afterbegin", markup)
}

ui()


items.addEventListener('click',deleteUi)


function deleteUi(eve){
let id;
    id = eve.target.parentNode.parentNode.parentNode.parentNode.id

    if(id){
        //remove list
        x(id)
    }
}

function x(selectid){
    let elements = document.getElementById(selectid)
    elements.parentNode.removeChild(elements)
}


const hss = document.querySelector('.item-name')
