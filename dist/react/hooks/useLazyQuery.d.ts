import { DocumentNode } from 'graphql';
import { LazyQueryHookOptions, QueryTuple } from '../types/types';
import { OperationVariables } from '../../core/types';
export declare function useLazyQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode, options?: LazyQueryHookOptions<TData, TVariables>): QueryTuple<TData, TVariables>;
//# sourceMappingURL=useLazyQuery.d.ts.map