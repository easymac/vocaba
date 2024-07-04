import { View } from 'react-native';
import { Card } from '@/components/Card';

export function Deck() {
  const words = [
    'Hello', 'World', 'Fortnite', 'egirl', 'Gestalt'
  ]
  const cards = words.map(word => <Card key={word} word={word} />)
  return (
    <View style={{ height: '100%', width: '100%', padding: '5%', backgroundColor: '#111' }}>
      {cards}
    </View>
  )
}