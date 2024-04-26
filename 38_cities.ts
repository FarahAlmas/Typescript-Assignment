//make a function

function describe_city(city:string,  country:string ="Default country."){
    console.log(`${city} is in ${country}`);
}
describe_city('pasir');
describe_city('karachi','pakistan');
describe_city('tokyo','japan');