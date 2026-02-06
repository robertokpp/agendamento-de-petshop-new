import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const form = document.querySelector("form");
const formDate = document.querySelector("#form-date");
const formHour = document.querySelector("#form-hour");
const todayInput = dayjs(new Date()).format("YYYY-MM-DD");

formDate.value = todayInput;
formDate.min = todayInput;

openingHours.forEach((element) => {
  const HourOption = document.createElement("option");
  HourOption.textContent = element;
  formHour.append(HourOption);
});

form.addEventListener("submit", (event) => {
  const formName = form.querySelector("#tutors-name");
  const formPetName = form.querySelector("#pet-name-forn")
  const formTel = form.querySelector("#tel")
  const formDescription = form.querySelector("#decs-service") 


  if (!formName.value.trim()) {
    alert("nome nao valido");
  }

  event.preventDefault();

  console.log("enviando");
  console.log(formName.value);
  console.log(formPetName.value);
  console.log(formTel.value);
  console.log(formDescription.value);
});
