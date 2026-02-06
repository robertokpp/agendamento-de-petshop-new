"use strict";

//configuração do dayjs
import "./libs/dayjs.js";

//CSS
import "./styles/aside.css";
import "./styles/dialog.css";
import "./styles/form.css";
import "./styles/global.css";
import "./styles/utility.css";

// scripts
import "./scripts/modal.js";
import dayjs from "dayjs";


setInterval(() => {
  console.log(dayjs().format("hh:mm:ss"))
}, 1000);
