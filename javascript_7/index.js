// let element = document.getElementsByTagName('div');
// element.innerHTML = '<i style="color:blue";>Dasturchilar</i>';
// element.innerText = 'Hello World';
// console.log();

// let element = document.getElementsByClassName('container');
// element[0].innerHTML = '<b>KOMPUTER</b>';
// console.log(element[0]);

let name = prompt('Son kiriting');
let elem = document.getElementById("text");
elem.style.fontSize = `${name}px`;
