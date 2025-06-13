function fetchData(){
    return new Promise((resolve, reject) => {
        let data = 2
        if(data ===2){
            resolve(`data = ${data}`)
        }else{
            reject('data not found')
        }
    })
}

fetchData().then((data)=>{
    console.log(`data found and received ,${data}`);
}).catch((error)=>{
    console.log(`error occured ${error}`);
})