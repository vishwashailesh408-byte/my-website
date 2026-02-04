function nextPage(current) {
  document.getElementById("page" + current).classList.remove("active");
  document.getElementById("page" + (current + 1)).classList.add("active");
}
