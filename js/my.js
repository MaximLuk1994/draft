setTabs = function(element) {
    const form = document.querySelector(element),
        tabControl = form.querySelectorAll(`${element} :first-child :first-child>ul>li`);

    tabControl.forEach(function(element) {
        let btn = element.querySelector('a'),
            tabHref = btn.getAttribute('href'),//Находит её href
            tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
        tab.classList.add('my-tab-content--nonactive');
    });
    let btn = tabControl[0].querySelector('a'),
            tabHref = btn.getAttribute('href'),//Находит её href
            tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
        tab.classList.add('my-tab-content--active');
        tab.classList.remove('my-tab-content--nonactive');

    tabControl.forEach(function(element){
        element.addEventListener('click', () => {
            let btn = element.querySelector('a'),//Находит ссылку внутри переключателя
                tabHref = btn.getAttribute('href'),//Находит её href
                tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
            

            tabControl.forEach(function(element) {
                let btn = element.querySelector('a'),
                    tabHref = btn.getAttribute('href'),//Находит её href
                    tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
                tab.classList.add('my-tab-content--nonactive');
                tab.classList.remove('my-tab-content--active');
            });

            tab.classList.remove('my-tab-content--nonactive');
            tab.classList.add('my-tab-content--active');
        });
    });
} 

setSelect = function(element) {
    const select = document.querySelector(element),
        input = select.querySelector('input'),
        optionsContainer = select.querySelector(`${element}>input+div`),
        options = optionsContainer.querySelectorAll(`${element}>input+div>div`);

        //Сделать input шириной в 100%
        select.classList.add('my-select');
        input.classList.add('my-select__input');
        optionsContainer.classList.add('my-select__container--nonactive');

        options.forEach(function(element) {
            element.classList.add('my-select__option');
            element.addEventListener('click', () => {
                let optionValue = element.textContent;
                    input.value = optionValue;
                    optionsContainer.classList.add('my-select__container--nonactive');
                    optionsContainer.classList.remove('my-select__container--active');
            });
        });


        input.addEventListener('click', () => {
            if (optionsContainer.classList.contains('my-select__container--nonactive')) {
                optionsContainer.classList.remove('my-select__container--nonactive');
                    optionsContainer.classList.add('my-select__container--active');
            }
            else {
                optionsContainer.classList.remove('my-select__container--active');
                    optionsContainer.classList.add('my-select__container--nonactive');
            }
        });

        document.addEventListener('click', (event) => {
            if (!event.target.matches(`${element} *`)) {
                optionsContainer.classList.remove('my-select__container--active');
                optionsContainer.classList.add('my-select__container--nonactive');
            };
        });

        // input.addEventListener('blur', () => {
        //     optionsContainer.classList.remove('my-select__container--active');
        //     optionsContainer.classList.add('my-select__container--nonactive');
        // });

        document.addEventListener('keyup', (event) => {
            if (event.key === "Escape") {
                optionsContainer.classList.remove('my-select__container--active');
                optionsContainer.classList.add('my-select__container--nonactive');
            }
        });
    //Сделать проверку на равенство option-ам и введённого текста
    //Добавить стрелочку-картинку в правой части инпута
    //Переключение стрелками, выбор энтером, tab
    //
}