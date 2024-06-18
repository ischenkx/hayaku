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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KantokuApi);
  }
}(this, function(expect, KantokuApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KantokuApi.InfoCursor();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InfoCursor', function() {
    it('should create an instance of InfoCursor', function() {
      // uncomment below and update the code to test InfoCursor
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be.a(KantokuApi.InfoCursor);
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be();
    });

    it('should have the property masks (base name: "masks")', function() {
      // uncomment below and update the code to test the property masks
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be();
    });

    it('should have the property distinct (base name: "distinct")', function() {
      // uncomment below and update the code to test the property distinct
      //var instance = new KantokuApi.InfoCursor();
      //expect(instance).to.be();
    });

  });

}));
