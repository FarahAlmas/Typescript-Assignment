


let current_users: String[] = ['saNa','saRa','miNa','rina','vina'];
let new_users: String[] = ['asad','saNa','miNa','fahad','dua'];
new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available, please enter a new username`);
    }
    else{
        console.log(`The username ${newUsername} is available`);
    }
    });
    
