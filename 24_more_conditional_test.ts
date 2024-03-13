//more conditional test.
//tests for equality and inequaliy with string.
console.log('Equality test with string:' ,'rayyan' === 'rayyan');//true
console.log('InEquality test with string:' ,('rayyan' as string) === 'ayan');//false
//tests using the lower case function.
console.log('Test with lower case:' ,'PAKISTAN'.toLowerCase() === 'pakistan');//true
console.log('Test with lower case:' ,'PAKISTAN'.toLowerCase() != 'pakistan');//false
//numerical tests involving equality.
console.log('Numerical equality test:' ,38+18===38+18);//true
console.log('Numerical inequality test:' ,(1000 as number) != 2000);//true but,
console.log('Numerical inequality test:' ,(1000 as number) === 2000);//false
//greaterthen/lessthen tests.
console.log('greaterthen test:' ,99 > 88);//true
console.log('lessthen test:' ,20 < 10);//false
//greaterthen equal and lessthen equal tests
console.log('greaterthen equal test:' ,15 >= 15);//true
console.log('lessthen equal test:',76 >= 86);//false
//test useing "and" and "or operaters"
console.log('and operater test:' ,3 <= 4 && 6 <= 9 );//true
console.log('or operater test:' ,5 > 2 || 44 < 11);//true
//whether an item is in a array and not in the array.
let newArrayColor:string[]=['blue','pink','orange','green'];
console.log('test pink is in the array:',newArrayColor.includes('pink'));//true
console.log("test red isn't in the array:" ,newArrayColor.includes('red'));//false