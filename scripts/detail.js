function regClick() {
    var cName = document.getElementById("cName").value;
    var date = document.getElementById("date").value;
    var noOfDays = Number(document.getElementById("noOfdays").value);
    var noOfPerson = Number(document.getElementById("noOfperson").value);
    var advance = Number(document.getElementById("advancePaid").value);
    var balAmount;
    var totalAmount;
    }
    totalAmount *= noOfDays;
    if (noOfPerson > 2) {
      totalAmount += (noOfPerson - 2) * 500 * noOfDays;
    }
    balAmount = totalAmount - advance;
    document.getElementById("reg").style.display = "none";
    document.getElementById("bookSum").style.display = "block";
    document.getElementById("customerName").innerHTML = cName;
    document.getElementById("chInDate").innerHTML = date;
    document.getElementById("totalDays").innerHTML = noOfDays;
    document.getElementById("totalPerson").innerHTML = noOfPerson;
    document.getElementById("roomAmount").innerHTML = "₹ " + totalAmount;
  }
  
  
  
  function activeReg() {
    var btn = document.getElementById("btnReg");
    btn.removeAttribute("disabled");
    btn.style.cursor = "pointer";
  }
  
  
  
  function closeClick() {
    document.getElementById("reg").style.display = "block";
    document.getElementById("bookSum").style.display = "none";
    location = location.href;
  }