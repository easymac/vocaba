import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { SearchResult } from './SearchResult';
import { useDictionary } from '@/hooks/useDictionary';

export function Search() {
  const inputRef = useRef<TextInput>(null);
  const [ text, setText ] = useState('');
  const dictionary = useDictionary();

  useEffect(() => {
    dictionary.loadNext(3);
  }, [text])

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search for a word..."
          onChangeText={(value) => {
            setText(value)
            dictionary.search(value)
          }}
          value={text}
          placeholderTextColor='black'
        />
        <Pressable
          style={styles.clearButton}
          onPress={() => inputRef.current?.clear()}
        >
          <Text style={styles.clearButtonText}>X</Text>
        </Pressable>
      </View>
      <View>
        {dictionary.result.map((result) => (
          <SearchResult key={result.id} word={result} />
        ))}
        <Pressable
          style={styles.loadMore}
          onPress={() => dictionary.loadNext(3)}
        >
          <Text>Load more...</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    padding: 16,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  result: {
    color: 'white',
  },
  clearButton: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 25,
    right: 30,
    borderRadius: 9999,
    aspectRatio: 1,
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: 'white',
  },
  loadMore: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 16,
    borderRadius: 10,
  }
});
