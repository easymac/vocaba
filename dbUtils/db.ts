import * as SQLite from 'expo-sqlite';

export async function addWordToUserDeck(wordId: number) {
  const db = await SQLite.openDatabaseAsync('dictionary.db');
  await db.execAsync(`
    INSERT INTO user_deck (word_id)
    VALUES (${wordId})
  `);
  db.closeSync();

  console.log(`Added word with id ${wordId} to user deck`);
}

export async function removeWordFromUserDeck(wordId: number) {
  const db = await SQLite.openDatabaseAsync('dictionary.db');
  await db.execAsync(`
    DELETE FROM user_deck
    WHERE word_id = ${wordId}
  `);
  db.closeSync();

  console.log(`Removed word with id ${wordId} from user deck`);
}