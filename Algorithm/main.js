const adjacentElementsProduct = (nums) => {
  resultArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    resultArr.push(nums[i] * nums[i + 1]);
  }
  return resultArr.reduce((first, next) => {
    if (first > next) {
      return first;
    } else {
      return next;
    }
  }, resultArr[0]);
};
// console.log(adjacentElementsProduct([9, 6, 4, 21, 56]));


const alternatingSums = a => {
    let set = {
        firstLine : [],
        secondLine : []
    }
    for(let i = 0 ; i < a.length ; i += 2){
        set.firstLine.push(a[i])
        if(a[i+1] !== undefined){set.secondLine.push(a[i+1])}
    }
    let firstLineWeight = set.firstLine.reduce((first,next)=>{
        return first + next
    },0)

    let secondLineWeight = set.secondLine.reduce((first,next)=>{
        return first + next
    },0)
    
    return [firstLineWeight,secondLineWeight]
}

// console.log(alternatingSums([60, 40, 57, 100, 10]))