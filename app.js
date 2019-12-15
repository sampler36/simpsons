
function imageGallery() {
    const highlight = document.querySelector(".highlight");
    const previews = document.querySelectorAll(".preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("pic-active"));
        highlight.src = bigSrc;
        preview.classList.add("pic-active");
      });
    });
  }
  
  imageGallery();