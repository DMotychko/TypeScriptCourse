const sum = (a: number, b: number, c?: number): number => {
    let sum: number = 0;
    if(c) {
        sum = a + b + c
    } else {
        sum = a + b
    }
    return  sum
}

console.log(sum(5, 7));
console.log(sum(5, 5, 5));

interface IUser<T> {
    name: string,
    age: number,
    date: T
}

const user: IUser<string> = {name: 'Denya', age: 18, date: '10.10.2006'}

abstract class Shape {
    abstract perimeter(): number
    abstract area(): number
}

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
    }
    perimeter(): number {
        return (this.a * this.b)*2
    }

    area(): number {
        return this.a + this.b;
    }
}

class Trikutnik extends Shape {
    constructor(private a: number, private b: number, private c: number) {
        super();
    }

    perimeter(): number {
        return (this.a * this.b)*4
    }

    area(): number {
        return this.a + this.b * 5;
    }
}

const shapes: Shape[] = [
    new Rectangle(2,3),
    new Rectangle(5,6),
    new Trikutnik(5, 4, 6)
]

for (const shape of shapes) {
    console.log(shape.area())
    console.log(shape.perimeter())
}
