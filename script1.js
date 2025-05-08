// script.js

// Fonction de confirmation avant modification
function confirmerModification() {
    const confirmation = confirm("Voulez-vous vraiment modifier votre profil ?");
    if (confirmation) {
      window.location.href = "/edit-profile";
    }
  }
  
  // Fonction de confirmation pour changement de mot de passe
  function changerMotDePasse() {
    const confirmation = confirm("Souhaitez-vous changer votre mot de passe ?");
    if (confirmation) {
      window.location.href = "/change-password";
    }
  }
  
  // Message d'accueil dynamique (optionnel)
  window.addEventListener("DOMContentLoaded", () => {
    const userName = document.querySelector("h1")?.textContent;
    if (userName) {
      console.log(`Bienvenue sur votre profil, ${userName} !`);
    }
  });
  