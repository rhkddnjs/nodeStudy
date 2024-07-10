class Hello{
    constructor(){
        this.sayHello("created");
    }
    sayHello(message:string){
        console.log(message);
  }
}

const hello = new Hello();
hello.sayHello("ㅎㅇ")


class Rectangle {
    width: number;
    height: number;
    
    constructor(width:number, height:number){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10,5);
rectangle.getArea();