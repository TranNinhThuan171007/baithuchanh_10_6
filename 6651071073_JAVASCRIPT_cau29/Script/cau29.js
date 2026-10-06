function getFormvalue(event) {
  event.preventDefault();

  const form = document.getElementById("form1");
  const firstName = form.elements.namedItem("fname").value;
  const lastName = form.elements.namedItem("lname").value;

  document.getElementById("result").textContent =
    `First name: ${firstName}; Last name: ${lastName}`;
}
