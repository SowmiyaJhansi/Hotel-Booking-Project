let enableOrDisablePayNowButton = () => {
    let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    let payNowButton = document.getElementById("payNowBtn");
    if (isUserLoggedIn && isUserLoggedIn === "false") {
      payNowButton.disabled = true;
    } else if (isUserLoggedIn === "true") {
      payNowButton.disabled = false;
    }
  };
  
  var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=AIzaSyAjN2HozyHDE4ybD_IzOnzBwWlCefnYbwE";

  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: card
  }).success(function(data) {
    console.log(data);
    alert(data.transaction.payment_method.token);
  }).error(function(request, status, error) {
    console.log(error);
    alert('error');
  });