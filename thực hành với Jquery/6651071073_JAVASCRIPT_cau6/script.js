$(document).ready(function () {
  $("#btnCount").on("click", function () {
    // Đếm số mục trong dropdown
    var count = $("#mySelect option").length;

    // Lấy nội dung từng mục
    var items = [];
    $("#mySelect option").each(function () {
      items.push($(this).text());
    });

    // Hiển thị trong cửa sổ cảnh báo
    alert("Số mục trong dropdown: " + count + "\n" + items.join("\n"));
  });
});