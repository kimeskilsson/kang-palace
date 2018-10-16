// gets the modal
var modal = document.getElementById('myModal');
        
// button that opens modal
var btn = document.getElementById("myBtn");

// Gets the element that minimizes the modal
var span = document.getElementsByClassName("minimize")[0];

// opens the modal when you click!
btn.onclick = function() {
    modal.style.display = "block";
}

// when user clicks on minimize, closes the modal
span.onclick = function() {
    modal.style.display = "none";
}
