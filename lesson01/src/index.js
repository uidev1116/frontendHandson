"use strict";

const li = document.createElement("li");
li.textContent = "これです";

const ul = document.querySelector(".js-ul");
ul.appendChild(li);
