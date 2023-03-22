
function openMenu() {
    document.getElementById("menu").style.width = "100%";
    const element = document.querySelector("#Body");
    element.classList.add("stop-scroll");
}
  

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}

function checkforscroll() {
    let y = window.pageYOffset;
    //console.log(y);
    if(y > 0){
        document.getElementById("header").classList.remove("myStyle1");
        document.getElementById("header").classList.add("myStyle");
        //console.log("white");
        list.add("myStyle");
    }else{
        document.getElementById("header").classList.remove("myStyle");
        document.getElementById("header").classList.add("myStyle1");
        //console.log("none");
    }

  }
  
