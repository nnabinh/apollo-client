import PropTypes from 'prop-types';
import { useSubscription } from '../hooks/useSubscription';
export function Subscription(props) {
    var result = useSubscription(props.subscription, props);
    return props.children && result ? props.children(result) : null;
}
(function (Subscription) {
    Subscription.propTypes = {
        subscription: PropTypes.object.isRequired,
        variables: PropTypes.object,
        children: PropTypes.func,
        onSubscriptionData: PropTypes.func,
        onSubscriptionComplete: PropTypes.func,
        shouldResubscribe: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    };
})(Subscription || (Subscription = {}));
//# sourceMappingURL=Subscription.js.map