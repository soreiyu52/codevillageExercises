const htmlBody = document.body;

const newH1 = document.createElement('h1');
newH1.textContent = 'DOM'
htmlBody.appendChild(newH1);

const newP = document.createElement('p');
newP.textContent = 'JavaScriptからHTMLを扱うための仕組み'
htmlBody.appendChild(newP);

const newH2 = document.createElement('h2');
newH2.textContent = '印象に残っているトピック'
htmlBody.appendChild(newH2);

const newUl = document.createElement('Ul');

const newLi1 = document.createElement('li');
newLi1.textContent = 'documentオブジェクト'
newUl.appendChild(newLi1);

const newLi2 = document.createElement('li');
newLi2.textContent = 'getElementById'
newUl.appendChild(newLi2);

const newLi3 = document.createElement('li');
newLi3.textContent = 'イベントリスナ'
newUl.appendChild(newLi3);

htmlBody.appendChild(newUl);

