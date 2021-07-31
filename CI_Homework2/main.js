function reverseNumberShort(number){
    for(let i = 0; i < 9 ;i++){
        if( Math.abs(number) == i  ) { return number}
    } // nếu number là từ 1 - 9 thì return 
    if(number == 0 ) { return 0} // return lại số 0 nếu nhập number là 0 hoặc -0 return = 0
    let resultArr =[]
    while(number >= 1 || number <= - 1) {
        resultArr.push(Math.abs(parseInt(number)%10))
        number =  number/10
    } // lấy phần dư number, sau mỗi lần lặp chia number cho 10 và push số lấy dư đưa vào mảng
    if(number >= 0 ) {return parseInt(resultArr.join(''))} else {return parseInt(-1*resultArr.join('')) } // join mảng
}
// console.log(reverseNumberShort(1211))



function romanToInt(str) {
    let result = 0 // tạo result
    let checking = 0 // checking để kiểm tra số phần tử lặp lại trong str
    let obj = {
        I : 1, V : 5, X : 10, L : 50, C : 100,  D : 500, M : 1000
        }
     for(let  i = 0 ; i < str.length -1 ; i++) {
         if(str[i] == str[i+1] && checking == 2) {
            checking = 3
            break;
         } else if (str[i] == str[i+1] && checking < 2){
             checking +=1
         } else if (str[i] != str[i+1] ) {
             checking = 0
         }
     }
    if(checking > 2) return result = "Error Roman - To many same letter" // nếu số lượng chữ trong Roman lặp lại quá 3 lần, thì nhập sai, checking chỉ tới 2 do nếu bằng 3 nghĩa là đã có 4 kí tự xuất hiện 
    for(let  i = str.length-1 ; i >= 0 ; i--){
        let rightLetter = obj[str[i]] // kí tự đang lặp hiện tại
        let leftLetter = obj[str[i-1]] // kí tự phía bên trái kí tự hiện tại 
        let left2Letter = obj[str[i-2]] // kí tự bên trái số 2 so với kí tự hiện tại 
        if(rightLetter > leftLetter) { // nếu kí tự bên phải có giá trị lớn hơn kí tự bên trái
            if((rightLetter - leftLetter) >= left2Letter ) { return result =  "Error Roman - Wrong Input"} else { //nếu kí tự bên phải trừ bên trái mà lớn hơn kí tự thứ 2 bên trái thì return error
            result += rightLetter - leftLetter
            i--
            }    //nếu đủ điều kiện còn lại thì result được phép lấy giá trị phải trừ giá trị trái để ra số đặc biệt và giảm thêm i 1 đơn vị
        }
        else {result += rightLetter}       // nếu không có các điều kiện trên thì được phép cộng giá trị của phần tử bên phải 
    } 
    return result
}
// console.log(romanToInt("MCMXCVII"))
