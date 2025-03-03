/* tslint:disable */
/* eslint-disable */
/**
 * api/go_load.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GoLoadStreamResponse } from './GoLoadStreamResponse';
import {
    GoLoadStreamResponseFromJSON,
    GoLoadStreamResponseFromJSONTyped,
    GoLoadStreamResponseToJSON,
} from './GoLoadStreamResponse';
import type { RpcStatus } from './RpcStatus';
import {
    RpcStatusFromJSON,
    RpcStatusFromJSONTyped,
    RpcStatusToJSON,
} from './RpcStatus';

/**
 * 
 * @export
 * @interface StreamResultOfGoLoadStreamResponse
 */
export interface StreamResultOfGoLoadStreamResponse {
    /**
     * 
     * @type {GoLoadStreamResponse}
     * @memberof StreamResultOfGoLoadStreamResponse
     */
    result?: GoLoadStreamResponse;
    /**
     * 
     * @type {RpcStatus}
     * @memberof StreamResultOfGoLoadStreamResponse
     */
    error?: RpcStatus;
}

/**
 * Check if a given object implements the StreamResultOfGoLoadStreamResponse interface.
 */
export function instanceOfStreamResultOfGoLoadStreamResponse(value: object): value is StreamResultOfGoLoadStreamResponse {
    return true;
}

export function StreamResultOfGoLoadStreamResponseFromJSON(json: any): StreamResultOfGoLoadStreamResponse {
    return StreamResultOfGoLoadStreamResponseFromJSONTyped(json, false);
}

export function StreamResultOfGoLoadStreamResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfGoLoadStreamResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : GoLoadStreamResponseFromJSON(json['result']),
        'error': json['error'] == null ? undefined : RpcStatusFromJSON(json['error']),
    };
}

export function StreamResultOfGoLoadStreamResponseToJSON(value?: StreamResultOfGoLoadStreamResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': GoLoadStreamResponseToJSON(value['result']),
        'error': RpcStatusToJSON(value['error']),
    };
}

