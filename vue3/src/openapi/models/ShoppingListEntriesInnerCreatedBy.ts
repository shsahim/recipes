/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ShoppingListEntriesInnerCreatedBy
 */
export interface ShoppingListEntriesInnerCreatedBy {
    /**
     * 
     * @type {number}
     * @memberof ShoppingListEntriesInnerCreatedBy
     */
    readonly id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof ShoppingListEntriesInnerCreatedBy
     */
    readonly username?: string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListEntriesInnerCreatedBy
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListEntriesInnerCreatedBy
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListEntriesInnerCreatedBy
     */
    readonly displayName?: string;
}

/**
 * Check if a given object implements the ShoppingListEntriesInnerCreatedBy interface.
 */
export function instanceOfShoppingListEntriesInnerCreatedBy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShoppingListEntriesInnerCreatedByFromJSON(json: any): ShoppingListEntriesInnerCreatedBy {
    return ShoppingListEntriesInnerCreatedByFromJSONTyped(json, false);
}

export function ShoppingListEntriesInnerCreatedByFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShoppingListEntriesInnerCreatedBy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
    };
}

export function ShoppingListEntriesInnerCreatedByToJSON(value?: ShoppingListEntriesInnerCreatedBy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}
