interface webttonCommon{ // 1공통으로 사용할 인터페이스
    title: string;
    createDate: Date;
    updateDate: Date;
}

interface Epiosde extends webttonCommon{ // 에피소드 인터페이스
    episodeNumber : number;
    seriesNumber: number;
}

interface Series extends webttonCommon{
    seriesNumber : number;
    author: string;
}
const epiosde : Epiosde={ //에피소드 객체
    title:"나 혼자만 레벨업",
    createDate: new Date(),
    updateDate: new Date(),
    episodeNumber:1,
    seriesNumber : 123,
};

const series : Series= { //시리즈 객체
    title:"나 혼자만 레벨업2",
    createDate: new Date(),
    updateDate: new Date(),
    seriesNumber : 123,
    author:"작가",
}
