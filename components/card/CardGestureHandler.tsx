import { View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

interface CardGestureHandlerProps {
  children: React.ReactNode;
  handleGesture: (direction: string) => void;
}
export function CardGestureHandler(
  { children, handleGesture }: CardGestureHandlerProps
) {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue(0);

  const springConfig = {
    overshootClamping: true
  }

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize((event) => {
      if (event.translationX < -50) {
        offset.value = withSpring(-500, springConfig, () => {
          runOnJS(handleGesture)('left');
        });
      } else if (event.translationX > 50) {
        offset.value = withSpring(500, springConfig, () => {
          runOnJS(handleGesture)('right');
        });
      } else {
        offset.value = withSpring(0);
      }
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value },
        { scale: withTiming(pressed.value ? 1.1 : 1) }
      ]
    }
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[
        animatedStyles,
      ]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}