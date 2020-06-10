const radioA = document.getElementById('radio-a');
const radioB = document.getElementById('radio-b');
const result = document.getElementById('result');
const btnArry = document.querySelectorAll('button');

btnArry[0].onclick = function () {
    let res = 0;
    if (radioA.checked) {
        res = document.querySelector('#str-a').value.length
    } else if (radioB.checked) {
        res = document.querySelector('#str-b').value.length
    }
    result.innerHTML = '当前选中长度为: ' + res

}

btnArry[1].onclick = function () {
    if (radioA.checked) {
        res = document.querySelector('#str-a').value.charAt(2);
    } else if (radioB.checked) {
        res = document.querySelector('#str-b').value.charAt(2);
    }
    result.innerHTML = '当前选中输入中的第3个字符为: ' + res

}

btnArry[2].onclick = function () {
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    let res = res1.concat(res2);
    result.innerHTML = '把两个输入框的文字连接在一起输出为: ' + res
}
btnArry[3].onclick = function () {
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    let res = res1.indexOf(res2);
    result.innerHTML = '输入B中的内容，在输入A的内容中第一次出现的位置为: ' + res

}

btnArry[4].onclick = function () {
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    let res = res2.lastIndexOf(res1);
    result.innerHTML = '输入A中的内容，在输入B的内容中最后一次出现的位置为: ' + res
}
btnArry[5].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    let numA = document.getElementById('num-a').value;
    let numB = document.getElementById('num-b').value;
    if (radioA.checked) {
        res = res1.slice(numA, numB);
    } else if (radioB.checked) {
        res = res2.slice(numA, numB);
    }
    result.innerHTML = '输入A中的内容，在输入B的内容中最后一次出现的位置为: ' + res
}

btnArry[6].onclick = function () {
    let res = 0;
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;

    if (radioA.checked) {
        res = res1.split(/\r*\n/).length;
    } else if (radioB.checked) {
        res = res2.split(/\r*\n/).length;
    }

    result.innerHTML = '当前选中输入框的行数为: ' + res

}


btnArry[7].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    let numA = document.getElementById('num-a').value;
    let numB = document.getElementById('num-b').value;
    if (radioA.checked) {
        res = res1.substr(numA, numB);
    } else if (radioB.checked) {
        res = res2.substr(numA, numB);
    }
    result.innerHTML = '使用substr获取选中输入框内容的子字符串为: ' + res
}

btnArry[8].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    if (radioA.checked) {
        res = res1.toUpperCase();
    } else if (radioB.checked) {
        res = res2.toUpperCase();
    }
    result.innerHTML = '把所选输入框中的内容全部转为大写为: ' + res
}

btnArry[9].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    if (radioA.checked) {
        res = res1.toLowerCase();
    } else if (radioB.checked) {
        res = res2.toLowerCase();
    }
    result.innerHTML = '把所选输入框中的内容全部转为小写为: ' + res
}

// 　　去除字符串内所有的空格：str = str.replace(/\s*/g,"");

// 　　去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");

// 　　去除字符串内左侧的空格：str = str.replace(/^\s*/,"");

// 　　去除字符串内右侧的空格：str = str.replace(/(\s*$)/g,"");
btnArry[10].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    if (radioA.checked) {
        res = res1.replace(/\s*/g, '');
    } else if (radioB.checked) {
        res = res2.replace(/\s*/g, '');
    }
    result.innerHTML = '把所选输入框中内容的半角空格全部去除为: ' + res
}
btnArry[11].onclick = function () {
    let res = '';
    let res1 = document.getElementById('str-a').value;
    let res2 = document.getElementById('str-b').value;
    if (radioA.checked) {
        res = res1.replace(res1, res2);
    } else if (radioB.checked) {
        res = res2.replace(res2, res1);;
    }


    result.innerHTML = '把所选输入框中内容的a全部替换成另外一个输入框中的内容为: ' + res
}