import { View, StyleSheet, FlatList } from 'react-native';
import { SearchResult } from './SearchResult';
import { useDictionary } from '@/hooks/useDictionary';
import { useEffect } from 'react';

interface SearchResultsListProps {
  search: string;
}
export function SearchResultsList({ search }: SearchResultsListProps) {
  const dictionary = useDictionary();

  useEffect(() => {
    dictionary.search(search);
    dictionary.loadNext(10);
  }, [search]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dictionary.result}
        extraData={dictionary.result}
        renderItem={({ item }) => <SearchResult word={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => dictionary.loadNext(10)}
        onEndReachedThreshold={0.1}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 3,
  }
})
