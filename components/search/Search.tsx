import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

export function Search() {
  const inputRef = useRef<TextInput>(null);
  const db = useSQLiteContext();
  const [text, setText] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      const result = db.getEachAsync('SELECT * FROM words WHERE word LIKE ?', [`${text}%`]);
      let i = 0;
      const results = [];
      while (i < 10) {
        const row = await result.next();
        if (row.done) break;
        results.push(row.value);
        i++;
      }
      setResults(results);
    }

    handleSearch();
  }, [text])

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search for a word..."
          onChangeText={setText}
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
        {results.map((result) => (
          <View key={result.id}>
            <Text style={styles.result}>{result.word}</Text>
          </View>
        ))}
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
  }
})