const fs = require("fs");

// Fonction pour obtenir la date du jour au format "jour/mois/année"
function getTodaysDate() {
  const today = new Date();
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
}

// Contenu du README
const readmeContent = `# Bienvenue sur mon projet

Ce projet est mis à jour automatiquement.

Dernière mise à jour : ${getTodaysDate()}
`;

// Écriture dans le fichier README.md
fs.writeFile("README.md", readmeContent, (err) => {
  if (err) throw err;
  console.log("README.md a été mis à jour avec la date du jour.");
});
