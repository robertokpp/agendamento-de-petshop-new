const formTel = document.querySelector("#tel");

formTel.addEventListener("input", (e) => {
  let value = formTel.value.replace(/[^0-9]/g, "");
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  }
  formTel.value = value;
});


