import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, useQuery, ApolloProvider } from '@apollo/client';
import { GET_ROOMS } from './queries/getRooms';
import apolloClient from './queries/apolloClient';


apolloClient.query({
  query: GET_ROOMS
})
.then(result => console.log(result))
.catch(error => console.log(error));


export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <Text>{JSON.stringify({})}</Text>
      </View>
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
