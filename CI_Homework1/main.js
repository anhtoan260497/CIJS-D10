const homeWork1 = arr  => {
    let result =[]
    arr.map(el =>{
        return result.push(`<div><h1>${el.name}</h1><h2>${el.age}</h2></div>`)
    })
    return result
} 

// console.log(homeWork1([
// 	{name: "Angelina Jolie",  age: 8},
// 	{name: "Eric Jones",  age: 2},
// 	{name: "Paris Hilton",  age: 5},
// 	{name: "Kayne West", age: 16},
// 	{ name: "Bob Ziroll", age: 100}
// ]
// ))


const homeWork2 = arr => {
    result = arr.filter(el => {
        return el.gender != "female"
    })
    return result
}

// console.log(homeWork2([
// 	{ name: 'Lan', gender: 'female' },
// 	{ name: 'Linh', gender: 'female' },
// 	{ name: 'Trung', gender: 'male' },
// 	{ name: 'Peter', gender: 'gay' }
// ]))


const homeWork3 =  arr => {
    let result = []
    let obj = {}
    arr.map(el => {
        let key  = el.split('').sort() 
        obj[key.join('')] = []
    })

    for (let keys in obj) {
        for(i = 0; i < arr.length ; i++){
            let currentArrI = arr[i].split('').sort()
            if(currentArrI.join('') == keys){ 
                obj[keys] = [...obj[keys],arr[i]]
                } 
            }
        }
    return result = Object.values(obj)
}

// console.log(homeWork3(["eat","tea","tan","ate","nat","bat"]))
// console.log(homeWork3([""]))
// console.log(homeWork3(["a"]))





const homeWork4 = nums => {
    let obj = {}
    let result = ""
    for(let  i = 0 ; i < nums.length ; i++ ){
      obj[nums[i]] = 0
    } // tạo key cho obj

    for (let keys in obj) {
        for(let i = 0 ; i < nums.length ; i++) {
            if(nums[i] == keys) { obj[keys] += 1}
        }
    } // thêm value cho object +1 nếu value đang lặp ủa array = key

   for(let value in obj) {
       if(obj[value] == 1) {
           result = value
       }
   }
   return result
}

// console.log(homeWork4([2,2,1]))
// console.log(homeWork4([4,1,2,1,2]))
// console.log(homeWork4([1]))

const bit = arr =>{
 let binaryMap =  arr.map (el =>{
    return el.toString(2)
})
 let lengthMap = binaryMap.map(el => {
     return el.length
 })
 return lengthMap.sort()
}

console.log(bit([0,1,2,3,4,5,6,7,8]))