import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";
import { split } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { TOKEN } from '@env'

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = TOKEN; 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket("wss://chat.thewidlarzgroup.com/socket", {
  params: () => {
    if (TOKEN) {
      return { token: TOKEN};
    } else {
      return {};
    }
  }
});

// Wrap the Phoenix socket in an AbsintheSocket.
const absintheSocket = AbsintheSocket.create(phoenixSocket);

// Create an Apollo link from the AbsintheSocket instance.
const websocketLink = createAbsintheSocketLink(absintheSocket);

// If the query contains a subscription, send it through the
// websocket link. Otherwise, send it through the HTTP link.
const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
});