import { Text } from 'react-native';
import AppNavigator from '@components/routes';
import { Suspense, useEffect } from 'react';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Suspense
              fallback={
                <Text style={{ color: 'black', paddingTop: insets?.top }}>
                  Loading...
                </Text>
              }
            >
              <AppNavigator />
            </Suspense>
          )
        }}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaView>
    </GestureHandlerRootView>

  );
}

