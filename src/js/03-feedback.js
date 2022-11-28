import throttle from 'lodash.throttle';

// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".

const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('input[name="email"]');
const messageForm = document.querySelector('textarea[name="message"]');
const dataBase = {email: '', message: '',};

function validateForm(e) {
  const { name, value } = e.target;
  dataBase[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
}
function submitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(dataBase);
}

// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

function getDataBase() {
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  if (parsedData) {
    emailForm.value = parsedData.email;
    messageForm.value = parsedData.message;
  }
}

feedbackForm.addEventListener('submit', submitForm);

feedbackForm.addEventListener('input', throttle(validateForm, 500));

getDataBase();
