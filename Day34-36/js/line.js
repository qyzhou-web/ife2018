// function drawLinechart(data) {
//     var width,
//         height,
//         initAxisSpace,
//         xAxis,
//         yAxis,
//         axisColor,
//         pointSpace,
//         pointRadius,
//         pointColor,
//         lineColor,
//         strokeWidth,
//         max,
//         pxDataRatio;
//     width = 800;
//     height = 400;
//     initAxisSpace = 20;
//     xAxis = width - initAxisSpace;
//     yAxis = height - initAxisSpace;
//     axisColor = "#000";
//     pointSpace = parseInt(xAxis / data.length);
//     pointRadius = "3";
//     pointColor = "transparent";
//     lineColor = "#37A2DA";
//     strokeWidth = "2";
//     max = Math.max(...data);
//     pxDataRatio = yAxis / max;

//     let canvas = document.createElement('canvas');
//     canvas.setAttribute('width', width);
//     canvas.setAttribute('height', height);
//     let ctx = canvas.getContext('2d');
//     //开始画轴
//     ctx.beginPath();
//     ctx.moveTo(10, 10);
//     ctx.lineTo(10, 10 + yAxis);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(10, 10 + yAxis);
//     ctx.lineTo(10 + xAxis, 10 + yAxis);
//     ctx.stroke();
//     //    遍历数据 {
//     //     计算将要绘制数据点的坐标
//     //     绘制数据点        
//     //     if 不是第一个点 {
//     //         绘制这个数据点和上一个数据点的连线
//     //     }
//     //     记录下当前数据点的数据用于下一个点时绘制连线
//     // }
//     let tx, ty;
//     data.forEach(function (item, index) {
//         let x = 10 + pointSpace / 2;
//         let y = item / pxDataRatio + 10;
//         x = x + pointSpace * index;
//         ctx.save();
//         ctx.beginPath();
//         ctx.arc(x, y, 2, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.fillStyle = "red";
//         ctx.restore();
//         ctx.save();
//         ctx.strokeStyle = lineColor;
//         if (index !== 0) {
//             ctx.beginPath();
//             ctx.moveTo(tx, ty);
//             ctx.lineTo(x, y);
//             ctx.stroke();
//         }//当不为0的时候可以在后面等于前一个值，这样可以实时记录变量
//         tx = x;
//         ty = y;

//     })
//     return canvas
// }
lineChart = {
    wrapperId: "",
    data: [],
    width: 800,
    height: 400,
    initAxisSpace: 20,
    axisColor: "#000",
    pointRadius: "3",
    lineColor: "#37A2DA",
    strokeWidth: "2",
    canvas: null,
    x0: 0,
    y0: 0,
    xAxis: 0,
    yAxis: 0,
    pointSpace: 0,
    pxDataRatio: 0,

    init: function () {
        this.xAxis = this.width - this.initAxisSpace;
        this.yAxis = this.height - this.initAxisSpace;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        let ctx = this.canvas.getContext('2d');
        //开始画轴
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(10, 10 + this.yAxis);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(10, 10 + this.yAxis);
        ctx.lineTo(10 + this.xAxis, 10 + this.yAxis);
        ctx.stroke()
    },
    drawLine: function () {
        var ctx,
            pointSpace,
            pxDataRatio;
        pointSpace = this.pxDataSpace || parseInt(this.xAxis / this.data.length);
        pxDataRatio = this.pxDataRatio || this.yAxis / Math.max(...this.data);

        let tx, ty;
        ctx = this.canvas.getContext('2d');

        this.data.forEach(function (item, index) {
            let x = 10 + pointSpace / 2;
            let y = lineChart.height - 10 - (item * pxDataRatio);

            x = x + pointSpace * index;
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "red";
            ctx.restore();
            ctx.save();
            ctx.strokeStyle = lineChart.lineColor;
            if (index !== 0) {
                ctx.beginPath();
                ctx.moveTo(tx, ty);
                ctx.lineTo(x, y);
                ctx.stroke();
            } //当不为0的时候可以在后面等于前一个值，这样可以实时记录变量
            tx = x;
            ty = y;

        })

    },
    setLine: function (data) {
        this.data = data;
        this.init();
        this.drawLine();
        document.querySelector(this.wrapperId).appendChild(this.canvas);
    },
    setSomeLine: function (arrayOfData, arrayOfColor) {
        var maxVal,
            prevColor,


            maxVal = arrayOfData.map(function (item, index, array) {
                return Math.max.apply(null, item);
            });
        prevColor = this.lineColor;

        this.init();
        this.pointSpace = parseInt(this.xAxis / arrayOfData[0].length);
        this.pxDataRatio = this.yAxis / Math.max.apply(null, maxVal);
        for (i = 0; i < arrayOfData.length; i++) {
            this.data = arrayOfData[i];
            this.lineColor = arrayOfColor[i];
            this.drawLine();
        }

        document.querySelector("#" + this.wrapperId).appendChild(this.canvas);
        this.lineColor = prevColor;

    }
}