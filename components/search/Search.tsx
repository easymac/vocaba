import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

export function Search() {
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
      <TextInput
        style={styles.input}
        placeholder="Search for a word..."
        onChangeText={setText}
        value={text}
      />
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
    paddingTop: 100,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    color: 'white',
  },
  result: {
    color: 'white',
  }
})