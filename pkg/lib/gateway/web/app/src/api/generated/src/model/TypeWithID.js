/**
 * Kantoku API
 * Create and execute distributed workflows
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Type from './Type';

/**
 * The TypeWithID model module.
 * @module model/TypeWithID
 * @version 1.0.0
 */
class TypeWithID {
    /**
     * Constructs a new <code>TypeWithID</code>.
     * @alias module:model/TypeWithID
     * @param id {String} 
     * @param type {module:model/Type} 
     */
    constructor(id, type) { 
        
        TypeWithID.initialize(this, id, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type) { 
        obj['id'] = id;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>TypeWithID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TypeWithID} obj Optional instance to populate.
     * @return {module:model/TypeWithID} The populated <code>TypeWithID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TypeWithID();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = Type.constructFromObject(data['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TypeWithID.prototype['id'] = undefined;

/**
 * @member {module:model/Type} type
 */
TypeWithID.prototype['type'] = undefined;






export default TypeWithID;

