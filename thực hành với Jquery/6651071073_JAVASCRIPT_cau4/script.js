$(document).ready(function () {
  $("#btnRemove").on("click", function () {
    // Xóa option đang được chọn khỏi dropdown
    $("#colorSelect option:selected").remove();
  });
});