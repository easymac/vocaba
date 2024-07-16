import { useState } from 'react';
import * as db from '@/dbUtils/db';
import type { Word } from '@/types';

export function useWordInDeck(word: Word) {
  const [inDeck, setInDeck] = useState(word.isInDeck);
  
  if (inDeck) {
    console.log(word);
  }

  const addWordToUserDeck = async () => {
    await db.addWordToUserDeck(word.id);
    setInDeck(true);
  }

  const removeWordFromUserDeck = async () => {
    await db.removeWordFromUserDeck(word.id);
    setInDeck(false);
  }

  return {
    inDeck,
    addWordToUserDeck,
    removeWordFromUserDeck
  }
}