const container = document.querySelector(".container");
const val1 = document.querySelector(".val");
const output = document.querySelector(".output");
const baseurl = "http://localhost:3000/";

const btn1 = document.querySelector(".btn");
const btn2 = cme(container, "button", "Load Posts");
btn1.textContent = "Create New";

window.addEventListener("DOMContentLoaded", getAllPosts);

btn1.addEventListener("click", addPost);
btn2.addEventListener("click", getAllPosts);

function addPost(e) {
  console.log("Ready");
  e.preventDefault();
  const title = val1.value || "default title";
  const url = baseurl + "posts";
  const body = {
    title: title,
    author: "Dmitriy Angve",
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
}

function getAllPosts(e) {
  console.log("page ready");
  const url = baseurl + "posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pageContents(data);
    });
}

function pageContents(data) {
  console.log(data);
  output.innerHTML = "";
  const main = cme(output, "div", "");
  main.classList.add("box");
  data.forEach((el) => {
    console.log(el);
    const in1 = cme(main, "input", "");
    in1.value = el.title;
  });
}

function cme(parent, typeEle, html) {
  // cme - createMyElement
  const el = document.createElement(typeEle);
  parent.append(el);
  el.innerHTML = html;
  return el;
}
