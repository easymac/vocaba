import type { Word, Meaning } from '@/types';

/**
 * Converts the dictionary database output into a more usable format
 * (including parsing the serialized meanings field)
 */
export type DictionaryEntry = {
  id: number;
  ipa: string | null;
  lexical_category: string;
  meanings: string;
  word: string;
  in_deck: boolean;
}
export function parseDictionaryEntry(entry: DictionaryEntry): Word {
  return {
    word: entry.word,
    lexicalCategory: entry.lexical_category,
    ipa: entry.ipa,
    meanings: parseMeanings(entry.meanings),
    id: entry.id,
    isInDeck: entry.in_deck,
  }
}

function parseMeanings(meanings: string): Meaning[] {
  const parsedMeanings = JSON.parse(meanings);
  return JSON.parse(meanings);
}