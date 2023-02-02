const container = document.querySelector(".container");
const val1 = document.querySelector(".val");
const output = document.querySelector(".output");
const baseurl = "http://localhost:3000/";

const btn1 = document.querySelector(".btn");
const btn2 = createMyElement(container, "button", "Load Posts");
btn1.textContent = "Create New";

window.addEventListener("DOMContentLoaded", getAllPosts);

btn1.addEventListener("click", addPost);

function addPost(e) {
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
}

function createMyElement(parent, typeEle, html) {
  const el = document.createElement(typeEle);
  parent.append(el);
  el.innerHTML = html;
  return el;
}
