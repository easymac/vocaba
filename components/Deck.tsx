import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Card } from '@/components/Card';
import { useWordDeck } from '@/hooks/useWordDeck';

export function Deck() {
  const allWords = useWordDeck();
  const [words, setWords] = useState(allWords);

  useEffect(() => {
    setWords(allWords);
  }, [allWords])

  const handleGesture = (direction: string) => {
    setWords(words.slice(1));
  }

  const cards = words.map((word, index) => (
    <Card
      key={word.id}
      word={word}
      handleGesture={handleGesture}
      index={index}
    />
  )).reverse();

  return (
    <View style={{ flex: 1, padding: '5%', backgroundColor: '#111' }}>
      {cards}
    </View>
  )
}
