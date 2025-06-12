import pool from './db.js';

export const resolvers = {
    Query: {
        employe: async (_, { ID }) => {
            const [rows] = await pool.query('SELECT * FROM Employe WHERE ID = ?', [ID]);
            return rows[0];
        },
        employes: async () => {
            const [rows] = await pool.query('SELECT * FROM Employe');
            return rows;
        }
    },
    Mutation: {
        addEmploye: async (_, args) => {
            const { nom, prenom, dateNaissance, adresse, telephone, email } = args;
            const [result] = await pool.query(
                'INSERT INTO Employe (nom, prenom, dateNaissance, adresse, telephone, email) VALUES (?, ?, ?, ?, ?, ?)',
                [nom, prenom, dateNaissance, adresse, telephone, email]
            );
            return { ID: result.insertId, ...args };
        },
        updateEmploye: async (_, { ID, ...updates }) => {
            const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
            const values = Object.values(updates);
            await pool.query(`UPDATE Employe SET ${fields} WHERE ID = ?`, [...values, ID]);
            return { ID, ...updates };
        },
        deleteEmploye: async (_, { ID }) => {
            await pool.query('DELETE FROM Employe WHERE ID = ?', [ID]);
            return true;
        }
    }
};