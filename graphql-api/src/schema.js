import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Employe {
        ID: Int!
        nom: String!
        prenom: String!
        dateNaissance: String!
        adresse: String
        telephone: String
        email: String!
    }

    type Query {
        employe(ID: Int!): Employe
        employes: [Employe]
    }

    type Mutation {
        addEmploye(
            nom: String!,
            prenom: String!,
            dateNaissance: String!,
            adresse: String,
            telephone: String,
            email: String!
        ): Employe
        updateEmploye(
            ID: Int!,
            nom: String,
            prenom: String,
            dateNaissance: String,
            adresse: String,
            telephone: String,
            email: String
        ): Employe
        deleteEmploye(ID: Int!): Boolean
    }
`;