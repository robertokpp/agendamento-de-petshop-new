import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date, dailySchedule }) {
  const formHour = document.querySelector("#form-hour");
  formHour.innerHTML = "";
 
  let disabledHour = [];
  dailySchedule.map((hour) => {
    disabledHour.push(hour.SelectHour)
  });

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    const available = !disabledHour.includes(hour) && isHourPast
    
    return { hour, available };
  });

  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
    option.textContent = hour;
    if (available) {
      option.disabled = false;
    } else {
      option.disabled = true;
    }
    formHour.append(option);
  });
}
