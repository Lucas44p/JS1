class Personne {
    constructor(prenom, nom, status = true) {
      this.prenom = prenom;
      this.nom = nom;
      this.status = status;
    }
  }
  
  class GestionPersonnes {
    constructor() {
      this.personnes = JSON.parse(localStorage.getItem('personnes')) || [];
      this.tableBody = document.querySelector("table tbody");
      this.init();
    }
  
    init() {
      this.renderTable();
      document.querySelector(".btn-success").addEventListener("click", () => this.ajouterPersonne());
    }
  
    renderTable() {
      this.tableBody.innerHTML = "";
      this.personnes.forEach((personne, index) => {
        const row = document.createElement("tr");
        row.className = personne.status ? "table-success" : "table-danger";
        row.dataset.indice = index;
  
        row.innerHTML = `
          <td>${personne.prenom}</td>
          <td>${personne.nom}</td>
          <td>
            <button class="btn btn-danger" data-action="supprimer">
              <i class="fa fa-trash"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-warning" data-action="changerStatut">
              <i class="fa fa-check"></i>
            </button>
          </td>
        `;
  
        row.querySelector('[data-action="supprimer"]').addEventListener("click", () => this.supprimerPersonne(index));
        row.querySelector('[data-action="changerStatut"]').addEventListener("click", () => this.changerStatut(index));
  
        this.tableBody.appendChild(row);
      });
    }
  
    ajouterPersonne() {
      const prenomInput = document.querySelector('input[placeholder="Prénom"]');
      const nomInput = document.querySelector('input[placeholder="Nom"]');
      const prenom = prenomInput.value.trim();
      const nom = nomInput.value.trim();
  
      if (prenom && nom) {
        this.personnes.push(new Personne(prenom, nom));
        this.sauvegarder();
        this.renderTable();
        prenomInput.value = "";
        nomInput.value = "";
      } else {
        alert(" Prénom et Nom.");
      }
    }
  
    supprimerPersonne(index) {
      this.personnes.splice(index, 1);
      this.sauvegarder();
      this.renderTable();
    }
  
    changerStatut(index) {
      this.personnes[index].status = !this.personnes[index].status;
      this.sauvegarder();
      this.renderTable();
    }
  
    sauvegarder() {
      localStorage.setItem("personnes", JSON.stringify(this.personnes));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    new GestionPersonnes();
  });
  