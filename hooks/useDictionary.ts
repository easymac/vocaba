import { useEffect, useState, useRef } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { parseDictionaryEntry } from '@/helpers/parseDictionaryEntry';

export function useDictionary() {
  const dbQuery = useRef<AsyncIterableIterator<any>>();
  const emptyResults = useRef<boolean>(false);
  const db = useSQLiteContext();
  const [result, setResult] = useState<any[]>([]);
  const [searchTerm, search] = useState<string>('');


  useEffect(() => {
    // TODO: SANITIZE QUERY!!!!!!!!!
    // VERY VERY VERY IMPORTANT!!!!!
    dbQuery.current = db.getEachAsync(
      `
      SELECT *
      FROM words
      WHERE word LIKE ?
      ORDER BY word;
      `,
      [`${searchTerm}%`]
    );
    emptyResults.current = true;
  }, [searchTerm])

  const loadNext = async (count: number) => {
    if (!dbQuery.current) return;
    const results: any = [];
    let i = 0;
    while (i < count) {
      const row = await dbQuery.current.next();
      if (row.done) break;
      const parsedEntry = parseDictionaryEntry(row.value);
      results.push(parsedEntry);
      i++;
    }
    setResult((prev) => {
      if (emptyResults.current) {
        emptyResults.current = false;
        return [...results]
      } else {
        return [...prev, ...results]
      }
    });
  }

  return {
    result,
    search,
    loadNext,
  }
}