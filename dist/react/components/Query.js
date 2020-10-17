import { __rest } from "tslib";
import PropTypes from 'prop-types';
import { useQuery } from '../hooks/useQuery';
export function Query(props) {
    var children = props.children, query = props.query, options = __rest(props, ["children", "query"]);
    var result = useQuery(query, options);
    return children && result ? children(result) : null;
}
(function (Query) {
    Query.propTypes = {
        client: PropTypes.object,
        children: PropTypes.func.isRequired,
        fetchPolicy: PropTypes.string,
        notifyOnNetworkStatusChange: PropTypes.bool,
        onCompleted: PropTypes.func,
        onError: PropTypes.func,
        pollInterval: PropTypes.number,
        query: PropTypes.object.isRequired,
        variables: PropTypes.object,
        ssr: PropTypes.bool,
        partialRefetch: PropTypes.bool,
        returnPartialData: PropTypes.bool
    };
})(Query || (Query = {}));
//# sourceMappingURL=Query.js.map