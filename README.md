# 📊 Gestion RH avec GraphQL - API Node.js + MySQL

Ce projet est une API GraphQL pour la **gestion des employés** d'une entreprise. Elle permet d'ajouter, de mettre à jour, de supprimer et de consulter des employés à l’aide de **GraphQL**, **Apollo Server**, et **MySQL**.

---

## ✅ Prérequis

- **Node.js** installé
- **XAMPP** (Apache + MySQL)
- **Base de données MySQL** nommée `graphql_soa`

---

## 📁 Structure du projet


---

## ⚙️ Installation et Lancement

```bash
npm install       # Installer les dépendances
npm run dev       # Lancer le serveur en mode développement

L’API est disponible à l’adresse suivante :
➡️ http://localhost:4000


🗃️ Base de données MySQL
Créer une base de données appelée graphql_soa via phpMyAdmin.

Exemple de table employe :

CREATE TABLE employe (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  dateNaissance DATE,
  email VARCHAR(100),
  telephone VARCHAR(20),
  adresse TEXT
);


🔁 Exemples de Requêtes GraphQL
➕ Ajouter un employé

mutation {
  addEmploye(
    nom: "Martin",
    prenom: "Sophie",
    dateNaissance: "1992-08-20",
    email: "sophie@example.com"
  ) {
    ID
    nom
  }
}



🔄 Mettre à jour un employé
mutation {
  updateEmploye(
    ID: 1,
    telephone: "0612345678",
    adresse: "Paris"
  ) {
    ID
    telephone
    adresse
  }
}


❌ Supprimer un employé
mutation {
  deleteEmploye(ID: 1)
}


💡 Objectif
Ce projet est destiné à apprendre et expérimenter :

La création d'une API GraphQL avec Node.js

La gestion des données via MySQL

L'intégration avec Apollo Server












