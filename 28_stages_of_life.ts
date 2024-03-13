//set a value for the veriable age.
let age :number = 30;
//if the person is less then 2 years old,print a message that the person is a baby.
if(age < 2){
    console.log("person is a baby.");
}
else if(age >= 2 && age < 4){
    console.log('person is a toddler.');
}
else if(age >= 4 && age < 13){
    console.log('person is a kid.');
}
else if(age >= 13 && age < 20){
    console.log('person is teenager.');
}
else if(age >= 20 && age < 65){
    console.log('person is an adult.');
}
else{
    console.log('person is an alder.')
}