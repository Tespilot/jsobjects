class Person{
    constructor(FName,LName,ADD){
    this.FName= FName;
    this.LName=LName;
    this.ADD=ADD;
}}

var P11= new Person('Tejas','Manhas','Chd');
var P12= new Person('Punya','Gill','Guwahati');
var P13= new Person('Lily','Dutta','Chd');
function d1() 
{
  alert( " The first person is "+P11.FName +" "+ P11.LName +" from " + P11.ADD);
}
function d2() 
{
  document.getElementById("display2").innerHTML= " The second person is " +P12.FName +" "+ P12.LName +" from " + P12.ADD;
}
function d3() 
{
  alert( "SEE CONSOLE");
  console.log( " The 3rd person is "+P13.FName +" "+ P13.LName +" from " + P13.ADD)
}