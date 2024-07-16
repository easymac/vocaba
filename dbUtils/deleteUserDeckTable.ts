import * as SQLite from 'expo-sqlite';

export async function deleteUserDeckTable() {
  const db = await SQLite.openDatabaseAsync('dictionary.db');
  await db.execAsync(`
    DROP TABLE IF EXISTS user_deck;
  `)
}
