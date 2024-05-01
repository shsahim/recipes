/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
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
 * @interface PatchedViewLog
 */
export interface PatchedViewLog {
    /**
     * 
     * @type {number}
     * @memberof PatchedViewLog
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedViewLog
     */
    recipe?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedViewLog
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedViewLog
     */
    readonly createdAt?: Date;
}

/**
 * Check if a given object implements the PatchedViewLog interface.
 */
export function instanceOfPatchedViewLog(value: object): boolean {
    return true;
}

export function PatchedViewLogFromJSON(json: any): PatchedViewLog {
    return PatchedViewLogFromJSONTyped(json, false);
}

export function PatchedViewLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedViewLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'recipe': json['recipe'] == null ? undefined : json['recipe'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
    };
}

export function PatchedViewLogToJSON(value?: PatchedViewLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'recipe': value['recipe'],
    };
}
