function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert ("Login successfully");
if(document.getElementById('log').innerText === "Logout")
{
    alert("Please enter the details");
        document.getElementById('log').style.display = "hidden"; 
        document.getElementById('log').innerText = "Login" 
    } }
    
    function city() {
        let input = document.getElementById('searchbar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('city');
          
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="city";                 
            }
        }
    }

    function viewMore() {
        var dots = document.getElementById("view");
  var moreText = document.getElementById("view");
  var btnText = document.getElementById("view");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}