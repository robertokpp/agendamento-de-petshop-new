import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetch } from "../../services/schedule-fetch.js";
const formDate = document.querySelector("#form-date");

export async function schedulesDay() {
  const date = formDate.value;

  const dailySchedule =  await scheduleFetch({ date });
  console.log(dailySchedule)
  hoursLoad({ date });
}

formDate.addEventListener("input", () => {
  schedulesDay();
});
