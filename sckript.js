const buyBtn = document.querySelector('#buy');
const detailsBtn = document.querySelector('#details');
const deliveryBtn = document.querySelector('#delivery');
const clearBtn = document.querySelector('#clear');

const buyMessage = document.querySelector('#buy-message');
const detailsInfo = document.querySelector('#details-info');
const deliveryInfo = document.querySelector('#delivery-info');

buyBtn.addEventListener('click', function() {
  buyMessage.textContent = 'Спасибо за заказ! Товар добавлен в корзину.';
});

detailsBtn.addEventListener('click', function() {
  detailsInfo.textContent = 'Экран 6.5", 128 ГБ памяти, гарантия 1 год.';
});

deliveryBtn.addEventListener('click', function() {
  deliveryInfo.textContent = 'Доставка по городу — 300 ₽';
});

clearBtn.addEventListener('click', function() {
  buyMessage.textContent = '';
});


