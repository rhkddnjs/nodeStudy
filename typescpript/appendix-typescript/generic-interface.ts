interface ILabel<Type>{
    label:Type;
}
const stringLabel: ILabel<string>={
    label:"Hello"
}
const numberLabel:ILabel<number>={
    label:100
}
const booleanLabel:ILabel<boolean>={
    label:false
}



interface ICheckLength{
    length: number;
}
function echoWithLength<T extends ICheckLength>(message: T){
    console.log(message);
}
echoWithLength("Hello");
echoWithLength([1,2,3]);
echoWithLength({length:10});