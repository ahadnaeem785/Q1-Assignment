let alein_color="Green"
if(alein_color=="Green"){
    console.log("The Player Earned 5 Points");
}
alein_color="White"
if(alein_color=="Green"){
    console.log(" ");
    
}

let first_name=["Abdul","Muammad"]
let last_name=["Ahad","Moiz","Malik"]
let full_name=[]
for(let i=0;i<first_name.length;i++){
    for(let j=0;j<last_name.length;j++){
        full_name.push(`${first_name[i]} ${last_name[j]}`)
    }
}
console.log(full_name);
