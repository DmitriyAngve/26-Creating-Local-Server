const container = document.querySelector(".container");
const btn1 = document.querySelector(".btn");
// const btn2 = createElement(parent, typeEle, "Load Posts");
const val1 = document.querySelector(".val");
const output = document.querySelector(".output");
const baseurl = "http://localhost:3000/";

btn1.textContent = "Create New";

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("page ready");
  const url = baseurl + "posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pageContents(data);
    });
});

btn1.addEventListener("click", (e) => {
  console.log("Ready");
  e.preventDefault();
  const url = baseurl + "posts";
  const body = {
    title: val1.value,
    author: "Laurence",
  };
  const opts = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  console.log(opts);
  fetch(url, opts)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

function pageContents(data) {
  console.log(data);
}

function createElement(parent, typeEle, html) {
  const el = document.createElement(typeEle);
  parent.append(el);
  el.innerHTML = html;
  return el;
}
