//This file manages all item-related operations of the portal

// Lost Item Form

const lostForm = document.getElementById("lostForm");

if (lostForm) {

  lostForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const lostItem = {

      name: document.getElementById("name").value,

      item: document.getElementById("item").value,

      location: document.getElementById("location").value,

      date: document.getElementById("date").value,

      description: document.getElementById("description").value,

      contact: document.getElementById("contact").value
    };


    // Fetch stored items


    let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    lostItems.push(lostItem);
    localStorage.setItem(
      "lostItems",
      JSON.stringify(lostItems));

    alert("Lost Item Report Submitted");
    lostForm.reset();
  });
}



const foundForm = document.getElementById("foundForm");

if (foundForm) {

  foundForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const foundItem = {

      name: document.getElementById("finderName").value,

      item: document.getElementById("foundItem").value,

      location: document.getElementById("foundLocation").value,

      date: document.getElementById("foundDate").value,

      description: document.getElementById("foundDescription").value,

      contact: document.getElementById("foundContact").value

    };

    let foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

    foundItems.push(foundItem);

    localStorage.setItem(

      "foundItems",
      JSON.stringify(foundItems)

    );

    alert("Found Item Report Submitted");
    foundForm.reset();

  });

}

const lostContainer = document.getElementById("lostItems");

if (lostContainer) {

  let lostItems = JSON.parse(

    localStorage.getItem("lostItems")

  ) || [];

  lostItems.forEach(item => {

    lostContainer.innerHTML += `

      <div class="item-card">

        <h3>${item.item}</h3>

        <p><b>Name:</b> ${item.name}</p>

        <p><b>Location:</b> ${item.location}</p>

        <p><b>Date:</b> ${item.date}</p>

        <p>${item.description}</p>

        <p><b>Contact:</b> ${item.contact}</p>

      </div>

    `;

  });

}

const foundContainer = document.getElementById("foundItems");

if (foundContainer) {

  let foundItems = JSON.parse(

    localStorage.getItem("foundItems")

  ) || [];

  foundItems.forEach(item => {

    foundContainer.innerHTML += `

      <div class="item-card">

        <h3>${item.item}</h3>

        <p><b>Name:</b> ${item.name}</p>

        <p><b>Location:</b> ${item.location}</p>

        <p><b>Date:</b> ${item.date}</p>

        <p>${item.description}</p>

        <p><b>Contact:</b> ${item.contact}</p>

      </div>

    `;

  });

}



const search = document.getElementById("search");

if (search) {

  search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".item-card");

    cards.forEach(card => {

      card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";

    });

  });

}