import { Component } from '@angular/core';

@Component({
    selector: 'fibonacci-number',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})
export class AppComponent {
    title: string;
    fnumber: number;
    fresult: string | number;

    constructor() {
        this.title = 'Angular2 Fibonacci';
        this.fnumber = 10;
        this.fresult = this.Fibonacci(this.fnumber);
    }

    private Sum(firstParam: string | number, lastParam: string | number) {
        let first: any = firstParam.toString();
        let last: any = lastParam.toString();
        let firstLen = first.length;
        let lastLen = last.length;

        if (lastLen > firstLen) {
            let tmp = first;
            first = last;
            last = tmp;
            firstLen = first.length;
            lastLen = last.length;
        }

        first = first.split('');
        let tmp: any = [];
        for (let key in first) {
            tmp.push(first[key]);
        }
        first = tmp;
        first.reverse();


        last = last.split('');
        tmp = [];
        for (let key in last) {
            tmp.push(last[key]);
        }
        last = tmp;
        last.reverse();

        let str = '';
        let append: number = 0;
        for (let i = 0; i <= firstLen; i++) {
            if (append || i <= firstLen) {
                let a = first[i] | 0;
                let b = last[i] | 0;
                let c = append ? append : 0; c = c ? c : 0;
                let tmp: number = a + b + c;
                let tmp2: string = (tmp % 10).toString();
                str = tmp2 + str;
                append = Math.floor(tmp / 10);
            } else {
                str = first[i] !== 0 ? (first[i]).toString() + str : str;
            }
        }

        if (str.substring(0, 1) == '0') {
            str = str.substring(1, str.length);
        }

        return str;
    }

    public calculate() {
        this.fresult = this.Fibonacci(this.fnumber);
    }

    private Fibonacci(num: number|string) {
        let array: string[] = ['0', '1', '1'];
        let index: number = 2;
        let sum: string = '';
        if (num < 3 && num > -1) {
            return array[num];
        } else if (num < 0) {
            return 0;
        }

        do {
            sum = this.Sum(array[index], array[index - 1]);
            index++;
            sum = sum.toString();
            array.push(sum);
        } while (index < num);

        return sum;
    }

}