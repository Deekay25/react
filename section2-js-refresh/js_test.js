// function transformToObjects(numberArray) {
//   return numberArray.map((number) => {
//     return { val: number };
//   });
// }


function transformToObjects(numberArray) {
  // Todo: Add your logic
  return numberArray.map((n) => {
    return { val: n };
  });
  // should return an array of objects
}
console.log(transformToObjects([1,2,3]))