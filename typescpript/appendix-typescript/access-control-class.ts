class Parent{
    openInfo = "공개정보";
    protected lagacy = "유산";
    private parentSecret="부모의 비밀 정보";

    //private 정보에 접근가능
    checkMySecret(){
        console.log(this.parentSecret);
    }
}
// 자녀 클래스, 부모 상속

class Child extends Parent{
    private secret = "자녀의 비밀정보"

    //1.자녀는 부모의 protected 확인가능
    checkLagacy(){
        console.log(this.lagacy);
    }
    // 부모의 private 변수에는 접근 불가능
    // checkParentSecret(){
    //     console.log(super.parentSecrect)
    // }
}
class SomeOne{
    checkPublicInfo(){
        const p = new Parent();
        console.log(p.openInfo);
        // console.log(p.lagacy); 접근 불가능
        // console.log(p.parentSecret); 접근 불가능
        
    }
}