function makeSandwich( item:string[]){
    console.log(`\nMaking a sandwich with :`);
    item.forEach(element => console.log('- '+ element));
    console.log(`Enjoy you sandwich !\n`);
    };
    makeSandwich(['ham','cheese','tomato']);
    makeSandwich(['lettuce', 'chicken']);
    makeSandwich(['bacon', 'egg']);