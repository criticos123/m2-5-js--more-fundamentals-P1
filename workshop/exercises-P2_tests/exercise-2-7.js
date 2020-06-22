// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (arr[1] > 0 && typeof arr[0] === "string") {
    const newStr = arr[0];
    const goodStr = newStr.repeat(arr[1]);
    return goodStr;
  } else {
    return "";
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["la", 2]), "lala");
expect(repeat(["la", 3]), "lalala");
expect(repeat(["la", -1]), "");
expect(repeat([344, 3]), "");
expect(repeat(["la", 0]), "");
expect(repeat(["bla", 3]), "blablabla");
expect(repeat(["a", 4]), "aaaa");
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
