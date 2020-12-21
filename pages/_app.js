import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useMemo, useState } from 'react';
import '../styles/globals.css'

function createApolloClient() {
  const client = new ApolloClient({
    uri: "https://graph.l192.com",
    cache: new InMemoryCache()
  });

  return client;
}

function MyApp({ Component, pageProps }) {
  const client = useMemo(() => createApolloClient(), []);
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
