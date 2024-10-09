const add = (numbers)=>{
    if(numbers === "") return 0;

    //if (!numbers.includes(",")) return parseInt(numbers);

    // `\\n` with an actual newline character
    numbers = numbers.replace(/\\n/g, '\n'); 

    let delimiter = /[\n,]/; // delimiters comma and newline
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
      numbers = parts[1];
    }
  
    // Split numbers and trim any whitespace
    const nums = numbers.split(delimiter).map(num => parseInt(num.trim()));
    //console.log(nums,'my nums+++++++++'); return false;
    return nums.reduce((sum,num)=> sum + num,0)

    
}

module.exports = {add}