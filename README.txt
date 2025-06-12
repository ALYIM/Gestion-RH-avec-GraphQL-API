✅ Prérequis :

-Installation Node.js
-Un projet Node.js initialisé :
PS C:\Users\ASUS\graphql-api> npm init -y

Étape 1 : Installer les packages GraphQL


-un serveur minimal avec Apollo Server standalone :
npm install apollo-server graphql

2. Configuration de Base
XAMPP : Installez et lancez Apache + MySQL.

Base de Données : Créez une table Employé via phpMyAdmin :
-Créer une base de donnée et nommer: graphql_soa




*Structure des Fichiers

/graphql-api
│
├── /src
│   ├── schema.js          # Définitions GraphQL
│   ├── resolvers.js       # Requêtes SQL brutes
│   ├── db.js             # Connexion MySQL
│   └── server.js         # Serveur Apollo
│
├── package.json          # Dépendances Node.js
└── README.md             # Instructions



-Comment Démarrer le Projet ?

npm install
npm start

Accès à l'API :
→ http://localhost:4000 (GraphQL Playground).



-Lancement du Projet
--------> npm run dev


Exemple de Requête GraphQL:
Ajouter un nouvel employé :

mutation AddEmployee {
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



Mettre à jour un employé :

mutation UpdateEmployee {
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


Supprimer un employé :

mutation DeleteEmployee {
  deleteEmploye(ID: 1)
}


