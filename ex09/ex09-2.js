const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

// <button id="add">がクリックされたとき
addButton.addEventListener('click', (event) => {
    const item = 'アイテム' + (list.getElementsByTagName('li').length + 1)
    const newItem = document.createElement('li');

    const newImg = document.createElement('img');
    newImg.setAttribute('src', 'http://placehold.it/64x64');
    newImg.setAttribute('alt', item);
    newItem.appendChild(newImg);

    const newSpan = document.createElement('span');
    newSpan.textContent = item;
    newItem.appendChild(newSpan);

    list.appendChild(newItem);
})

// <button id="remove">がクリックされたとき
removeButton.addEventListener('click', (event) => {
    if (list.getElementsByTagName('li').length > 0) {
        list.removeChild(list.lastElementChild);
    }
})
