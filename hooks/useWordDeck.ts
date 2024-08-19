import { useEffect, useState } from 'react';
import { useDatabaseChangeEvent } from './useDatabaseChangeEvent';
import { getAllWordsInDeck } from '@/dbUtils/db';

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