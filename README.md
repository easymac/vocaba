# Vocaba

A lightspeed solution for remembering to use the new words you discover while reading.

## Phase 1:

The problem:
I often encounter a new word when reading, infer its meaning or look up its definition, and decide I really like this word and that I would like to incorporate it into my vocabulary. Then, tragedy: I forget the word before I remember to begin using it.

I would like an app that allows me to VERY, VERY QUICKLY store a word, automatically associate its definition, and let me parse through my words VERY, VERY QUICKLY to refresh my memory.

Vocabulary learning apps exist; some of them let you add your own words if you pay; none of the existing apps are actually designed for this purpose (learning your own words) and come with such feature and UI bloat that they’re not adequate for this purpose.

### What makes Vocaba GOOD:

- Zero friction, very fast, very good UI
- Very easy to add words, and no feature bloat
- Instantly start swiping through words
- Allows you to cover and “study” your list of words in less time than 2 seconds per word
- Magically ranks the words based on how new they are, whether you can remember their definition, (and whether you’ve used the word?)
- Trivial and NEVER a burden to manage a list of words, even a very long one, and trivial to manage the words while you’re swiping

### The concept:

Tinder but for vocabulary kinda. How it goes:

1. Open the app
2. A word from your list that is algorithmically determined to be relevant appears
3. You swipe:
    1. left, if you remember the definition of the word but haven’t used it
    2. right, if you remember having used the word
4. And the next word (algorithmically selected) is shown
5. You tap on/near the word for its definition, usage, pronunciation, what have you
6. Buttons (maybe in a menu) exist to Like and Dislike a word, which simply makes them appear more or less often

That’s it. Dead ass simple. It’s 99% bells and whistles (elaborate swiping controls).

#### Word ELO:

- Employ a system of [Spaced Repetition](https://en.wikipedia.org/wiki/Spaced_repetition)
- Increase a word’s score gradually over time to ensure it doesn’t remain buried in perpetuity
- A super lightweight neural network could be a good solution to this problem, but I can’t quantify “lightweight”

## Phase 2:

If Phase 1 execution is successful, and if Vocaba has yet unmet potential, we can consider this concept for Phase 2.

This could simply be a paid feature ($2.99?).

A word discovery / vocabulary building engine that doesn’t require you to enter your own words.

Words simply appear and you swipe on them. The premise will need to be tweaked by some small measure, as you would need to be able to quickly indicate that *you already know and use the word.*

This could exist in parallel to the own-words function, and also be used to add words to your own list

Need a better word than “list” to describe your collection of attempting-to-use vocabulary words.

## Expo:

The following portion of this document is the default readme from the Expo framework. Leaving it for whatever usefulness it has. I'm not 100% convinced this will be the solution for us yet.

Aside from speed, the only part of this app that is of any concern is the swipe controls. I know I can make them perfectly using [Framer Motion](https://www.framer.com/motion/) but I don't know how well that will play with React Native, or how it will compare to native components, and I've never used Expo before, or React Native, but this seems like an approach worthy of experimentation.

My first priority will be to experiment with the swipe feature. (Obviously, as Tinder has made this a universally understood interaction, many many people will have already figured this out. We'll play & test & stuff.)

---

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
