import { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { SearchResultsList } from './SearchResultsList';
import { Brand } from '@/constants/Colors';

export function Search() {
  const inputRef = useRef<TextInput>(null);
  const [ text, setText ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
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
          <SearchResultsList search={text} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inner: {
    backgroundColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
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
    backgroundColor: Brand.kerrygold,
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
