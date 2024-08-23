import { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SearchResult } from './SearchResult';
import { useWordDeckNew } from '@/hooks/useWordDeck';

export function CurrentDeckList() {
  const { words, loadNext } = useWordDeckNew();

  useEffect(() => {
    loadNext(10);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.clip}>
        <FlatList
          data={words}
          extraData={words}
          renderItem={({ item }) => <SearchResult word={item} />}
          onEndReached={() => loadNext(10)}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  clip: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 3,
  }
})
