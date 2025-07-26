
 export class  Shape {


   getArea(): number {
        return  0;
    }

 }


const shape = new Shape();
console.log(shape.getArea());


class rectangle extends Shape {

    constructor(public width: number, public height: number) {
        super()

    }

    getArea(): number {
        return this.width * this.height
    }

}

const rectangle1 = new rectangle(10, 5);
console.log(rectangle1.getArea());


class Circle extends Shape {

    constructor(public radius: number) {
        super()

    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}


const Circle1 = new Circle(10);
console.log(Circle1.getArea());


class squre extends Shape {

    constructor(public length: number) {
        super()

    }

    getArea(): number {
        return 4 * this.length
    }
}


const Squre = new squre(10);
console.log(Squre.getArea());
