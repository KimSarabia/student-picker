// 'use strict';

function nameadd() {
    var nameNew = new objectName();
    console.log(nameNew);
    document.getElementById('textinput').value = '';
    console.log('hello');
}

function objectName() {
    var name = document.getElementById('textinput').value;
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(name);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
}

function getRandom(){
  var ul = document.querySelector('#place')
  var lis = ul.childNodes
  var qty = lis.length
  var rndIndex = Math.floor(Math.random() * qty)
  var rndLi = lis[rndIndex]
  var randomName = document.getElementById('placeholder');
  randomName.classList.add('mystyle');
  randomName.innerHTML = rndLi.innerText;

}


// var names = ['ryan', 'ashley', 'karston', 'luciano', 'will'];

// function sample(array){
//     return array[Math.floor( Math.random() * array.length)]
// }

// function shuffle(array) {
//     var arrayCopy = array.concat()

//     return shuffledArray;
// }

// function pop(array) {
//     return array.pop();
// }

// function shuffle(names) {
//     var i, j, foo;
//     for (foo = names.length; foo; foo -= 1) {
//         i = Math.floor(Math.random() * foo);
//         j = a[foo - 1];
//         names[foo - 1] = names[i];
//         names[i] = j
//     }
//     return names;
// }
// var shuffledArray = shuffle(names);
