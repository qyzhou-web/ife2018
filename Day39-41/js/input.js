//编辑td单元格
function editTd(target) {
    let numValue = target.innerText;
    let input = document.createElement('input');
    input.setAttribute('type', 'text')
    target.innerHTML = '';
    target.appendChild(input);
    input.focus();
    document.querySelector('table input').value = +numValue;
    for (let i = 0; i < 2; i++) {
        const button = document.createElement('button');
        if (i === 0) {
            button.setAttribute('class', 'cancel');
        } else {
            button.setAttribute('class', 'confirm');
        }
        target.appendChild(button);

    }

}

//判断当target等于button时需要修改的td
function editButton(target, preValue) {
  
    if (target.className === "confirm") {
        let inputValue = target.parentElement.firstChild.value;
        let product = target.parentElement.getAttribute("data-product");
        let region = target.parentElement.getAttribute("data-region");
        let index = target.parentElement.getAttribute("data-month");
        target.parentElement.innerHTML = inputValue;
     
        console.log(getLocalStorage())
        if (isNaN(inputValue)) {
            alert('请输入数字')
        } else {
            updateLocalStorage(product, region, index-1, +inputValue);//数组的序号要减一
  
        }
    } else {
        target.parentElement.innerHTML = preValue
    }
}