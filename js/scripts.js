// Получить модальное окно
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальное окно
var btn = document.getElementById("openModalBtn");

// Получить элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Получить форму и сообщение об отправке
var form = document.getElementById("applicationForm");
var successMessage = document.getElementById("successMessage");

// Когда пользователь нажимает на кнопку, откройте модальное окно
btn.onclick = function() {
    modal.style.display = "block";
    form.style.display = "block";
    successMessage.style.display = "none";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального окна, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработчик отправки формы
form.onsubmit = function(event) {
    event.preventDefault(); // Остановить стандартное поведение отправки формы

    // Получить данные формы
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    // Здесь можно добавить код для отправки данных на сервер
    console.log("ФИО: " + name);
    console.log("Номер телефона: " + phone);

    // Показать сообщение об отправке
    form.style.display = "none";
    successMessage.style.display = "block";

    // Очистить форму после отправки
    form.reset();
}