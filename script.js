"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  post();

  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", get);

function get() {
  fetch("frontend2019-7c5c.restdb.io/rest/to-do", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=uft-8",
      "x-apikey": "5d887741fd86cb75861e260a",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(items => {
      console.log(items);
      items.forEach(addItemToList);
    });
}

function addItemToList(item) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("article.item").dataset.itemid = item._id;

  copy.querySelector(".itemName").textContent = item.name;

  copy.querySelector("button.btnDelete").addEventListener("click", () => {
    e.target.parentElement.remove();
  });

  copy.querySelector(".itemDone").addEventListener("click", e => {
    //MOVE TO DIFFERENT ARRAY
  });

  document.querySelector("#uncompleted").appendChild(copy);
}

function post() {
  const data = {
    name: form.elements.item.value
  };

  addItemToList(data);

  const postData = JSON.stringify(data);

  fetch("frontend2019-7c5c.restdb.io/rest/to-do", {
    method: "post",
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-apikey": "5d887741fd86cb75861e260a",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function deleteSnack(id) {
  fetch("frontend2019-7c5c.restdb.io/rest/to-do/" + id, {
    method: "delete",
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-apikey": "5d887741fd86cb75861e260a",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
