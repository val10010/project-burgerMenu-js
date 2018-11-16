(function() {
  const tabs = document.querySelector(".tabs");

  tabs.addEventListener("click", myFunction);
  function myFunction(event) {
    let tabClass = document.querySelectorAll(".tabs .tab");
    console.log(tabClass);
    const container = document.querySelectorAll(".container .content");

    for (let i = 0; i < container.length; i++) {
      container[i].classList.add("hidden");
      container[i].classList.remove("show");
      if (event.target.dataset.tab == container[i].dataset.content) {
        container[i].classList.remove("hidden");
      }
    }
  }
})();
