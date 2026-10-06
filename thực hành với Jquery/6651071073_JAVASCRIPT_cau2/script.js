$(document).ready(function () {
  $("#form1").on("submit", function (e) {
    e.preventDefault(); // ngăn form tải lại trang

    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();

    alert("First name: " + fname + "\nLast name: " + lname);

    $("#result").text("result: " + fname + " " + lname);
  });
});