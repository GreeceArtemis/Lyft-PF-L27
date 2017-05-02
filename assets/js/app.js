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
