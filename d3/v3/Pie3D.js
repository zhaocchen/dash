/**
 * 计算椭圆点到圆心的距离
 * @param angle
 * @param rx
 * @param ry
 * @returns {number}
 */
function getOffsetX(angle, rx, ry) {
    var k = Math.tan(angle);
    var rxP = rx * rx;
    var ryP = ry * ry;
    return Math.sqrt((rxP * ryP) / (rxP * k * k + ryP) * (1 + k * k));
}


/**
 * 获取开始角度和结束角度的椭圆点x\y值
 * @param startAngle
 * @param endAngle
 * @param rx
 * @param ry
 * @returns {{sx: number, sy: number, ex: number, ey: number}}
 */
function getXY(startAngle, endAngle, rx, ry) {
    endAngle = endAngle > 2 * Math.PI ? 2 * Math.PI : endAngle;

    var lineS = getOffsetX(startAngle, rx, ry);
    var lineE = getOffsetX(endAngle, rx, ry);
    return {
        sx: lineS * Math.cos(startAngle),
        sy: lineS * Math.sin(startAngle),
        ex: lineE * Math.cos(endAngle),
        ey: lineE * Math.sin(endAngle)
    }
}

function pieInner(d, rx, ry, h, ir) {
    var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);

    var sx = ir * rx * Math.cos(startAngle),
        sy = ir * ry * Math.sin(startAngle),
        ex = ir * rx * Math.cos(endAngle),
        ey = ir * ry * Math.sin(endAngle);

    var ret = [];
    ret.push("M", sx, sy, "A", ir * rx, ir * ry, "0 0 1", ex, ey, "L", ex, h + ey, "A", ir * rx, ir * ry, "0 0 0", sx, h + sy, "z");
    return ret.join(" ");
}

function pieBottom(d, rx, ry, ir, h) {
    if (d.endAngle - d.startAngle == 0) return "M 0 0";
    var se = getXY(d.startAngle, d.endAngle, rx, ry);

//        A RX,RY,XROTATION,FLAG1,FLAG2,X,Y
//
//        RX,RY指所在椭圆的半轴大小
//        XROTATION指椭圆的X轴与水平方向顺时针方向夹角，可以想像成一个水平的椭圆绕中心点顺时针旋转XROTATION的角度。
//        FLAG1只有两个值，1表示大角度弧线，0为小角度弧线。
//        FLAG2只有两个值，确定从起点至终点的方向，1为顺时针，0为逆时针
//        X,Y为终点坐标

    var ret = [];
    ret.push("M", se.sx, h + se.sy, "A", rx, ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "1", se.ex, h + se.ey, "L", ir * se.ex, ir * se.ey + h);
    ret.push("A", ir * rx, ir * ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "0", ir * se.sx, ir * se.sy + h, "z");
    return ret.join(" ");
}

function pieSide(d, rx, ry, h) {
    if (d.endAngle - d.startAngle == 0) return "M 0 0";
    var se = getXY(d.startAngle, d.endAngle, rx, ry);
    var ret = [];
    ret.push("M", se.ex, se.ey + h, "L 0 ", h, "L 0 0", " L", se.ex, se.ey, " z");
    ret.push("M", se.sx, se.sy + h, "L 0 ", h, "L 0 0 ", " L", se.sx, se.sy, " z");
    return ret.join(" ");
}


function pieOuter(d, rx, ry, h) {
    var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
    var se = getXY(startAngle, endAngle, rx, ry);
    var ret = [];
    ret.push("M", se.sx, h + se.sy, "A", rx, ry, "0 0 1", se.ex, h + se.ey, "L", se.ex, se.ey, "A", rx, ry, "0 0 0", se.sx, se.sy, "z");
    return ret.join(" ");
}

function pieTop(d, rx, ry, ir) {
    if (d.endAngle - d.startAngle == 0) return "M 0 0";
    var se = getXY(d.startAngle, d.endAngle, rx, ry);
    var ret = [];
    ret.push("M", se.sx, se.sy, "A", rx, ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "1", se.ex, se.ey, "L", ir * se.ex, ir * se.ey);
    ret.push("A", ir * rx, ir * ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "0", ir * se.sx, ir * se.sy, "z");
    return ret.join(" ");
}

function lineX(d, rx, ry, rotate) {
    var angle = 0.5 * (d.startAngle + d.endAngle) + rotate / 180 * Math.PI;   // 减去偏移
    return getOffsetX(angle, rx, ry) * Math.cos(angle);
}

function lineY(d, rx, ry, rotate) {
    var angle = 0.5 * (d.startAngle + d.endAngle) + rotate / 180 * Math.PI;
    return getOffsetX(angle, rx, ry) * Math.sin(angle);
}

function getPercent(d) {
    // return (d.endAngle-d.startAngle > 0.2 ? Math.round(1000*(d.endAngle-d.startAngle)/(Math.PI*2))/10 : '');
    return Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10;
}

function labelsTextTran(d, rx, ry, rotate, pieX, multi) {
    var x = lineX(d, rx, ry, rotate);
    var y = lineY(d, rx, ry, rotate);
    var bbox = {};
    bbox.width = 30;
    var tmpX = pieX - multi * Math.abs(x) - bbox.width;
    var tmp = tmpX < 0 ? 0 : (tmpX < extendLen ? tmpX : extendLen);
    var mulY = multi * y > ry ? multi * y + h : multi * y;
    return [x < 0 ? (multi * x - tmp) : (multi * x + tmp), mulY];
    // return {
    //     x : 100,
    //     y : 100
    // };
}

function piePolyline(d, rx, ry, rotate, pieX, multi, extendLen) {
    var x = lineX(d, rx, ry, rotate);
    var y = lineY(d, rx, ry, rotate);
    // var bbox = text[0][0].getBBox();
    var bbox = {};
    bbox.width = 30;
    var tmpX = pieX - multi * Math.abs(x) - bbox.width;
    var tmp = tmpX < 0 ? 0 : (tmpX < extendLen ? tmpX : extendLen);
    var mulY = multi * y > ry ? multi * y + h : multi * y;
    return [[0.6 * x, 0.6 * y], [multi * x, mulY], [x < 0 ? (multi * x - tmp) : (multi * x + tmp), mulY]];
}