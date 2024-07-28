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


/**
 * 
 * @export
 */
export const GoLoadDownloadType = {
    Unspecified: 'DOWNLOAD_TYPE_UNSPECIFIED',
    Http: 'DOWNLOAD_TYPE_HTTP'
} as const;
export type GoLoadDownloadType = typeof GoLoadDownloadType[keyof typeof GoLoadDownloadType];


export function instanceOfGoLoadDownloadType(value: any): boolean {
    for (const key in GoLoadDownloadType) {
        if (Object.prototype.hasOwnProperty.call(GoLoadDownloadType, key)) {
            if (GoLoadDownloadType[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GoLoadDownloadTypeFromJSON(json: any): GoLoadDownloadType {
    return GoLoadDownloadTypeFromJSONTyped(json, false);
}

export function GoLoadDownloadTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoLoadDownloadType {
    return json as GoLoadDownloadType;
}

export function GoLoadDownloadTypeToJSON(value?: GoLoadDownloadType | null): any {
    return value as any;
}

