function genericEcho<T> (message:T):T{
    console.log(message);
    return message;
}
type phone={
    name:string,
    price:number,
    brand: string,
}
const phone={name:"iPhone", price: 1000, brand:"Apple"}

genericEcho(1)
genericEcho<string>("안녕")
genericEcho<any>(phone);
// genericEcho<string>(phone);
