window.addEventListener("scroll",function(){
  var currentScroll=window.pageYOffset;
  var elements=document.getElementsByClassName("element");

  if(currentScroll>20){
      for(var i=0;i<elements.length;i++){

      elements[i].classList.add("show2");
      elements[i].classList.remove("showFirst");
        }
    document.getElementsByClassName("showFirst2")[0].style="block";
    }
  if(currentScroll<20||currentScroll==0){
    for(var i=0;i<elements.length;i++){

    elements[i].classList.add("showFirst");
    elements[i].classList.remove("show2");
      }
  document.getElementsByClassName("showFirst2")[0].style="hidden";


  }


})
