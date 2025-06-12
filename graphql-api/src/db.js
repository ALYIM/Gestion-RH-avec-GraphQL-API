import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',          // Mot de passe vide par défaut
    database: 'graphql_soa' // Base créée dans phpMyAdmin
});

export default pool;