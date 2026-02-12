import { apiConfig } from "./api-config";

export async function ScheduleRemove({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    alert("Nao foi possivel remover o agendamento");
    console.log(error);
  }
}
