import dayjs from "dayjs";
import { scheduleFetch } from "../../services/schedule-fetch";
const pageDate = document.querySelector("#date");

pageDate.value = dayjs(new Date()).format("YYYY-MM-DD");

const periodMorning = document.querySelector(".period-morning");
const periodAfternoon = document.querySelector(".period-afternoon");
const periodNight = document.querySelector(".period-night");

function createInfo({ hour, tutor, pet, service }) {
  const li = document.createElement("li");
  const time = document.createElement("time");
  time.setAttribute("datetime", hour);
  li.append(time);

  const spanTutorPet = document.createAttribute("span");
  spanTutorPet.textContent = `${tutor} / ${pet}`;
  li.append(spanTutorPet);

  const spanService = document.createAttribute("span");
  spanService.textContent = service;
  li.append(spanService);

  const btnRemove = document.createAttribute("button");
  btnRemove.classList.add("btn-remove");
  li.append(btnRemove);
}

function reder(load) {
  load.forEach((element) => {
    if (element.SelectHour <= "12:00") {
      createInfo(
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    } else if (element.SelectHour >= "13:00" && element.SelectHour >= "13:00") {
    } else {
    }

    console.log(`/ ${element.SelectHour} `);
  });
}

pageDate.addEventListener("input", async () => {
  const date = pageDate.value;
  const load = await scheduleFetch({ date });
  reder(load);
});
