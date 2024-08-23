import sqlite from '@/db';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDatabaseChangeEvent } from './useDatabaseChangeEvent';
import { getAllWordsInDeck, getCountOfWordsInDeck, getPagedWordsInDeck } from '@/dbUtils/db';
import type { Word } from '@/types';

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

export function useWordDeckNew() {
  const change = useDatabaseChangeEvent();
  const [count, setCount] = useState<number | null>(null);
  const [words, setWords] = useState<Word[]>([]);
  const lastKey = useRef<string | null>(null);

  useEffect(() => {
    const getCount = async () => {
      const result = await getCountOfWordsInDeck();
      setCount(result);
    }
    getCount();
  }, [change]);

  const loadNext = async (count: number) => {
    const result = await getPagedWordsInDeck(lastKey.current, count);
    if (result.length > 0) {
      lastKey.current = result[result.length - 1].word;
    }
    setWords((prev) => [...prev, ...result]);
  }

  return {
    words,
    loadNext,
    count
  }
}
