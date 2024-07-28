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
/**
 * 
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    [key: string]: object | any;
    /**
     * 
     * @type {string}
     * @memberof ProtobufAny
     */
    type?: string;
}

/**
 * Check if a given object implements the ProtobufAny interface.
 */
export function instanceOfProtobufAny(value: object): value is ProtobufAny {
    return true;
}

export function ProtobufAnyFromJSON(json: any): ProtobufAny {
    return ProtobufAnyFromJSONTyped(json, false);
}

export function ProtobufAnyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtobufAny {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': json['@type'] == null ? undefined : json['@type'],
    };
}

export function ProtobufAnyToJSON(value?: ProtobufAny | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        '@type': value['type'],
    };
}

