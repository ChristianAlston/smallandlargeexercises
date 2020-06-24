const h1 = document.getElementById('heading');
h1.innerText = 'Toppings';

const uglyClass = document.getElementById('burger');
uglyClass.classList.add('randomclass');

const addNewEle = (text) => {
    let listItem = document.createElement('li');
    let list = document.getElementById('list');
    listItem.append(text);
    list.append(listItem);
}

addNewEle('hello there');