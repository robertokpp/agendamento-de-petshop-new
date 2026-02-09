import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { scheduleNew } from "../../services/schedule-new.js";
import { tel } from "../../utils/phone-validator.js";

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

  await scheduleNew({
    id,
    TutorName,
    PetName,
    tel,
    descriptionService,
    SelectHour,
    scheduleData,
  });
});
