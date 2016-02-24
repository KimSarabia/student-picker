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