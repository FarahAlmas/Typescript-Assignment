//make a function

function large_shirt(size:string = "large" , text:string = "i love typescript"){
    console.log(`create a ${size} shirt with the message: ${text}`);
}
large_shirt();
large_shirt('medium');
large_shirt('small','the next big think!');