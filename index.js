const fs = require("fs");
const date = new Date();

const readmeContent = `
# Mise à jour automatique du README

Ce README est mis à jour automatiquement par GitHub Actions.

## Dernière mise à jour

La dernière mise à jour a été effectuée le ${date.toLocaleDateString()} à ${date.toLocaleTimeString()}.

## Message personnalisé

Bienvenue sur mon projet GitHub ! Ce README est régulièrement mis à jour pour afficher la dernière date et heure de mise à jour.
`;

fs.writeFile("README.md", readmeContent, (err) => {
  if (err) throw err;
  console.log("README.md has been updated!");
});
