/// <reference types="react" />
import PropTypes from 'prop-types';
import { OperationVariables } from '../../core/types';
import { SubscriptionComponentOptions } from './types';
export declare function Subscription<TData = any, TVariables = OperationVariables>(props: SubscriptionComponentOptions<TData, TVariables>): JSX.Element | null;
export declare namespace Subscription {
    const propTypes: {
        subscription: PropTypes.Validator<object>;
        variables: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<(...args: any[]) => any>;
        onSubscriptionData: PropTypes.Requireable<(...args: any[]) => any>;
        onSubscriptionComplete: PropTypes.Requireable<(...args: any[]) => any>;
        shouldResubscribe: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
    };
}
//# sourceMappingURL=Subscription.d.ts.map