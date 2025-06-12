import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`🚀 API GraphQL prête à ${url}`);
})();