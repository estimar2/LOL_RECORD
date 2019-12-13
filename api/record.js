// API : RGAPI-58e87385-93ea-481c-8e4a-233d04627c32
// https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/korealol/?api_key=RGAPI-58e87385-93ea-481c-8e4a-233d04627c32
import axios from "axios";

// getLOLData =() =>{
//     let summonerUrl, matchUrl, leagueUrl;

//     summonerUrl =`${apiDefault.url}/summoner/v4/summoners/by-name/${apiDefault.name}?api_key=${apiDefault.key}`;
//     axios.get(summonerUrl).then(summonerData => {
//         matchUrl = `${apiDefault.url}/match/v4/matches/${summonerData.data.accountId}?api_key=${apiDefault.key}`;
//         axios.get(matchUrl)
//         .then(matchData => {
//             leagueUrl = `${apiDefault.url}/league/v4/entries/by-summoner/xWR5hML28HOT4LRDWHUY682hW-pDV2sNdEUB_0bnaDR0vw?api_key=${apidefault.key}`
//         })

var UserId = "Korealol";

const api = axios.create({

    baseURL: "https://kr.api.riotgames.com/lol/",
    getAccountParams: "summoner/v4/summoners/by-name/",
    api_key: "api_key=RGAPI-58e87385-93ea-481c-8e4a-233d04627c32"

})

getLOLData = () => {
  let accountId;
  accountId = 
};

