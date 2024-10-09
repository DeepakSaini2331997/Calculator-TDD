const add = (numbers)=>{
    if(numbers === "") return 0;

    if (!numbers.includes(",")) return parseInt(numbers);

    // `\\n` with an actual newline character
    numbers = numbers.replace(/\\n/g, '\n'); 
    const nums = numbers.split(/[\n,]/)   // remove next line and comma
    //console.log(nums," my nuuuuuuuuu+++++"); return false;
    return nums.reduce((sum,num)=> sum + parseInt(num),0)

    
}

module.exports = {add}