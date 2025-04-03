// Helper function to handle both arrays and objects
function getValues(collection) {
    if (Array.isArray(collection)) {
      return collection;
    } else {
      return Object.values(collection);
    }
  }
  
  // myEach - Loops through a collection and applies a callback to each item
  function myEach(collection, callback) {
    let values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection;
  }
  
  // myMap - Loops through and returns a new array with modified values
  function myMap(collection, callback) {
    let values = getValues(collection);
    let newArr = [];
    for (let i = 0; i < values.length; i++) {
      newArr.push(callback(values[i]));
    }
    return newArr;
  }
  
  // myReduce - Reduces the collection to a single value
  function myReduce(collection, callback, acc) {
    let values = getValues(collection);
    let startIndex = 0;
  
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  
    return acc;
  }
  
  
  function myFind(collection, predicate) {
    let values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
  }
  
 
  function myFilter(collection, predicate) {
    let values = getValues(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  
  
  function mySize(collection) {
    return getValues(collection).length;
  }
  
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
 
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
 
  function mySortBy(array, callback) {
    let newArr = [...array];
    return newArr.sort((a, b) => {
      return callback(a) > callback(b) ? 1 : -1;
    });
  }
  
  
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (shallow) {
          newArr.push(...array[i]);
        } else {
          myFlatten(array[i], shallow, newArr);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  function myKeys(object) {
    let keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
 
  function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  