const uls = document.querySelectorAll("ul");
import { ScheduleRemove } from "../../services/schedule-remove.js"
import { loadRender } from "../render/render-load.js";

uls.forEach((ul) => {
  ul.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btn-remove")) {
      const id = event.target.id;
      if (id) {
        const isConfirm = confirm("Tem certeza que da remocao do agendamento");
        if (isConfirm) {
          await ScheduleRemove({ id });
          loadRender()
        }
      }

    }
  });
});
