import { FieldNode } from 'graphql';
import { Reference, StoreObject, StoreValue, isReference } from '../../../core';
export declare type SafeReadonly<T> = T extends object ? Readonly<T> : T;
export declare class MissingFieldError {
    readonly message: string;
    readonly path: (string | number)[];
    readonly query: import('graphql').DocumentNode;
    readonly variables?: Record<string, any> | undefined;
    constructor(message: string, path: (string | number)[], query: import('graphql').DocumentNode, variables?: Record<string, any> | undefined);
}
export interface FieldSpecifier {
    typename?: string;
    fieldName: string;
    field?: FieldNode;
    args?: Record<string, any>;
    variables?: Record<string, any>;
}
export interface ReadFieldOptions extends FieldSpecifier {
    from?: StoreObject | Reference;
}
export interface ReadFieldFunction {
    <V = StoreValue>(options: ReadFieldOptions): SafeReadonly<V> | undefined;
    <V = StoreValue>(fieldName: string, from?: StoreObject | Reference): SafeReadonly<V> | undefined;
}
export declare type ToReferenceFunction = (objOrIdOrRef: StoreObject | string | Reference, mergeIntoStore?: boolean) => Reference | undefined;
export declare type CanReadFunction = (value: StoreValue) => boolean;
export declare type Modifier<T> = (value: T, details: {
    DELETE: any;
    fieldName: string;
    storeFieldName: string;
    readField: ReadFieldFunction;
    canRead: CanReadFunction;
    isReference: typeof isReference;
    toReference: ToReferenceFunction;
}) => T;
export declare type Modifiers = {
    [fieldName: string]: Modifier<any>;
};
//# sourceMappingURL=common.d.ts.map