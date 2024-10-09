const add = (numbers)=>{
    if(numbers === "") return 0;

    if (!numbers.includes(",")) return parseInt(numbers);

    const nums = numbers.split(',')

    return nums.reduce((sum,num)=> sum + parseInt(num),0)

    
}

module.exports = {add}