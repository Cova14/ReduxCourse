//  import * as Redux from 'redux'
import { createStore, combineReducers } from 'redux'
//  nodes
let input = document.getElementById("input");
let addEmail = document.getElementById("addEmail")
let list = document.getElementById("list");
let emailList = document.getElementById("emailList");
let addDish = document.getElementById('addDish');
let dishesList = document.getElementById('dishesList');
let todos = {
  0: {
    text: "Ir al cine",
    done: false
  },
  1: {
    text: "Cenar",
    done: true
  },
  2: {
    text: "Grabar",
    done: false
  }
};
// function

function drawDishes() {
  dishesList.innerHTML = "";
  let dishes = store.getState().dishes;
  for (let id in dishes) {
    let li = document.createElement('li')
    let classDone = dishes[id].done ? "done" : ""
    li.innerHTML = `
      <span id="${id}" class="${classDone}">${dishes[id].name}</span>
      <span data-id="${id}" data-action="delete">X</span>
    `;
    setDishesListener(li, dishes);
    dishesList.appendChild(li);
  }
};

function setDishesListener(li, dishes) {
  li.addEventListener('click', e => {
    if(e.target.getAttribute("data-action") === "delete") {
      let id = e.target.getAttribute('data-id');
      store.dispatch({
        type: 'DELETE_DISH',
        id
      })
      return;
    }
    let id = e.target.id
    dishes[id].done = !dishes[id].done
    store.dispatch({
      type: 'UPDATE_DISH',
      dish: dishes[id]
    })
  })
}

function drawEmails() {
  emailList.innerHTML = "";
  let emails = store.getState().emails;
  emails.map(email => {
    let li = document.createElement('li')
    li.innerHTML = `
      <span>${email}</span>
      <span id=${email}>X</span>
    `
    setEmailClickListener(li)
    emailList.appendChild(li)
  });
};

function setEmailClickListener(li) {
  li.addEventListener('click', e => {
    let email = e.target.id
    store.dispatch({
      type: 'DELETE_EMAIL',
      email
    });
  });
};

function drawTodos() {
  list.innerHTML = "";
  // actualizar los todos antes de dibujar
  todos = store.getState().todos;
  for(let key in todos) {
    let li = document.createElement('li');
    // li.id = key;
    let classDone = todos[key].done ? "done" : ""
    li.innerHTML = `
      <span id="${key}" class="${classDone}">${todos[key].text}</span>
      <span data-id="${key}" data-action="delete" >X</span>
    `;
    setListeners(li);
    list.appendChild(li);
  }
};

function setListeners(li){
  li.addEventListener('click', e => {
    if(e.target.getAttribute("data-action") === "delete") {
      let key = e.target.getAttribute('data-id');
      store.dispatch({
        type: 'DELETE_TODO',
        id: key
      });
      // delete todos[key];
      // drawTodos();
      return;
    }
    let key = e.target.id;
    todos[key].done = !todos[key].done;
    store.dispatch({
      type: 'UPDATE_TODO',
      todo: todos[key]
    });
    //todos[key].done = !todos[key].done
    //drawTodos()
  });
};

// Listeners
input.addEventListener('keydown', e => {
  if(e.key === "Enter") {
    let text = e.target.value;
    let todo = { text, done:false };
    e.target.value = ""
    store.dispatch({
      type: 'ADD_TODO',
      todo
    });
    //let id = Object.keys(todos).length;
    //todos[id] = {text, done:false};
    //drawTodos();
  }
});

addEmail.addEventListener('keydown', e => {
  if(e.key === "Enter") {
    let email = e.target.value
    e.target.value = ""
    store.dispatch({
      type: 'ADD_EMAIL',
      email
    })
  }
});

addDish.addEventListener('keydown', e => {
  if(e.key === 'Enter') {
    let name = e.target.value;
    let dish = { name, done:false };
    e.target.value = '';
    store.dispatch({
      type: 'ADD_DISH',
      dish
    });
  }
});

// REDUX

// tercer reducer para platillos
function dishesReducer(state = {}, action) {
  switch(action.type) {
    case 'ADD_DISH':
      action.dish["id"] = Object.keys(state).length;
      return{...state, [Object.keys(state).length]:action.dish};
    case 'UPDATE_DISH':
      return{...state, [action.dish.id]:action.dish};
    case 'DELETE_DISH':
      delete state[action.id];
      return{...state};
    default:
      return state;
  }
}

// segundo reducer para correos
function emailsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_EMAIL':
      return [action.email, ...state];
    case 'DELETE_EMAIL':
      return [...state.filter(email => email !== action.email)];
    default:
      return state;
  }
};

// reducer
function todosReducer(state={}, action) {
  switch(action.type) {
    case 'ADD_TODO':
      action.todo["id"] = Object.keys(state).length;
      return {...state, [Object.keys(state).length]:action.todo};
    case 'UPDATE_TODO':
      return {...state, [action.todo.id]:action.todo};
    case "DELETE_TODO":
      delete state[action.id];
      return {...state};
    default:
      return state;
  }
};

// combinar los reducers
let rootReducers = combineReducers({
  todos: todosReducer,
  emails: emailsReducer,
  dishes: dishesReducer
})

// store
let store = createStore(rootReducers, {
  emails: [
    "correo@correo.com"
  ],
  todos: {
    0: {
      text: 'Crear mi propio ejemplo en base a los todos',
      done: true,
      id: 0
    }
  },
  dishes: {
    0: {
      name: 'Taquitos de suaperro',
      done: false,
      id: 0
    }
  }
});

// sustituir los todos
//todos = store.getState()

// que hacer cuando hay cambios
// store.subscribe(drawTodos)
store.subscribe(() => {
  drawTodos();
  drawEmails();
  drawDishes();
})

// init
drawTodos();
drawEmails();
drawDishes();
