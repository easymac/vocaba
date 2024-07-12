import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Deck } from '@/components/Deck';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Deck />
      <Link href="/words" style={styles.wordsButton}>
        <Pressable>
          <Text>Words</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  wordsButton: {
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})