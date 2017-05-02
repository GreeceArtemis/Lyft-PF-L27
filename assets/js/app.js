window.addEventListener("scroll",function(){
  var currentScroll=window.pageYOffset;
  var elements=document.getElementsByClassName("element");

  if(currentScroll>20){
    document.getElementsByClassName("logo2")[0].style.display="block";
    document.getElementsByClassName("logo1")[0].style.display="none";
    document.getElementsByClassName("divheader")[0].classList.add("fondoheader");
      for(var i=0;i<elements.length;i++){

      elements[i].classList.add("show2");
      elements[i].classList.remove("showFirst");
        }
    document.getElementsByClassName("showFirst2")[0].style.visibility="visible";
    }
  if(currentScroll<20||currentScroll==0){
    document.getElementsByClassName("divheader")[0].classList.remove("fondoheader");
    document.getElementsByClassName("logo2")[0].style.display="none";
    document.getElementsByClassName("logo1")[0].style.display="block";
    for(var i=0;i<elements.length;i++){

    elements[i].classList.add("showFirst");
    elements[i].classList.remove("show2");
      }
  document.getElementsByClassName("showFirst2")[0].style.visibility="hidden";



  }


})
var phoneclick=document.getElementById("phone");
phoneclick.addEventListener("click",function(){
  document.getElementsByClassName("moredate")[0].style.display="block";
  document.getElementsByClassName("datePhone")[0].style.height="410px"
})

//window.onload=function(){
  var phone=document.getElementById("phone").value;
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var city=document.getElementById("city").value;
var soloLetras = function(e){
  var codigoTecla = e.keyCode;
  if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
    this.nextElementSibling.nextElementSibling.innerText = "";
    return true;
  }else{
    this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras"
    return false;
  }
}
var soloNumeros = function(e){
  var codigoTecla = e.keyCode;
  var longitud = this.value.length;
  if(longitud==1){
    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
  }
  if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=2){
    return true;
  }else{
    return false;
  }
}
phone.onkeypress=soloNumeros;
name.onkeypress=soloLetras;
city.onkeypress=soloLetras;
