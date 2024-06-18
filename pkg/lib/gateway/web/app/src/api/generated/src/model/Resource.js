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

/**
 * The Resource model module.
 * @module model/Resource
 * @version 1.0.0
 */
class Resource {
    /**
     * Constructs a new <code>Resource</code>.
     * @alias module:model/Resource
     * @param id {String} 
     * @param status {String} 
     * @param value {String} 
     */
    constructor(id, status, value) { 
        
        Resource.initialize(this, id, status, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, status, value) { 
        obj['id'] = id;
        obj['status'] = status;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Resource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Resource} obj Optional instance to populate.
     * @return {module:model/Resource} The populated <code>Resource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Resource();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Resource.prototype['id'] = undefined;

/**
 * @member {String} status
 */
Resource.prototype['status'] = undefined;

/**
 * @member {String} value
 */
Resource.prototype['value'] = undefined;






export default Resource;

