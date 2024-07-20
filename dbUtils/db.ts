import sqlite from '@/db';

export async function addWordToUserDeck(wordId: number) {
  const db = await sqlite;
  await db.execAsync(`
    INSERT INTO user_deck (word_id)
    VALUES (${wordId})
  `);
}

export async function removeWordFromUserDeck(wordId: number) {
  const db = await sqlite;
  await db.execAsync(`
    DELETE FROM user_deck
    WHERE word_id = ${wordId}
  `);
}