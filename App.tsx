import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, useQuery, ApolloProvider } from '@apollo/client';
import { GET_ROOMS } from './queries/getRooms';
import apolloClient from './queries/apolloClient';
import HomeStack from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './routes/HomeStack';
import LoginStackNavigator from './routes/LoginStack';

apolloClient.query({
  query: GET_ROOMS
})
.then(result => console.log(result))
.catch(error => console.log(error));


export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(true);

  if(isLoading) return(
    <View>
      <Text>Loading</Text>
    </View>
  )


  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        {token
          ? <HomeStackNavigator />
          : <LoginStackNavigator /> 
        }
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
