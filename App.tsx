import React from "react";
import { NativeBaseProvider, Box } from "native-base";
// import { ApolloProvider } from "@apollo/react-hooks";
// import { client } from "./src/lib/ApolloClient";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
     {/* <ApolloProvider client={client}> */}
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
     {/* </ApolloProvider> */}
    </NavigationContainer>
  );
}
