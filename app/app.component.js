"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2 Fibonacci';
        this.num = 10;
        this.result = 55;
        this.resultLength = 2;
        this.Calculate();
    }
    AppComponent.prototype.Sum = function (firstParam, lastParam) {
        var first = firstParam.toString();
        var last = lastParam.toString();
        var firstLen = first.length;
        var lastLen = last.length;
        if (lastLen > firstLen) {
            var tmp_1 = first;
            first = last;
            last = tmp_1;
            firstLen = first.length;
            lastLen = last.length;
        }
        first = first.split('');
        var tmp = [];
        for (var key in first) {
            tmp.push(first[key]);
        }
        first = tmp;
        first.reverse();
        last = last.split('');
        tmp = [];
        for (var key in last) {
            tmp.push(last[key]);
        }
        last = tmp;
        last.reverse();
        var str = '';
        var append = 0;
        for (var i = 0; i <= firstLen; i++) {
            if (append || i <= firstLen) {
                var a = first[i] | 0;
                var b = last[i] | 0;
                var c = append ? append : 0;
                c = c ? c : 0;
                var tmp_2 = a + b + c;
                var tmp2 = (tmp_2 % 10).toString();
                str = tmp2 + str;
                append = Math.floor(tmp_2 / 10);
            }
            else {
                str = first[i] !== 0 ? (first[i]).toString() + str : str;
            }
        }
        if (str.substring(0, 1) == '0') {
            str = str.substring(1, str.length);
        }
        return str;
    };
    AppComponent.prototype.ResultLength = function () {
        this.resultLength = this.result.toString().length;
    };
    AppComponent.prototype.Calculate = function () {
        this.result = this.Fibonacci(this.num);
        this.ResultLength();
    };
    AppComponent.prototype.Fibonacci = function (num) {
        var array = ['0', '1', '1'];
        var index = 2;
        var sum = '';
        if (num < 3 && num > -1) {
            return array[num];
        }
        else if (num < 0) {
            return 0;
        }
        do {
            sum = this.Sum(array[index], array[index - 1]);
            index++;
            sum = sum.toString();
            array.push(sum);
        } while (index < num);
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'fibonacci-number',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map