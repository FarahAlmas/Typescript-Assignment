let Guest_List :string[] = ['jon','rich','liza'];
//for(let i=0; i<Guest_List.length; i++){
    // console.log('Dear,' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
let absent_Guest :string = 'jon' ;
let new_Guest :string = 'loura' ;
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
     //console.log('dear,' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
console.log(`mr. ${absent_Guest} is not coming to the party.`);
console.log('Good news!we find big Table so we are inviting 3 more guests.')
//3 guest add in arry
Guest_List.unshift('willi');
Guest_List.splice(2,0,'moon');
Guest_List.push('nora');
//i have print 6guest array 
for(let i=0; i<Guest_List.length; i++){
     console.log('dear,' +Guest_List[i] +';\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
//sorry message to guest for not inviting
console.log('\nSorry we can not arrange big table,only two people will be invited.');
//i have removed guest here
while(Guest_List.length > 2){
  let remove_Guest = Guest_List.pop();
  console.log(`sorry dear. ${remove_Guest}, you are not invited for dinner.`);
}
//we have just two guest left//
for(let i=0; i<Guest_List.length; i++){
     console.log('dear,' +Guest_List[i] +';\n\nyou are still invited.\n\nThank You!\n\n')
}
//i have removed all guest in array//
Guest_List.splice(0,2);
console.log(Guest_List);