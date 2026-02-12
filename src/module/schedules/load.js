import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetch } from "../../services/schedule-fetch.js";
const formDate = document.querySelector("#form-date");

export async function schedulesDay() {
  const date = formDate.value;

  const dailySchedule =  await scheduleFetch({ date });

  hoursLoad({ date , dailySchedule });
}

formDate.addEventListener("input", () => {
  schedulesDay();
});
