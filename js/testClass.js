class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
 
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var a = new Point(2,4)

function Point1(x, y) {
  this.x = x;
  this.y = y;}
 
Point1.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';};

var b = new Point1(1,2)

function Point2(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
}

var c = new Point2(5, 6);

function Point3(x, y) {
  this.x = x;
  this.y = y;
  this.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
}

var d = new Point3(6, 7)