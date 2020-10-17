import { __extends } from "tslib";
import { ApolloLink } from '../core/ApolloLink';
import { OperationBatcher } from './batching';
export { OperationBatcher } from './batching';
var BatchLink = (function (_super) {
    __extends(BatchLink, _super);
    function BatchLink(fetchParams) {
        var _this = _super.call(this) || this;
        var _a = fetchParams || {}, _b = _a.batchInterval, batchInterval = _b === void 0 ? 10 : _b, _c = _a.batchMax, batchMax = _c === void 0 ? 0 : _c, _d = _a.batchHandler, batchHandler = _d === void 0 ? function () { return null; } : _d, _e = _a.batchKey, batchKey = _e === void 0 ? function () { return ''; } : _e;
        _this.batcher = new OperationBatcher({
            batchInterval: batchInterval,
            batchMax: batchMax,
            batchHandler: batchHandler,
            batchKey: batchKey,
        });
        if (fetchParams.batchHandler.length <= 1) {
            _this.request = function (operation) { return _this.batcher.enqueueRequest({ operation: operation }); };
        }
        return _this;
    }
    BatchLink.prototype.request = function (operation, forward) {
        return this.batcher.enqueueRequest({
            operation: operation,
            forward: forward,
        });
    };
    return BatchLink;
}(ApolloLink));
export { BatchLink };
//# sourceMappingURL=batchLink.js.map