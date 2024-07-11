// object destructuring

const band = {
    name: "led zeeplin",
    famousSong: "stairway to heaven",
    year: 1968
};
const bandName= band.name;
const famousSong= band.famousSong;
// console.log(band.name, band.famousSong);
// console.log(bandName, famousSong);



// shourtcut

const {name :var1, famousSong: var2, ...restProps}=band;
console.log(var1,var2);
console.log(restProps);

