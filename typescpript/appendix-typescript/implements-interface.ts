interface Icliker{
    count : number;
    click():number;
}
class Clicker implements Icliker{
    count:number = 0;

    click(): number {
        this.count +=1
        console.log(`Click! [count] : ${this.count}`);
        return this.count;
    }
}
const clicker = new Clicker();
clicker.click();
clicker.click();
clicker.click();