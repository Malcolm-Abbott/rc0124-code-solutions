'use strict';
/* exported setValue */
/*
PSEUDOCODE
Define a function named setValue that accepts three parameters: object, ob data type object | dictionary, key, of
data type string, and value, of any data type.
Assign the value of the parameter value to the object at key.
*/
function setValue(object, key, value) {
  object[key] = value;
}
