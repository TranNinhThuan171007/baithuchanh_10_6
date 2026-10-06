function insert_Row() {
  const table = document.getElementById("sampleTable");
  const rowNumber = table.rows.length + 1;
  const row = table.insertRow(-1);

  row.insertCell(0).textContent = `Row${rowNumber} `;
  row.insertCell(1).textContent = `Row${rowNumber} `;
}
