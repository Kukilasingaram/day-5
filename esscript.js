//for the given JSON iterate over all for loops (for,for in ,for of , for each)
const log =(logvalue)=> console.log(logvalue);
log("working good ....")
//loops or iterations

//basic for loop
for (let i =1 ;i<=5;i++){
    log(i)
}
const countryarr =["IND","CHN","US","UK","EUR","GER"];
//FOR loop for array
for (let i =1;i<countryarr.length;i++){
    log(countryarr[0])
}
//object
const countryobj ={
    INDIA:"IND",
    CHINA:"CHN",
    UNITEDSTATES:"US",
    UNITEDKINDOM:"UK",
    EUROPE:"EUR",
    GERMANY:"GER",

};
log("....Looping object.....");
const objectkeys  =Object.keys(countryobj)
log(objectkeys)
//for loop for object values
for (let i = 0; i<objectkeys.length;i++){
log(objectkeys[i])
}
//types of loop
//forin ,forof ,foreach

//for each =>best use case in array
log("...for each loop...")//the parameters should be in this order (value ,index ,acctualarray)
countryarr.forEach((value,index,accarr)=>{
    log(`
    value : ${value}
    index : ${index}
    accarr : ${accarr}
    `)
});
objectkeys.forEach((value)=>{
    log(`
    objectkeys : ${value}
    object value : ${countryobj["INDIA"]}

    `)
})
////for in loop
//best used for object
log("------forin loop")
//for(name in objectname){

//}
for(k in countryobj){
    log(`
    key : ${k}
    `)

}
log("----for in array---")
for(k in countryarr){
    log(`
    Index of array :${k}
    Values of array : ${countryarr[k]}
    `)
}
log("----for of----")
//best used for string
const countrystring ="allcountrydata";
for(str of countrystring){
    log(`
    value: ${str}
    `)
}
log("---for of in array---")
//for of in array
for(value of countryarr){
    log(`array value : ${value}`)
}
log("--for of in object---")
//for of in object
for (objval of objectkeys){
    log(`object keys : ${objval}`)
}



// 2. create your own resume data in JSON formate

const resume ={
    Name : "S.kukila",
    Dateofbirth : "18.02.2003",
    Mobile : "8220351692",
    email : "kukilasingaram@gmail.com",
    address : ["korattur , kalanivasal(po) , peravurani (tk) , Thanjavur (dt)"],
    educationalqualification :{
        sslc : "71",
        hsc : "61",
        BA : "78",
    },
    workexperience : "fresher",
    technichalSkill : ["msoffice","python"],
    personalstrength : ["time management","team builder","independent","sincere","team worker"],
    languageknown : ["tamil","english"]
    
    
}
log(resume)
log(resume.address)
log(resume.educationalqualification)


