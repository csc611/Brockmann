
function addClickHandlers() {
  const contentElems = document.getElementsByClassName('content');
  const navBarLinks = document.getElementsByClassName('link');

  function showPage(event){
    for(const content of contentElems) {
     if (content.classList.contains(event.target.id)) {
       content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    }
  }

  for (const link of navBarLinks) {
    link.addEventListener("click", showPage);
  }
}
addClickHandlers();