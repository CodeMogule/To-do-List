const addBtn = document.querySelector('.form a')
const textBox = document.querySelector('.form input')
const item = document.querySelector('.item-main-container')
const lists = document.querySelector('.lists')
const lastDiv = document.querySelector('.btn-clear-all')
const lastDivP = document.querySelector('.btn-clear-all p')
const time = document.querySelector('.time')

addBtn.addEventListener('click',addList)
lists.addEventListener('click',deleteItem)
lists.addEventListener('click',completedItem)
window.addEventListener('keypress',enterBtn)

 function timeZone(){
    let now,months,month,year;
    
    now = new Date()
    months = ['January' , 'February' , 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
    month = now.getMonth()
    year = now.getFullYear()
   time.textContent = months[month] + " " + year
}

timeZone()


function enterBtn(e){
    if(e.keyCode === 13){
        if(textBox.value === ''){
            lastDivP.style.display = 'block'
        }else{
            addList()
        }
    }
}


function addList(e){
   // console.log('5ara')

   if(textBox.value === ""){
      lastDivP.style.display = 'block'
   }else{

    lastDivP.style.display = 'none'

   const toDoDiv = document.createElement('div')
   toDoDiv.classList.add('to-do')

   const li = document.createElement('li')
   li.classList.add('to-do-list')
   li.innerText= textBox.value
   toDoDiv.appendChild(li)

   const correct = document.createElement('button')
   correct.innerHTML = '<i class="far fa-check-circle"></i>'
   correct.classList.add('correct')
   toDoDiv.appendChild(correct)

   const x = document.createElement('button')
   x.innerHTML = '<i class="far fa-times-circle"></i>'
   x.classList.add('x')
   toDoDiv.appendChild(x)

   lists.appendChild(toDoDiv)

   textBox.value=''
   }
}


function deleteItem(event){
    const item = event.target
    if(item.classList[0] === 'x'){
    const todo = item.parentElement
    todo.remove()
    }
}

function completedItem(event){
    
    const item = event.target
    console.log(item)
    if(item.classList[0] === 'correct'){
        console.log(item)
        const comp = item.parentElement;
        comp.classList.toggle('completed')

    }
}