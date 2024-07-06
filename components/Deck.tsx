import { useState } from 'react';
import { View } from 'react-native';
import { Card } from '@/components/Card';
import DevWordBank from '@/constants/DevWordBank';

export function Deck() {
  const [words, setWords] = useState(DevWordBank.slice(0, 10));

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
    <View style={{ height: '100%', width: '100%', padding: '5%', backgroundColor: '#111' }}>
      {cards}
    </View>
  )
}
