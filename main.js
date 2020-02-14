// import * as Redux from 'redux'
// nodes
let input = document.getElementById("input")
let list = document.getElementById("list")
let todos = {}
//function
function drawTodos(){
  list.innerHTML = ""
  for(let key in todos) {
    let li = document.createElement('li')
    li.id = key
    li.innerHTML = `
      <span>${todos[key]}</span>
      <span id="${key}">X</span>
    `
    list.appendChild(li)
  }
}

//Listeners
input.addEventListener('keydown', e => {
  if(e.key === "Enter") {
    let text = e.target.value
    let id = Object.keys(todos).length
    todos[id] = text
    drawTodos()
  }
})