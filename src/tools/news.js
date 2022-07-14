
//Using API keys to get data
const request = require('request')
const news = (callback => {
    //news url
    const url ="https://newsapi.org/v2/everything?q=Apple&from=2022-07-07&sortBy=popularity&apiKey=26a60c82ddf94e04937793fcdc684ecf"
    request({url,json:true, headers: {"User-Agent": "MY IPHINE 7s",}},(error,response)=>{
        //handling error in url path
        if(error){
            callback('Error, Can not find this page',undefined)
        }
        //error in API key
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        //there is no errors => getting data
        else{
            const data = response.body
            callback(undefined,data)
        }
    })
})
//export module
module.exports = news