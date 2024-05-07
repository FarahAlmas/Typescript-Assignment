
function storeCarInfo(manufacturer:string, modelName:string, ...extraOption:
    {[key : string]: any } []): Object {
    const carInfo ={
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
        
    }
    return carInfo;
};
const car = storeCarInfo("Toyota", "Corolla", {color: "red"},{features:['Navigation','power Window']});
console.log(car);