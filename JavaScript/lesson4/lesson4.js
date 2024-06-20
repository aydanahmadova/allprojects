const user = {
    imya: "Aysel",
    familiya: "Mammadzada",
    age: "12",
    sposobnosti:["html","css","js/90"],   //skills
    fullName: function(){
        return this.imya+" "+this.familiya
    },
    address:{
        strana:"Azerbaijan",
        qorod:"Baku",
        ulica:"Xojali",
    },
    rodstvenniki:[
        {
            position:"sestra",
            name:"Aydan",
        },
        {
            position:"mama",
            name:"Sevil"
        }
    ]
}

console.log(user);

//Tochechniy sposob (Dotte notation)

console.log(user.imya);
console.log(user.familiya);
console.log(user.sposobnosti);
console.log(user.sposobnosti[1]);
console.log(user.fullName());
console.log(user.address);
console.log(user.address.strana);
console.log(user.rodstvenniki);
console.log(user.rodstvenniki[1]);
console.log(user.rodstvenniki[1].name);

//Skobochniy notation (Bracket notation)

console.log(user["familiya"]);
console.log(user["sposobnosti"]);
console.log(user["sposobnosti"][2]);
console.log(user["address"]);
console.log(user["address"].strana);
console.log(user["address"]['qorod']);

user.imya = "Aydan"
console.log(user);