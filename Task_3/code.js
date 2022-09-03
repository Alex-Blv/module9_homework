
// Находим элементы
const inputNode = document.getElementsByTagName('input')[0],
 buttonNode = document.getElementById('button'),
 resultNode = document.getElementById('result');

const url = 'https://picsum.photos/v2/list?limit=';

// Проверяем ввод, я еще добавил унарный плюс
const checkInputValueLimit = url  => {
  const inputResult = +inputNode.value;

  if (1 <= inputResult && inputResult <= 10) {
    const limit = `${url}${inputResult}`;
    newFunction(limit);
  } else {
    resultNode.innerHTML = `Число вне диапазона от 1 до 10`;
  }

  function newFunction(limit) {
    xhrRequest(limit);
  }
}
const xhrRequest = limit => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', limit, true);
  xhr.onload =  () => {
    if (xhr.status !== 200) {
      console.log('Status is', xhr.status);
    } else if (xhr.onerror) {
      console.log('Error. Status is', xhr.status);
    } else {
      const response = newFunction_1(xhr);
      displayResult(response);
    }
  }
  xhr.send()
}
const displayResult = apiData => {
  let cards='';
  let resultData = apiData.forEach( elem => {
    const newItems =
      `<div class="card"><img src="${elem.download_url}" class="card-image"/><p>${elem.author} - ${elem.width}px</p></div>`;
    

    cards += newItems;
  }
  )
  resultNode.innerHTML = cards;
}

buttonNode.addEventListener('click', () => {
  checkInputValueLimit(url);
})

function newFunction_1(xhr) {
  return JSON.parse(xhr.response);
}
