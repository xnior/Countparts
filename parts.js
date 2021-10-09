let weight = 120;

if (weight > 100) {
    console.log("OverWeight!")
}else{
    console.log("Normal Weight");
}

let partslist = ["Break","Stator", "Rotor", "Wire", "Plug"]

if (partslist.length<5) {
    console.log("The system parts, has slot");
    
}else{
    console.log("The system parts is full!")
}

console.log("The Parts List has " +partslist.length + " items");
console.log("Adding the new Item with function Push!");


partslist.push("Terminal");


console.log("Added Successfull");

console.log(partslist);

let newpart = "Wire2You";

if (newpart.length<3) {
    console.log("The Part name Cannot be named like Code\nInsert more than 3 items in a Word!")
}else{
    console.log("The Word Size is OK!");
}


for( index = 0; index < partslist.length; index++) {
    const element = partslist[index];
    console.log(element);
    
}