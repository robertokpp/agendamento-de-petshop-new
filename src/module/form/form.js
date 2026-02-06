import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

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
