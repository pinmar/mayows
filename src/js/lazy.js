var lazy;

    function showData(e){
      e.preventDefault();
      data.classList.add("show");
    }
    let btn = document.getElementById("buy"),
         data = document.querySelector(".buy-data");

    if(btn){
      btn.addEventListener("click", showData, false);
    }
      
    const bgOverlay = document.querySelector(".background-overlay");
    let bioBtn = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bioBtn);
    const body = document.querySelector("body");
    const wrapper = document.querySelector(".wrapper-people");

    if(wrapper){
      wrapper.addEventListener("click", function(e){
        const productButtons = wrapper.querySelectorAll("button");
        if( e.target.className === "button margin-top"){
          // open.bind(e.target.parentElement.nextElementSibling)();
          open.bind(e.target.parentElement.nextElementSibling)();
          
        }
        else if(e.keyCode == 27 || e.target.classList.contains("background-overlay") || e.target.classList.contains("red")){
          
          close.bind(this)();
          // let qq = document.querySelector(".bio-details");
          // qq.removeEventListener("scroll", handler, false);
        }
        else 
          return;

      }, false);
    }
    function addNoScroll(){
      body.classList.add("no-scroll");
    }
    function removeNoScroll(){
      body.classList.remove("no-scroll");
    }
    function open(){
      
      this.classList.add("show-bio");
      bgOverlay.classList.add("background-visible");
      window.addEventListener("keydown", close, false);

      createCloseBtn.bind(this)();
      loadImage.bind(this)();
      addNoScroll();
      scrollEvent();
    }

    function close(){
      
      let panelOpened = document.querySelector(".show-bio");
      panelOpened.removeEventListener("scroll", handler, false);
      if(panelOpened){
        panelOpened.classList.remove("show-bio");
        setTimeout(function(){
          panelOpened.scrollTop = 0;
        }, 500);
      }
      
      bgOverlay.classList.remove("background-visible");
      window.removeEventListener("keydown", close, false);
      removeNoScroll();
      
    }
    function createCloseBtn(){
      if(this.querySelector(".red")){
        return;
      }
      
      const closeBtn = document.createElement('span');
      const bioWrapper = this.firstElementChild;
      closeBtn.innerHTML = "Close";
      closeBtn.classList = "button red button-sticky";
      
      bioWrapper.appendChild(closeBtn);
    }

    function loadImage(){
      let img = this.firstElementChild.firstElementChild;
      if(img.getAttribute("data-src") == img.getAttribute("src")){
        return;
      }
      img.setAttribute("src", img.getAttribute("data-src"));
    }

    var handler;
    function scrollEvent(){

      var bioD = document.querySelector(".bio-details");

      handler = function(){
        let divTop = this.firstElementChild.getBoundingClientRect().top;
        let actualTop = (-1)*divTop + 10;
        let closeBtn = this.firstElementChild.querySelector(".button");
        closeBtn.style.top = actualTop +"px";
      }

      bioD.addEventListener("scroll", handler, false);

    }

    // function positionForCloseBtn(){
      
    //   let divTop = this.firstElementChild.getBoundingClientRect().top;
    //   let actualTop = (-1)*divTop + 10;
    //   let closeBtn = this.firstElementChild.querySelector(".button");
    //   closeBtn.style.top = actualTop +"px";
    //   // this.addEventListener("scroll", positionForCloseBtn.bind(this), false);
    //   qwe(e);
      
    // }

    


export default lazy;