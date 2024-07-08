const axios = require("axios");


async function getTop20Movies(){
    const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
    try{
        const result = await axios.get(url);
        const {data} = result;

        if(!data.articleList || data.articleList.size == 0){
            throw new Error("데이터가 없습니다.");
        }
        const movieInfo = data.articleList.map((article, idx)=>{
            return {title: article.title, rank: idx+=1};
        });

        for(let movieInfos of movieInfo){
            console.log(`[${movieInfos.rank}위's] ${movieInfos.title}`)
        }
    }
    catch(err){
        throw new Error(err);
    }
}

getTop20Movies();