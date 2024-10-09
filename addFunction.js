const add = (numbers)=>{
    if(numbers === "") return 0;

    if (!numbers.includes(",")) return parseInt(numbers);

    const nums = numbers.split(',')
    //console.log(nums," my nummmmm"); return false;
    return nums.reduce((sum,num)=> sum + parseInt(num),0)

    
}

module.exports = {add}