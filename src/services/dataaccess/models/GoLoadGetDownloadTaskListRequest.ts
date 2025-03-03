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
 * @interface GoLoadGetDownloadTaskListRequest
 */
export interface GoLoadGetDownloadTaskListRequest {
    /**
     * 
     * @type {string}
     * @memberof GoLoadGetDownloadTaskListRequest
     */
    limit?: string;
    /**
     * 
     * @type {string}
     * @memberof GoLoadGetDownloadTaskListRequest
     */
    offset?: string;
}

/**
 * Check if a given object implements the GoLoadGetDownloadTaskListRequest interface.
 */
export function instanceOfGoLoadGetDownloadTaskListRequest(value: object): value is GoLoadGetDownloadTaskListRequest {
    return true;
}

export function GoLoadGetDownloadTaskListRequestFromJSON(json: any): GoLoadGetDownloadTaskListRequest {
    return GoLoadGetDownloadTaskListRequestFromJSONTyped(json, false);
}

export function GoLoadGetDownloadTaskListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoLoadGetDownloadTaskListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
    };
}

export function GoLoadGetDownloadTaskListRequestToJSON(value?: GoLoadGetDownloadTaskListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'limit': value['limit'],
        'offset': value['offset'],
    };
}

