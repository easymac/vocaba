import { View, Text, Pressable, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import type { Word } from '@/types';
import { useWordInDeck } from '@/hooks/useWordInDeck';

export function SearchResult({ word }: { word: Word }) {
  const deck = useWordInDeck(word);

  const handleCheckboxPress = (isChecked: boolean) => {
    if (isChecked) {
      deck.addWordToUserDeck();
    } else {
      deck.removeWordFromUserDeck();
    }
  }
  return (
    <Pressable onPress={() => {}} style={styles.wrapper}>
      <View style={styles.main}>
        <Text style={styles.word}>{word.word}</Text>
        <Text style={styles.category}>{word.lexicalCategory}</Text>
        {word.meanings[0] && word.meanings[0].definitions && (
          <Text style={styles.definition}>{word.meanings[0].definitions[0]}</Text>
        )}
      </View>
      
      <View style={styles.checkmark}>
        <BouncyCheckbox
          isChecked={deck.inDeck}
          onPress={handleCheckboxPress}
          fillColor="black"
          iconStyle={{ borderColor: 'black' }}
          innerIconStyle={{ borderWidth: 2 }}
        />
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
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    flex: 1,
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
    paddingTop: 5,
    paddingBottom: 10,
    textTransform: 'uppercase',
  },
  definition: {
    color: 'black'
  },
  checkmark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  }
})