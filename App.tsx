import React from "react";
import { NativeBaseProvider } from "native-base";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/lib/ApolloClient";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from '@react-navigation/native'
import Fonts from "./src/constants/Fonts";
import AppLoading from "expo-app-loading";
export default function App() {
  const [{ fontsLoaded }] = Fonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  };

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}
