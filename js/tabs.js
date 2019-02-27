setTabs = function(element) {
    const form = document.querySelector(element),
        tabControl = form.querySelectorAll(`${element}:first-child :first-child>ul>li`);

        tabControl.forEach(function(element) {
            let btn = element.querySelector('a'),
                tabHref = btn.getAttribute('href'),//Находит её href
                tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
            tab.style.display = 'none';//Меняет дисплей этого элемента
        });
        let btn = tabControl[0].querySelector('a'),
                tabHref = btn.getAttribute('href'),//Находит её href
                tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
            tab.style.display = 'block';

    tabControl.forEach(function(element){
        element.addEventListener('click', () => {
            let btn = element.querySelector('a'),//Находит ссылку внутри переключателя
                tabHref = btn.getAttribute('href'),//Находит её href
                tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
            

            tabControl.forEach(function(element) {
                let btn = element.querySelector('a'),
                    tabHref = btn.getAttribute('href'),//Находит её href
                    tab = form.querySelector(tabHref);//Находит элемент, на который она нацелена
                tab.style.display = 'none';//Меняет дисплей этого элемента
                tab.classList.remove('tab-content-active');
            });

            tab.style.display = '';
            tab.classList.add('tab-content-active');
        });
    });
} 
