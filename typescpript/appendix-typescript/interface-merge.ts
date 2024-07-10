interface Clock{
    time : Date;
}
interface Clock{
    brand : string;
}

interface Clock{
    price:number;
}

// const wrongClock: Clock={   brand, price가 없어서 에러
//     time : new Date();
// }

const clock: Clock={
    time : new Date(),
    brand: "롤렉스,",
    price: 10000,
}