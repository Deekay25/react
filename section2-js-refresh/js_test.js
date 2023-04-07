function transformToObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}
console.log(transformToObjects([1,2,3]))