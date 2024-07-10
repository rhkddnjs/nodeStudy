abstract class Logger {
    prepare(){
        console.log("===========================")
        console.log("로그를 남기기 위한 준비 ")
    }
    log(message:string){
        this.prepare();
        this.execute(message);
        this.complete();
    };
    abstract execute(message:string): void;

    complete(){
        console.log("작업완료")
        console.log("")
    }
}

class FileLogger extends Logger{
    filename:string;

    constructor(filename:string){
        super();
        this.filename=filename;
    }
    execute(message: string): void {
        console.log(`[${this.filename}]`, message);
    }
}
class ConsoleLogger extends Logger{
    execute(message: string): void {
        console.log(message)
    }
}

const fileLogger = new FileLogger("test.log");
fileLogger.log("파일에 로그남기ㅣㄱ 테스트")

const consoleLogger = new ConsoleLogger();
consoleLogger.log("로그남기기")