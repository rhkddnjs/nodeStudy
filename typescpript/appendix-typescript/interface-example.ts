type BookType ={ // BookType
    title:string;
    price:number;
    author:string;
}

interface Book{ //interface
    title:string;
    price:number;
    author:string;
}

let bookType: BookType = { //BookType 객체 할당
    title:"backend 개발자",
    price:1000,
    author:"김광원",
}
let book: Book ={ // interface 객체할당
    title:"backend 개발자",
    price:1000,
    author:"김광원",

}

interface Car{
    name: string;
    price: number;
    brand : string;
    options? : string[]; // 차량의 옵션은 선택적 속성
}

let avante: Car={
    name: "avante",
    price: 1500,
    brand : "현대",
    options:["에어컨","내비"]
}
let morning: Car={
    name:"모닝",
    price: 650,
    brand : "kia"
}

// 읽기전용 속성
interface Citizen{
    id:string;
    name : string;
    region: string;
    readonly age: number; // 나이는 변경할 수 없음
}
let seungkyoo: Citizen={
    id:"1234",
    name : "gw",
    region: "busan",
    age: 28,
}

seungkyoo.id="aa";