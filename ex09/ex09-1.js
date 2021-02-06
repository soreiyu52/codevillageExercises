const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

// <button id="add">がクリックされたとき
addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    newItem.textContent = 'アイテム' + (list.getElementsByTagName('li').length + 1);
    list.appendChild(newItem);
})

// <button id="remove">がクリックされたとき
removeButton.addEventListener('click', (event) => {
    if (list.getElementsByTagName('li').length > 0) {
        list.removeChild(list.lastElementChild);
    }
})
