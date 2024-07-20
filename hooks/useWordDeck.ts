import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { useDatabaseChangeEvent } from "./useDatabaseChangeEvent";
import { parseDictionaryEntry } from '@/helpers/parseDictionaryEntry';

export function useWordDeck() {
  const db = useSQLiteContext();
  const change = useDatabaseChangeEvent();
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const query = db.getEachAsync(`
        SELECT words.*
        FROM words
        INNER JOIN user_deck ON words.id = user_deck.word_id
      `);
      let i = 0;
      const results: any[] = [];
      while (i < 10) {
        const row = await query.next();
        if (row.done) break;
        const parsedEntry = parseDictionaryEntry(row.value);
        results.push(parsedEntry);
        i++;
      }
      setWords(results);
    }
    fetchWords();
  }, [change])

  return words;
}