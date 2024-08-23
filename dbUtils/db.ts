import sqlite from '@/db';
import { Word } from '@/types';

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

export async function getEachWordInDeck() {
  const db = await sqlite;
  return db.getEachAsync(`
    SELECT words.*
    FROM words
    INNER JOIN user_deck ON words.id = user_deck.word_id
  `);
}

export async function getPagedWordsInDeck(startKey: string | null, count: number) {
  const db = await sqlite;
  const result = await db.getAllAsync<Word>(`
    SELECT words.*
    FROM words
    INNER JOIN user_deck ON words.id = user_deck.word_id
    WHERE words.word > ?
    ORDER BY words.word
    LIMIT ?
  `, [startKey || 0, count]);
  return result;
}

type CountResult = {
  count: number
}
export async function getCountOfWordsInDeck() {
  const db = await sqlite;
  const result = await db.getFirstAsync<CountResult>(`
    SELECT COUNT(*) AS count
    FROM user_deck
  `);
  if (!result) {
    return 0;
  }
  return result.count;
}