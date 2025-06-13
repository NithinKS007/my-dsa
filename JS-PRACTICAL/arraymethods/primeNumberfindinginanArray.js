const isPrime = (num) =>{
    if(num<=1) return false
    if(num%2===0) return false
    if(num===2)return true

    let sqrtnum = Math.sqrt(num);
    for(let i = 3;i<=sqrtnum;i+=2){
        if(num%i===0)return false
    }
   return true
}

const check_with_filter = (array) =>{
    return array.filter((num)=>isPrime(num))

}

const array = [1,2,3,4,5,6,7,8,9,10]
const result = check_with_filter(array)
console.log(result)