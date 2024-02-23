
let Guest_List :string[] = ['jon','rich','liza'];
for(let i=0; i<Guest_List.length; i++){
     console.log('Dear,' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest :string = 'jon' ;
let new_Guest :string = 'loura' ;
Guest_List[0] = new_Guest;
for(let i=0; i<Guest_List.length; i++){
     console.log('dear,' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`mr. ${absent_Guest} is not coming to the party.`);