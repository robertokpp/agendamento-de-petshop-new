import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { tel } from "../../utils/phone-validator.js";
import { loadRender } from "../render/render-load.js";

const form = document.querySelector("form");
const formDate = document.querySelector("#form-date");
const formHour = document.querySelector("#form-hour");
const todayInput = dayjs(new Date()).format("YYYY-MM-DD");

formDate.value = todayInput;
formDate.min = todayInput;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formName = form.querySelector("#tutors-name");
  const formPetName = form.querySelector("#pet-name-forn");
  const formDescription = form.querySelector("#decs-service");

  const id = crypto.randomUUID();
  const TutorName = formName.value;
  const PetName = formPetName.value;
  const descriptionService = formDescription.value;
  const SelectHour = formHour.value;
  const scheduleData = formDate.value;

  

  if (TutorName.trim() === "") {
    alert("Nome do Tutor não preenchido!");
    return;
  }

  if (PetName.trim() === "") {
    alert("Nome do Pet não preenchido!");
    return;
  }

  if (tel.trim() === "") {
    alert("Informe o telefone");
    return;
  } else if (tel.length < 15) {
    alert("Informe um telefone valido!!");
    return;
  }

  if (descriptionService.trim() === "") {
    alert("Informe um serviço a ser realizado.");
    return;
  }

  if (SelectHour === "" || scheduleData == "") {
    alert("Informe uma Data e Hora validos");
    return;
  }

  await scheduleNew({
    id,
    TutorName,
    PetName,
    tel,
    descriptionService,
    SelectHour,
    scheduleData,
  });

  formName.value = ""
  formPetName.value = ""
  formDescription.value = ""

  await loadRender()
});
