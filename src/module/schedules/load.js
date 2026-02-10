import { hoursLoad } from "../form/hours-load.js";
const formDate = document.querySelector("#form-date");

export function schedulesDay() {
  const date = formDate.value;
  hoursLoad({ date });
}

formDate.addEventListener("input", () => {
  schedulesDay()
});