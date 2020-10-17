/// <reference types="zen-observable" />
import { ApolloLink } from '../core/ApolloLink';
import { Operation, FetchResult } from '../core/types';
import { Observable } from '../../utilities/observables/Observable';
import { SubscriptionClient, ClientOptions } from 'subscriptions-transport-ws';
export declare namespace WebSocketLink {
    interface Configuration {
        uri: string;
        options?: ClientOptions;
        webSocketImpl?: any;
    }
}
export import WebSocketParams = WebSocketLink.Configuration;
export declare class WebSocketLink extends ApolloLink {
    private subscriptionClient;
    constructor(paramsOrClient: WebSocketLink.Configuration | SubscriptionClient);
    request(operation: Operation): Observable<FetchResult> | null;
}
//# sourceMappingURL=webSocketLink.d.ts.map