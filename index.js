const { add } = require('./addFunction')
const readline = require('readline')

const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


read.question('Enter string of numbers',(input)=>{
    try{
        const result = add(input)
        console.log(`Output: ${result}`)
    }catch(error){
        console.log(`Error: ${error.message}`)
    }

    read.close();
})