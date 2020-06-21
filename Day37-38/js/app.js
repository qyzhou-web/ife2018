initLocalStorage();

createCheckBox("product-radio-wrapper", [{
    id: "手机",
    name: "product",
    value: "手机",
    text: "手机"
}, {
    id: "笔记本",
    name: "product",
    value: "笔记本",
    text: "笔记本"
}, {
    id: "智能音箱",
    name: "product",
    value: "智能音箱",
    text: "智能音箱"
}, {
    id: "product-all",
    name: "product",
    value: "select-all",
    text: "全选"
}]);

createCheckBox("region-radio-wrapper", [{
    id: "华东",
    name: "region",
    value: "华东",
    text: "华东"
}, {
    id: "华南",
    name: "region",
    value: "华南",
    text: "华南"
}, {
    id: "华北",
    name: "region",
    value: "华北",
    text: "华北"

}, {
    id: "region-all",
    name: "region",
    value: "select-all",
    text: "全选"
}]);


document.querySelector("#radio-wrapper").onclick = function (event) {
    if (event.target.nodeName.toLowerCase() === "input") {
        var selectedRegionNum,
            selectedProductNum,
            table,
            i;

        createTable(getShowDate());
        table = document.querySelector("#table-wrapper table");
        selectedRegionNum = getCheckBox("region-radio-wrapper").length;
        selectedProductNum = getCheckBox("product-radio-wrapper").length;
        if (selectedRegionNum === 1 && selectedProductNum !== 1) {
            for (i = 0; i < table.rows.length; i++) {
                exchCellValueOfOneRow(table, i, 0, 1);
            }
        }
        autoRowSpan(table, 1, 0);
    }
    //给生成的td里面是数字的单独加上一个类
    let tds = document.querySelectorAll('table td');
    for (let i = 0; i < tds.length; i++) {
        if (!isNaN(tds[i].innerText)) {
            tds[i].setAttribute('class', 'sale');
        }
    }
}

document.getElementById('table-wrapper').onmouseover = function (event) {
    if (event.target.nodeName.toLowerCase() === "td") {
        var cells,
            a,
            i;

        a = [];
        cells = event.target.parentElement.cells;
        for (let i = 2; i < cells.length; i++) {
            a.push(Number(cells[i].innerHTML));
        }
        let wrapper;
        const ids = ["#chart-using-svg", "#chart-using-canvas"]
        for (let i = 0; i < ids.length; i++) {
            if (i === 0) {
                wrapper = document.querySelector(ids[i]);
                wrapper.innerHTML = "";
                drawHistogram.wrapperId = ids[i];
                drawHistogram.setSingle(a);
            } else if (i === 1) {
                wrapper = document.querySelector(ids[i]);
                wrapper.innerHTML = "";
                lineChart.wrapperId = ids[i];
                lineChart.setLine(a);
            }

        }

    }
}
document.getElementById('table-wrapper').onmouseout = function () {
    let tb = document.querySelector('table');
    let rowVals = [];
    let colors = ["#d93a49", "#f47920", "#ffd400", "#45b97c", "#009ad6", "#145b7d", "#6f60aa", "#ef5b9c", "#87843b"];
    for (let i = 1; i <tb.rows.length; i++) {
        let cells = Array.from(tb.rows[i].cells).map(function (item) {
            return +item.innerHTML;
        })
        cells = cells.filter(function (item) {
            return !isNaN(item);
        })
        rowVals.push(cells)
    }
    //绘制多条折线图
    let wrapper = document.querySelector("#chart-using-canvas");
    if (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    lineChart.wrapperId = "chart-using-canvas";
    lineChart.setSomeLine(rowVals, colors);
}



let flag = true;//设置一个变量来控制只有一个td会变成编辑状态
let preValue = 0;//设置一个变量来记录未更改前的值




document.getElementById('table-wrapper').onclick = function (event) {
    
  if (event.target.nodeName.toLowerCase() === 'td') {
        if (flag && event.target.hasAttribute('class')) {
      preValue = event.target.innerText;
        editTd(event.target);
        flag = false;
    }}
    if (event.target.nodeName.toLowerCase() === 'button') {
        
        flag = true;
        editButton(event.target,preValue);
       
    }
}