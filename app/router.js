fetch("app/views/tabs.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("tabs-container").innerHTML = data;
  });
