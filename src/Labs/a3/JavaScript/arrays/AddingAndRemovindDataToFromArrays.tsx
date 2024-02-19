let numberArray12 = [1, 2, 3, 4, 5];
let stringArray12 = ['string1', 'string2'];
numberArray12.push(6);         // adding new items
stringArray12.push('string3');
numberArray12.splice(2, 1);    // remove 1 item starting at 2
stringArray12.splice(1, 1);
export {numberArray12, stringArray12};