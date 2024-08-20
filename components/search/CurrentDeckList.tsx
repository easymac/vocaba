import { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SearchResult } from './SearchResult';
import { useEachWordDeck } from '@/hooks/useWordDeck';

export function CurrentDeckList() {
  const { words, loadNext } = useEachWordDeck();

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
          keyExtractor={(item) => item.id}
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
