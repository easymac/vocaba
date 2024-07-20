import sqlite from '@/db';

export async function deleteUserDeckTable() {
  const db = await sqlite;
  await db.execAsync(`
    DROP TABLE IF EXISTS user_deck;
  `)
}
