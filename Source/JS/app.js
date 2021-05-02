const addBtn = document.querySelector('.form a')
const textBox = document.querySelector('.form input')
const item = document.querySelector('.item-main-container')

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
        //console.log('lll')
   

})

function uiDisplay(){
    const markup = `
    <div class="item">
                    <h5>${textBox.value}</h5>
                    <div class="task-btn">
                       <a href=""><i class="far fa-check-circle correct"></i></a>
                       <a href=""><i class="far fa-edit edit"></i></a>
                       <a href=""><i class="far fa-times-circle x"></i></a>
                    </div>
    `
    item.insertAdjacentHTML("afterbegin", markup)
}


}

ui()


