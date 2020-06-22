var CHECKBOXSET_IDS;
CHECKBOXSET_IDS = ["region-radio-wrapper", "product-radio-wrapper"];

function createCheckBox(id, arr) {
    let div1 = document.getElementById(id);
    let i = 0;
    arr.forEach(function (item) {
        let checkBox = document.createElement('input');
        let label = document.createElement('label');
        let section = document.createElement('section');
        i++;

        if (i === arr.length) {
            checkBox.setAttribute('checkbox-type', 'all');
        } else {
            checkBox.setAttribute('checkbox-type', 'single');
        }
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', item.name);
        checkBox.setAttribute('id', item.id);
        checkBox.setAttribute('value', item.value);
        label.innerText = item.text;
        label.setAttribute('for', item.id)
        section.appendChild(label);
        section.appendChild(checkBox);
        div1.appendChild(section);
    })
    div1.onclick = function (e) {
        e = e || window.e;
        let target = e.target || e.srcElement;
        const inputAll = document.querySelector("#" + id + " input[checkbox-type='all']")
        const inputSingleArray = Array.apply(null, document.querySelectorAll("#" + id + " input[checkbox-type='single']"))
        let selectedInputSingleArry = inputSingleArray.filter(function (item) {
            return item.checked === true;
        })
        let length1 = selectedInputSingleArry.length;
        let length2 = inputSingleArray.length;
        // if(target.nodeName.toLowerCase)
        if (target.nodeName.toLowerCase() === "input") {
            if (target === inputAll) {
                if (length1 === length2) {
                    e.preventDefault();
                }
                inputSingleArray.forEach(function (item) {
                    item.checked = true;

                })
            } else {

                if (length1 === 0) {
                    e.preventDefault();
                }
                if (length1 === length2) {
                    inputAll.checked = true;
                } else {
                    inputAll.checked = false;
                }
            }
        }
    }

}

function getShowDate() {
    let showCheckBox = [];

    for (let i = 0; i < CHECKBOXSET_IDS.length; i++) {
        if (CHECKBOXSET_IDS[i] === "product-radio-wrapper") {
            let showCheckBox1 = getDate(CHECKBOXSET_IDS[i], "product", getLocalStorage() || sourceData);
            showCheckBox = getDate("region-radio-wrapper", "region", showCheckBox1)
        } else if (CHECKBOXSET_IDS[i] === "region-radio-wrapper") {
            let showCheckBox2 = getDate(CHECKBOXSET_IDS[i], "region", getLocalStorage() || sourceData);
            showCheckBox = getDate("product-radio-wrapper", "product", showCheckBox2)
        }

    }
    return showCheckBox
}
//现在要完成可以根据checked的状态来筛选出数据并返回

function getDate(id, type, array) {
    let selectedArray = getCheckBox(id);
    let selectedSourceData = [];
    for (let i = 0; i < selectedArray.length; i++) {
        let selectedData = array.filter(function (item) {
            return item[type] === selectedArray[i]
        })
        selectedSourceData.push(...selectedData); //...将数组展开放入另一个数组中

    }
    return selectedSourceData

}
//获得被选中的产品和地区的value数组
function getCheckBox(id) {
    let selectedValueSingleArray = [];
    const inputSingleArray = Array.apply(null, document.querySelectorAll("#" + id + " input[checkbox-type='single']"));
    let selectedInputSingleArray = inputSingleArray.filter(function (item) {
        return item.checked === true;
    })
    selectedInputSingleArray.forEach(function (item) {
        selectedValueSingleArray.push(item.value);
    })
    return selectedValueSingleArray;
}