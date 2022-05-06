// Criando o input da lista de tarefas//
let myNodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodelist.length; i++) {
  var input = document.createElement("input");
  input.setAttribute("type","radio");
  input.className = "close";
  myNodelist[i].appendChild(input);
}

// Fechando uma tarefa marcada como concluída (display none na seção de tarefas abertas)
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//ouvir o clique (ev) de adição de item na lista já chamando a função de ordenar alfabéticamente os itens inseridos 
let myList = document.querySelector('.todoList');
myList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'INPUT') {
        newCompletedElement(ev.target.value) 
        sortList()   
    }
}, false);

//ouvir o clique (ev) de remoção de item da lista de itens completos já chamando a função de ordenar alfabéticamente os itens 
let completedList = document.querySelector('.completedTodoList');
completedList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'INPUT') {
        newElement(ev.target.value) 
        sortList()   
    }
}, false);

// Tarefa completada
function newCompletedElement(task) {
  const formattedTask = capitalizeFirstLetter(task);
  let li = document.createElement("li");
  let t = document.createTextNode(formattedTask);
  li.appendChild(t);
  document.getElementById("myCompletedList").appendChild(li);
  const input = document.createElement("INPUT");
  input.setAttribute("type","radio");
  input.className = "close";
  input.value = formattedTask;
  li.appendChild(input);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  sortList("myCompletedList")
}

function newElement(task) {
  if(task != ""){
    const formattedTask = capitalizeFirstLetter(task);
    let li = document.createElement("li");
    let t = document.createTextNode(formattedTask);
    li.appendChild(t);
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";
    let input = document.createElement("INPUT");
    input.setAttribute("type","radio");
    input.className = "close";
    input.value = formattedTask;
    ;
    li.appendChild(input);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
    sortList("myList");
  }
  }

//Função - ordem alfabética
function sortList(List) {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById(List);
    switching = true;
 
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("li");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

  //Função que deixa apenas a primeira letra do sintagma maiúscula - 
  // é chamada em outras funções anteriormente 
  function capitalizeFirstLetter(string) {
      string = string.toLowerCase(); // colocando todos os caracteres em minúsculo 
    return string.charAt(0).toUpperCase() + string.slice(1); //charAt é um método que retorna o caractere específico dentro de uma string, toUpperCase é um método que capitaliza 
  }