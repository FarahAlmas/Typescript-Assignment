
let magician : string[] =['David copperfield','Harry Houdini','Teller','David blaine'];


function copyArray(arr:string[]){
    return[...arr]
}

function make_great (magicianArray:string[] ){
    for (let i = 0; i < magicianArray.length; i++) {
      magicianArray[i] = `The Great ` + magicianArray[i];
        
    }

}



function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
    });

}
const copyMagicianArray = copyArray(magician);

make_great(copyMagicianArray);

console.log(`\n\nthis is original array`);
show_magicians(magician);

console.log(`\n\nthis is modified copy array`);
show_magicians(copyMagicianArray);


