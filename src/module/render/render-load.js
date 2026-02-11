import dayjs from "dayjs";
import { scheduleFetch } from "../../services/schedule-fetch";
const pageDate = document.querySelector("#date");

pageDate.value = dayjs(new Date()).format("YYYY-MM-DD");

function createInfo(period, hour, tutor, pet, service) {

  const ul = document.querySelector(`${period}`);
  const li = document.createElement("li");
  const time = document.createElement("time");
  const spanTutorPet = document.createElement("span");
  const spanService = document.createElement("span");
  const btnRemove = document.createElement("button");

  time.setAttribute("datetime", hour);
  time.textContent = `${hour}`;
  spanTutorPet.textContent = `${pet} / ${tutor}`;
  spanService.textContent = service;
  btnRemove.textContent = "Remover agendamento";
  btnRemove.classList.add("btn-remove");

  li.append(time);
  li.append(spanTutorPet);
  li.append(spanService);
  li.append(btnRemove);
  ul.append(li);
}

function reder(load) {
  const clear = document.querySelectorAll(".clear")
  console.log(clear)
  clear.forEach(element => {
    element.innerHTML = ""
  });

  load.forEach((element) => {
    if (element.SelectHour <= "12:00") {
      createInfo(
        ".period-morning",
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    } else if (element.SelectHour > "12:00" && element.SelectHour < "19:00") {
      createInfo(
        ".period-afternoon",
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    } else {
      createInfo(
        ".period-night",
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    }
  });
}


async function loadRender() {
  const date = pageDate.value;
  const load = await scheduleFetch({ date });
  reder(load);
}

loadRender()

pageDate.addEventListener("input", () => {
  loadRender()
});
