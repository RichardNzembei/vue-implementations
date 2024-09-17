function myFunction(a,b){
    return a*b
}
let result=myFunction(3,7)
console.log(result)
function toCelsius(f){
    return (5/9)*(f-32)
}
let value=toCelsius(77)
console.log(value)
function updateBrand(obj){
    obj.brand='toyota'
    obj=null
}
const car={
    brand:'honda'

}
console.log(car.brand)
updateBrand(car)
console.log(car.brand)
const objects=['richie','robin','reuben','saint']
console.log(objects.map((object)=>object.length))