var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sum = function (a, b, c) {
    var sum = 0;
    if (c) {
        sum = a + b + c;
    }
    else {
        sum = a + b;
    }
    return sum;
};
console.log(sum(5, 7));
console.log(sum(5, 5, 5));
var user = { name: 'Denya', age: 18, date: '10.10.2006' };
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.a * this.b) * 2;
    };
    Rectangle.prototype.area = function () {
        return this.a + this.b;
    };
    return Rectangle;
}(Shape));
var Trikutnik = /** @class */ (function (_super) {
    __extends(Trikutnik, _super);
    function Trikutnik(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Trikutnik.prototype.perimeter = function () {
        return (this.a * this.b) * 4;
    };
    Trikutnik.prototype.area = function () {
        return this.a + this.b * 5;
    };
    return Trikutnik;
}(Shape));
var shapes = [
    new Rectangle(2, 3),
    new Rectangle(5, 6),
    new Trikutnik(5, 4, 6)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
