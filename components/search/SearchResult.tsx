import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { Word } from '@/types';
import { useWordInDeck } from '@/hooks/useWordInDeck';

export function SearchResult({ word }: { word: Word }) {
  const test = useWordInDeck(word);
  return (
    <Pressable onPress={() => {}} style={styles.wrapper}>
      <View style={styles.main}>
        <View style={styles.headingRow}>
          <Text style={styles.word}>{word.word}</Text>
          <Text style={styles.category}>{word.lexicalCategory}</Text>
        </View>
        {word.meanings[0] && word.meanings[0].definitions && (
          <Text style={styles.definition}>{word.meanings[0].definitions[0]}</Text>
        )}
        {test.inDeck ? (
          <Pressable onPress={test.removeWordFromUserDeck}>
            <Text>Remove from deck</Text>
          </Pressable>
        ) : (
          <Pressable onPress={test.addWordToUserDeck}>
            <Text>Add to deck</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    padding: 16,
  },
  main: {
  },
  word: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  category: {
    color: 'black',
    fontSize: 11,
    padding: 10,
    textTransform: 'uppercase',
  },
  definition: {
    color: 'black'
  },
  headingRow: {
    display: 'flex',
    flexDirection: 'row',
  }
})