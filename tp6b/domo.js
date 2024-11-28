let appareils = [
    { name: "TV", status: "allumé" },
    { name: "Xbox", status: "éteint" },
    { name: "PlayStation", status: "allumé" },
  ];
  
  const appareilList = document.getElementById("appareilList");
  const appareilInput = document.getElementById("appareilInput");
  const addButton = document.getElementById("addButton");
  const allOnButton = document.getElementById("allOnButton");
  const allOffButton = document.getElementById("allOffButton");
  
  function renderAppareils() {
    appareilList.innerHTML = "";
    appareils.forEach((appareil, index) => {
      const listItem = document.createElement("li");
      listItem.className = `list-group-item ${
        appareil.status === "allumé" ? "list-group-item-success" : "list-group-item-danger"
      }`;
  
      listItem.innerHTML = `
        <h4>${appareil.name} -- ${appareil.status.charAt(0).toUpperCase() + appareil.status.slice(1)}</h4>
        <button class="btn btn-success">ON</button>
        <button class="ml-2 btn btn-danger">OFF</button>
      `;
  
      listItem.querySelector(".btn-success").addEventListener("click", () => {
        appareils[index].status = "allumé";
        renderAppareils();
      });
  
      listItem.querySelector(".btn-danger").addEventListener("click", () => {
        appareils[index].status = "éteint";
        renderAppareils();
      });
  
      appareilList.appendChild(listItem);
    });
  }
  
  addButton.addEventListener("click", () => {
    const appareilName = appareilInput.value.trim();
    if (appareilName) {
      appareils.push({ name: appareilName, status: "éteint" });
      appareilInput.value = "";
      renderAppareils();
    }
  });
  
  allOnButton.addEventListener("click", () => {
    appareils = appareils.map((appareil) => ({ ...appareil, status: "allumé" }));
    renderAppareils();
  });
  
  allOffButton.addEventListener("click", () => {
    appareils = appareils.map((appareil) => ({ ...appareil, status: "éteint" }));
    renderAppareils();
  });
  
  renderAppareils();
  