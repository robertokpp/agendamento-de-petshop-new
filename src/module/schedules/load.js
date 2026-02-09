import { hoursLoad } from "../form/hours-load.js";
const formDate = document.querySelector("#form-date");

export function schaedulesDay() {
  const date = formDate.value;

  hoursLoad({ date });
}
