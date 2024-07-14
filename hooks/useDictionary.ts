import { useEffect, useState, useRef } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

export function useDictionary() {
  const db = useSQLiteContext();
  const [words, setWords] = useState<any[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const handleSearch = async () => {
      // TODO: SANITIZE QUERY!!!!!!!!!
      // VERY VERY VERY IMPORTANT!!!!!
      const result = db.getEachAsync('SELECT * FROM words WHERE word LIKE ?', [`${query}%`]);
      let i = 0;
      const results = [];
      while (i < 10) {
        const row = await result.next();
        if (row.done) break;
        results.push(row.value);
        i++;
      }
      setWords(results);
    }

    handleSearch();
  }, [query])

  return {
    words,
    setQuery
  }
}