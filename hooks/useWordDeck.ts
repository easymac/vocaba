import sqlite from '@/db';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDatabaseChangeEvent } from './useDatabaseChangeEvent';
import { getAllWordsInDeck, getEachWordInDeck } from '@/dbUtils/db';

export function useWordDeck() {
  const change = useDatabaseChangeEvent();
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const result = await getAllWordsInDeck();
      setWords(result);
    }
    fetchWords();
  }, [change])

  return words;
}

export function useEachWordDeck() {
  const queryRef = useRef<AsyncIterableIterator<any>>();
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    const doQuery = async () => {
      const db = await sqlite;
      queryRef.current = db.getEachAsync(`
        SELECT words.*
        FROM words
        INNER JOIN user_deck ON words.id = user_deck.word_id
      `);
    }
    doQuery();
  }, [])

  const loadNext = useCallback(async (count: number) => {
    await sqlite;
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!queryRef.current) return;

    const results: any[] = [];
    let i = 0;
    while (i < count) {
      const row = await queryRef.current.next();
      if (row.done) break;
      results.push(row.value);
      i++;
    }

    setWords((prev) => [...prev, ...results]);
  }, []);

  return {
    words,
    loadNext
  }
}
