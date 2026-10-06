$(document).ready(function () {
  $("#btnInsert").on("click", function () {
    // Đếm số hàng hiện có để đặt tên cho hàng mới
    var rowCount = $("#sampleTable tr").length;
    var n = rowCount + 1;

    var newRow = $("<tr class='new-row'>" +
                     "<td>Row" + n + " cell1</td>" +
                     "<td>Row" + n + " cell2</td>" +
                   "</tr>");

    $("#sampleTable").append(newRow);
  });
});