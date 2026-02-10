import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetch({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    const dailySchedule = data.filter((schedules) =>
      dayjs(date).isSame(schedules.scheduleData, "day"),
    );

    console.log(dailySchedule);
    
  } catch (error) {
    console.log(error);
    alert("Naõ foi possivel realizar a buscar");
  }
}

