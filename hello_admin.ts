//make a array of five or more usernames, including the name admin.
const userNames: string[] = ['admin','akash','dorti','jiya','roni'];
for(let i=0; i<userNames.length;i++){
if(userNames[i] === 'admin'){
        console.log('Helllo admin, would you like to see a status report?');
    }

else{
    console.log(`Hello ${userNames[i]},thank you for login in again.`)

}
}