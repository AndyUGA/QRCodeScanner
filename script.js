
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      JSON.parse(this.responseText)["id"];
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();
}