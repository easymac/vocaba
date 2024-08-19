import sqlite from '@/db';

export async function addWordToUserDeck(wordId: number) {
  const db = await sqlite;
  await db.runAsync(`
    INSERT INTO user_deck (word_id)
    VALUES (${wordId})
  `);
}

export async function removeWordFromUserDeck(wordId: number) {
  const db = await sqlite;
  await db.runAsync(`
    DELETE FROM user_deck
    WHERE word_id = ${wordId}
  `);
}

export async function getAllWordsInDeck() {
  const db = await sqlite;
  const result = await db.getAllAsync(`
    SELECT words.*
    FROM words
    INNER JOIN user_deck ON words.id = user_deck.word_id
  `);
  return result;
}