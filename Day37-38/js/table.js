// 根据data, 渲染表格
function createTable(data) {
    var tableHTML,
        row,
        vals,
        i,
        j;

    // 按照商品、地区的顺序对data排序
    data = data.sort(function (a, b) {
        var t;

        t = hansSortByAccent(a.product, b.product);
        if (!t) {
            return hansSortByAccent(a.region, b.region);
        }
        return t;
    });
    tableHTML = '';
    tableHTML += '<table border="1" cellspacing="0" bordercolor="#000" width = "80%" style="border-collapse:collapse;text-align:center;">';
    tableHTML += '<tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th>';
    tableHTML += '<th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>';
    for (i = 0; i < data.length; i++) {
        row = '<tr>';
        vals = [];
        vals = flatten2d(Object.values(data[i]));
        for (j = 0; j < vals.length; j++) {
            if (j >= 2) {
                //设置自定义属性，方便之后获得值
                row += '<td  data-product=' + vals[0]
                        + ' data-region=' + vals[1] + ' data-month=' + (j-1)
                        + '>' + vals[j] + '</td>';
            } else {
                row += '<td>' + vals[j] + '</td>';
            }
        }
        row += '</tr>';
        tableHTML += row;
    }
    tableHTML += '</table>';
    document.querySelector("#table-wrapper").innerHTML = tableHTML;
}

// 汉字根据拼音排序
function hansSortByAccent(a, b) {
    return a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'});
}

// 在表格tb的col列从row行开始根据单元格内容自动添加rowspan
function autoRowSpan(tb, row, col) {
    var lastValue,
        currValue,
        count,
        i;

    lastValue = "";
    currValue = "";
    count = 0;
    for (i = row; i < tb.rows.length; i++) {
        currValue = tb.rows[i].cells[col].innerHTML;
        if (currValue === lastValue) {
            tb.rows[i].deleteCell(col);
            tb.rows[i-row-count].cells[col].rowSpan = row + count + 1;
            count++;
        } else {
            lastValue = currValue;
            count = 0;
        }
    }
}

// 交换表格tb的row行中col1单元格和col2单元格的内容
function exchCellValueOfOneRow(tb, row, col1, col2) {
    var t;

    t = tb.rows[row].cells[col1].innerHTML;
    tb.rows[row].cells[col1].innerHTML = tb.rows[row].cells[col2].innerHTML;
    tb.rows[row].cells[col2].innerHTML = t;
}
// 展开嵌套数组
function flatten2d(a) {
    var res,
        i;

    res = [];
    for (i = 0; i < a.length; i++) {
        res = res.concat(a[i]);
    }
    return res;
}
