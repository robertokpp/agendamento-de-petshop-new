import dayjs from "dayjs";
import { scheduleFetch } from "../../services/schedule-fetch.js";
const pageDate = document.querySelector("#date");

pageDate.value = dayjs(new Date()).format("YYYY-MM-DD");

function createInfo(period, id, hour, tutor, pet, service) {

  const ul = document.querySelector(`${period}`);
  const li = document.createElement("li");
  const time = document.createElement("time");
  const div = document.createElement("div")
  const spanPet = document.createElement("span")
  const spanTutor = document.createElement("span");
  const spanService = document.createElement("span");
  const btnRemove = document.createElement("button");

  
  
  li.id = id
  time.setAttribute("datetime", hour);
  time.classList.add("text-time-pet")
  time.textContent = `${hour}`;
  spanPet.classList.add("text-time-pet")
  spanPet.textContent = `${pet} `
  spanTutor.classList.add("text-name")
  spanTutor.textContent = `/ ${tutor}`;
  spanService.classList.add("text-service")
  spanService.textContent = service;
  btnRemove.textContent = "Remover agendamento";
  btnRemove.id = id
  btnRemove.classList.add("btn-remove");
  
  
  div.append(time)
  spanPet.append(spanTutor)
  div.append(spanPet)
  li.append(div)
  li.append(spanService);
  li.append(btnRemove);
  ul.append(li);
}


function reder(load) {
  const clear = document.querySelectorAll(".clear")
  clear.forEach(element => {
    element.innerHTML = ""
  });

  load.forEach((element) => {
    if (element.SelectHour <= "12:00") {
      createInfo(
        ".period-morning",
        element.id,
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    } else if (element.SelectHour > "12:00" && element.SelectHour < "19:00") {
      createInfo(
        ".period-afternoon",
        element.id,
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    } else {
      createInfo(
        ".period-night",
        element.id,
        element.SelectHour,
        element.TutorName,
        element.PetName,
        element.descriptionService,
      );
    }
  });
}


export async function loadRender() {
  const date = pageDate.value;
  const load = await scheduleFetch({ date });
  reder(load);
}

loadRender()

pageDate.addEventListener("input", () => {
  loadRender()
});
