import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Brand } from '@/constants/Colors';
import { Logo } from './Logo';

export function HomeScreen() {
  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = Math.min(event.translationX, 0);
    })
    .onFinalize((event) => {
      if (event.translationX > -50) {
        offset.value = withSpring(0);
      } else {
        offset.value = withSpring(-500);
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value }
    ]
  }));

  return (
    <Animated.View style={[
      styles.wrapper,
      animatedStyles,
    ]}>
      <GestureDetector gesture={pan}>
        <SafeAreaView style={styles.container}>
          <Logo />
        </SafeAreaView>
      </GestureDetector>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Brand.kerrygold,
  },
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
})