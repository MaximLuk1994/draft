setSelect = function(element) {
    const select = document.querySelector(element),
        input = select.querySelector('input'),
        optionsContainer = select.querySelector(`${element}>input+div`),
        options = optionsContainer.querySelectorAll(`${element}>input+div>div`);

        select.style.display = 'inline-block';
        select.style.position = 'relative';
        input.style.position = 'relative';
        optionsContainer.style.display = 'none';
        optionsContainer.style.position = 'absolute';
        optionsContainer.style.width = '100%';
        //Сделать input шириной в 100%

        input.addEventListener('click', () => {
            if (optionsContainer.style.display == 'none'){
                optionsContainer.style.display = '';
            }
            else {
                optionsContainer.style.display = 'none';
            }
        });

        document.addEventListener('click', (event) => {
            // if (select.contains(event.target).length === 0){
            //     optionsContainer.style.display = 'none';
            // }
            // let element = event.target || event.srcElement;
            // console.log(element);
            
            
        });

    options.forEach(function(element){
        element.addEventListener('click', () => {
            let optionValue = element.textContent;
                input.value = optionValue;
                optionsContainer.style.display = 'none';
        });
    });

}