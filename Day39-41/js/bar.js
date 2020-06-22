const SVGNS = "http://www.w3.org/2000/svg";

// function drawHistogram(data) {
//     const drawHeight = 400;
//     const drawWidth = 800;
//     const xAxis = drawWidth - 20;
//     const yAxis = drawHeight - 20;
//     const barWidth = parseInt(xAxis / data.length * 0.8);
//     const barSpace = parseInt(xAxis / data.length * 0.2);
//     const barColor = "#37A2DA"
//     const axisColor = "#000";
//     const strokeWidth = 2;
//     const max = Math.max(...data);
//     let pxDataRatio = yAxis / max;
//     let histogram = document.createElementNS(SVGNS, "svg");
//     histogram.setAttribute("version", "1.1");
//     histogram.setAttribute("baseProfile", "full");
//     histogram.setAttribute("width", drawWidth);
//     histogram.setAttribute("height", drawHeight);
//     histogram.setAttribute("xmlns", SVGNS);
//     let line = document.createElementNS(SVGNS, "line");
//     line.setAttribute("x1", 10);
//     line.setAttribute("y1", drawHeight - 10);
//     line.setAttribute("x2", 10 + xAxis);
//     line.setAttribute("y2", drawHeight - 10);
//     line.setAttribute("stroke", axisColor);
//     line.setAttribute("stroke-width", strokeWidth);
//     histogram.appendChild(line);
//     line = document.createElementNS(SVGNS, "line");
//     line.setAttribute("x1", 10);
//     line.setAttribute("x1", 10);
//     line.setAttribute("x2", 10);
//     line.setAttribute("y1", drawHeight - 10);
//     line.setAttribute("y2", 10);
//     line.setAttribute("stroke", axisColor);
//     line.setAttribute("fill", "transparent");
//     line.setAttribute("stroke-width", strokeWidth);
//     histogram.appendChild(line);
//     let xpos = 10 + barSpace / 2;
//     for (let i = 0; i < data.length; i++) {
//         let ypos = 10 + yAxis - data[i] * pxDataRatio;
//         let rect = document.createElementNS(SVGNS, "rect");
//         rect.setAttribute('width', barWidth);
//         rect.setAttribute('height', data[i] * pxDataRatio);
//         rect.setAttribute('x', xpos);
//         rect.setAttribute('y', ypos);
//         xpos = xpos + barWidth + barSpace;
//         rect.setAttribute("stroke", barColor);
//         rect.setAttribute("fill", barColor);
//         rect.setAttribute("stroke-width", strokeWidth);
//         histogram.appendChild(rect);
//         console.log(xpos)
//     }

//     return histogram;



// }

drawHistogram = {
        wrapperId: "",
        drawHeight: 400,
        drawWidth: 800,
        xAxis: 0,
        yAxis: 0,
        barWidth: 0,
        barSpace: 0,
        barColor: "#37A2DA",
        axisColor: "#000",
        strokeWidth: 2,
        pxDataRatio: 0,
        histogram: null,
        data: [],
        init: function () {
            this.xAxis = this.drawWidth - 20;
            this.yAxis = this.drawHeight - 20;
            this.histogram = document.createElementNS(SVGNS, "svg");
            this.histogram.setAttribute("version", "1.1");
            this.histogram.setAttribute("baseProfile", "full");
            this.histogram.setAttribute("width", this.drawWidth);
            this.histogram.setAttribute("height", this.drawHeight);
            this.histogram.setAttribute("xmlns", SVGNS);
            let line = document.createElementNS(SVGNS, "line");
            line.setAttribute("x1", 10);
            line.setAttribute("y1", this.drawHeight - 10);
            line.setAttribute("x2", 10 + this.xAxis);
            line.setAttribute("y2", this.drawHeight - 10);
            line.setAttribute("stroke", this.axisColor);
            line.setAttribute("stroke-width", this.strokeWidth);
            this.histogram.appendChild(line);
            line = document.createElementNS(SVGNS, "line");
            line.setAttribute("x1", 10);
            line.setAttribute("x1", 10);
            line.setAttribute("x2", 10);
            line.setAttribute("y1", this.drawHeight - 10);
            line.setAttribute("y2", 10);
            line.setAttribute("stroke", this.axisColor);
            line.setAttribute("fill", "transparent");
            line.setAttribute("stroke-width", this.strokeWidth);
            this.histogram.appendChild(line);
        },
        drawSingle: function () {
            this.barWidth = parseInt(this.xAxis / this.data.length * 0.8);
            this.barSpace = parseInt(this.xAxis / this.data.length * 0.2);
            let max = Math.max(...this.data);
            let flag = this.data.every(function (item) {
                    return !isNaN(item);
                }) 
                    if (flag) {
                        this.pxDataRatio = this.yAxis / max;
                        let xpos = 10 + this.barSpace / 2;
                        for (let i = 0; i < this.data.length; i++) {
                            let ypos = 10 + this.yAxis - this.data[i] * this.pxDataRatio;
                            let rect = document.createElementNS(SVGNS, "rect");
                            rect.setAttribute('width', this.barWidth);
                            rect.setAttribute('height', this.data[i] * this.pxDataRatio);
                            rect.setAttribute('x', xpos);
                            rect.setAttribute('y', ypos);
                            xpos = xpos + this.barWidth + this.barSpace;
                            rect.setAttribute("stroke", this.barColor);
                            rect.setAttribute("fill", this.barColor);
                            rect.setAttribute("stroke-width", this.strokeWidth);
                            this.histogram.appendChild(rect);
                        }
                    }
                },
                setSingle: function (data) {
                    this.data = data;
                    this.init();
                    this.drawSingle();
                    document.querySelector(this.wrapperId).appendChild(this.histogram);
                }

        }