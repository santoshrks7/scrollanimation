const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrolling);
scrolling();
function scrolling() {
  const innerHeightofBrowser = window.innerHeight;

  boxes.forEach((boxitem) => {
    boxtop = boxitem.getBoundingClientRect().top;
    if (boxtop < innerHeightofBrowser) {
      boxitem.classList.add("show");
    } else {
      boxitem.classList.remove("show");
    }
  });
}

//will give the innerheight of the browser viewport i.e window .innerHeight
// const innerHeighthere = window .innerHeight;
// console.log(innerHeighthere)

//will give the top of the element relative to the viewport i.e getBoundingClientRect().top
// const para = document.querySelector(".pd")
// const para2 = para.getBoundingClientRect().top
// console.log(para2)

// boxes.forEach((item)=>{
//   const boxtop = item.getBoundingClientRect().top;
//   console.log(boxtop,item.innerText);
// })
