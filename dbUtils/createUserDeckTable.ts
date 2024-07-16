import * as SQLite from 'expo-sqlite';

async function createUserDeckTable() {
  const db = await SQLite.openDatabaseAsync('dictionary.db');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user_deck (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL UNIQUE,
      FOREIGN KEY(word_id) REFERENCES words(id)
    );
  `)
}
createUserDeckTable();