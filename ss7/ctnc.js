function sum(){
    let Elementa =document.getElementById('a')
    let Elementb =document.getElementById('b')
    let avalue=Elementa.value ;
    let bvalue=Elementb.value ;
    let sum =parseInt(avalue) + parseInt(bvalue);
    document.getElementById('result').innerHTML =sum;

}
function subtract(){
    let Elementa =document.getElementById('a')
    let Elementb =document.getElementById('b')
    let avalue=Elementa.value ;
    let bvalue=Elementb.value ;
    let subtract =parseInt(avalue) - parseInt(bvalue);
    document.getElementById('result').innerHTML =subtract;

}
function multiply(){
    let Elementa =document.getElementById('a')
    let Elementb =document.getElementById('b')
    let avalue=Elementa.value ;
    let bvalue=Elementb.value ;
    let multiply =parseInt(avalue) * parseInt(bvalue);
    document.getElementById('result').innerHTML =multiply;

}
function divide(){
    let Elementa =document.getElementById('a')
    let Elementb =document.getElementById('b')
    let avalue=Elementa.value ;
    let bvalue=Elementb.value ;
    let divide =parseInt(avalue) / parseInt(bvalue);
    document.getElementById('result').innerHTML =divide;
}