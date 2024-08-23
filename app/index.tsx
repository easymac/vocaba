import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Deck } from '@/components/Deck';
import { HomeScreen } from '@/components/home-screen/HomeScreen';
import { useWordDeckNew } from '@/hooks/useWordDeck';

export default function Index() {
  const { count } = useWordDeckNew();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#d8dff3', gap: 12 }}>
      <Deck />
      <View style={styles.wordsButton}>
        <Link href="/words" style={styles.wordsLink}>
          <Text style={styles.wordsButtonText}>{count} words</Text>
        </Link>
      </View>
      <HomeScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wordsButton: {
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    margin: 'auto',
    borderRadius: 9999,
  },
  wordsLink: {
    padding: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  wordsButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: -1,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})