# popup


Задание 
1. Необходимо написать js скрипт реализующий функционал попап-формы 

2. Алгоритм: скрипы цепляется за html элемент (кнопку), имеющую определенный css класс при нажатии на кнопку возникает попап-форма, содержащая набор полей: имя, емейл, телефон Есть возможность закрыть форму Форма должна корректно отображаться на PC и мобильных устройствах. В случае мобилы - заполнять весь экран Форма должна содержать собственные, уникальные css стили  в элементе кнопки также присутствуют специальные атрибуты вида data-form-* Попап-форма должна отправить POST запрос на определенный URL, при этом в запросе должны присутствовать: поля формы имена и значения специальных атрибутов data-form-*  без префикса (dataform-), например data-form-dn_id=15 превращается в параметр dn_id=15 параметр COOKIE=cookie1;cookie2;….cookieN, где CookieN - пара вида имя_куки=значение_куки принадлежащей данному домену (.domain) Получить ответ в формате json, где: err_mes = [‘ok’, ‘fail message’] redirect_url - ссылка для переадресации если err_mes != ‘ok’ - вывести сообщение об ошибке в форме если err_mes == ‘ok’ - выполнить переадресацию на redirect_url (если параметр не пустой)

3. Требования скрипт должен быть написан на чистом js, без необходимости подгрузки сторонних библиотек типа jquery допускается использования стороннего кода для ускорения процесса скрипт должен работать на современных браузерах
