"use strict";

const append = (selector, str) => {
  if (!str || typeof str !== 'string') return;
  const el = document.querySelector(selector);
  const tmp = document.createElement('div');
  tmp.innerHTML = str;
  const node = tmp.childNodes;
  el.appendChild(node[0]);
}

const node = '<a href="1.html"><img src="bookmark.png" alt="ブックマーク" />これです</a>';

append(".js-list-group", node);

