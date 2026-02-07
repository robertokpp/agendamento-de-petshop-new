import { apiConfig } from "./api-config.js";

export async function scheduleNew({id,TutorName,PetName,descriptionService,SelectHour,scheduleData,}) { 
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        TutorName,
        PetName,
        descriptionService,
        SelectHour,
        scheduleData,
      }),
    });

    alert("Agendamento realizado com sucesso")
  } catch (error) {
    console.log(error);
    alert("ERRO")
  }
}
