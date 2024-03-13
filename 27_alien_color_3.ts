//Alien color_3:turn your if_else chain from exercise 24 and 25 into an if_else chain.
let alienColor :string = 'green';

//if the alien color is green, print a message that the player earned 5 points.
//if the alien color is yellow, print a message that the player earned 10 points.
//if the alien color is red,   print a message that the player earned 15 points.
if(alienColor === 'green'){
    console.log('player just earned 5 points.');
}else if (alienColor === 'yellow'){
    console.log('player just earned 10 points.');
}else if(alienColor === 'red'){
    console.log('player just earn 15 points.')
}
//write three versions of this program,make sure each message is printed for the appropriate color alien.
 alienColor ='yellow';
if(alienColor === 'green'){
    console.log('player just earned 5 points.');
}else if (alienColor === 'yellow'){
    console.log('player just earned 10 points.');
}else if(alienColor === 'red'){
    console.log('player just earn 15 points.')
}

alienColor = 'red';
if(alienColor === 'green'){
    console.log('player just earned 5 points.');
}else if (alienColor === 'yellow'){
    console.log('player just earned 10 points.');
}else if(alienColor === 'red'){
    console.log('player just earn 15 points.')
}