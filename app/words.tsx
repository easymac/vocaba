import { View } from 'react-native';
import { Search } from '@/components/search/Search';
import { Brand } from '@/constants/Colors';

export default function SearchView() {
  return (
    <View style={{ flex: 1, backgroundColor: Brand.kerrygold }}>
      <Search />
    </View>
  )
}