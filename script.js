const titleBtn = document.getElementsByClassName('title');
const boxBtn = document.getElementsByClassName('box_title');

let i
for(i = 0; i < titleBtn.length; i++ ){
    titleBtn[i].addEventListener("click", function() {
        console.log(titleBtn)
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
          content.style.transition = "display 1s easy-out"
        }
      });
}
for(i = 0; i < boxBtn.length; i++ ){
    boxBtn[i].addEventListener("click", function() {
        console.log(titleBtn)
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
}