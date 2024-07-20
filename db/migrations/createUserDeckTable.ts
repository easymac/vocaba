import sqlite from '@/db';

async function createUserDeckTable() {
  const db = await sqlite;
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user_deck (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL UNIQUE,
      FOREIGN KEY(word_id) REFERENCES words(id)
    );
  `)
}
createUserDeckTable();