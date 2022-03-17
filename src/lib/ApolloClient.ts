import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
export const localCache = new InMemoryCache();

const cache = new InMemoryCache()
export const client = new ApolloClient({
    uri: 'https://todoapp-techloset.herokuapp.com/graphql',
    cache: cache
    
});







