const navbar = document.getElementById("navbar");
const navdrop = document.getElementById("drop");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 150;
          if(window.scrollY > valuescroll){
            navbar.style.backgroundColor = "#374151";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "0px 0px";
            navdrop.style.transition = "0.5s"
            navdrop.style.top = "96p";

          }
          else{
            navbar.style.backgroundColor = "transparent";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "2px 0px";
          }
        }
        alert("I'm Thivcoding ! Welcome To my portfolio 🥰🙏🏽");

        $(document).ready(function() {
          $("#open").click(function() {
            $("#open").addClass("hidden");
            $("#close").removeClass("hidden");
            $("#drop").addClass("left-[0]");
          });
      
          $("#close").click(function() {
            $("#close").addClass("hidden");
            $("#open").removeClass("hidden");
            $("#drop").removeClass("left-[0]");
          });
        });