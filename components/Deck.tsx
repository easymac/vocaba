import { useState } from 'react';
import { View } from 'react-native';
import { Card } from '@/components/Card';
import DevWordBank from '@/constants/DevWordBank';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

export function Deck() {
  const [words, setWords] = useState(DevWordBank);

  const pressed = useSharedValue<boolean>(false);
  const topCardOffset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      topCardOffset.value = event.translationX;
    })
    .onFinalize(({ translationX }) => {
      if (translationX < -50) {
        // left swipe
        topCardOffset.value = withSpring(-500, undefined, () => {
          console.log('Left swipe')
          setWords((prevWords) => {
            const [top, ...rest] = prevWords;
            return [...rest, top];
          });
        });
      } else if (translationX > 50) {
        // right swipe
        topCardOffset.value = withSpring(500, undefined, () => {
          console.log('Right swipe')
          setWords((prevWords) => {
            const [top, ...rest] = prevWords;
            return [...rest, top];
          });
        
        });
      } else {
        topCardOffset.value = withSpring(0);
      }
      pressed.value = false;
    });

  
  const cards = words.map(
    (word, index) => {
      const swipeOffset = index ? null : topCardOffset;
      if (!index) return (
        <Card key={word.id} word={word} swipeOffset={swipeOffset} index={index} />
      )
      return (
        <Card key={word.id} word={word} swipeOffset={null} index={index} />
      )
    }
  ).reverse();


  return (
    <GestureDetector gesture={pan}>
      <View style={{ height: '100%', width: '100%', padding: '5%', backgroundColor: '#111' }}>
        {cards}
      </View>
    </GestureDetector>
  )
}