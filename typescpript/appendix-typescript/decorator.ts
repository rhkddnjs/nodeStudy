// function HelloDecorator(constructor:Function){
//     console.log("Hello")
// };

//클래스 데코레이터
type Constructor = new (...args: any[])=>{}; //생성자 메서드 타입
function HelloDecorator(constructor:Constructor){
    return class extends constructor{
        constructor(){
            console.log(`HELLO`);
            super();
        }
    }
}

@HelloDecorator
class DecoratorTest{
    constructor(){
        console.log(`인스턴스 생성됨`);
    }
}

const decoTest = new DecoratorTest();

//메서드 데코레이터
console.time("실행시간")
execute();
function execute(){
    setTimeout(()=>{
        console.log(`실행`);
        console.timeEnd("실행시간");
    },500)
}

function Timer(){
    return function(target:any, key:string, descriptor : PropertyDescriptor){

        const originalMethod = descriptor.value;
        descriptor.value=function(...args: any[]){
            console.time(`Elapsed time`);
            const result = originalMethod.apply(this, args);
            console.timeEnd(`Elapsed time`);
            return result;
        }
    }
}

class ElapsedTime{
    @Timer()
    hello(){
        console.log(`Hello`)
    }
}

const elapsedTime = new ElapsedTime();
elapsedTime.hello();