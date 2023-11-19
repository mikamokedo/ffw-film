export function random(len: number) {
  return Math.floor(Math.random() * (len + 1));
}

export function pickItem(arr: any[], quantity: number) {
  if (!arr || !Array.isArray(arr)) {
    return [];
  }
  if (arr.length <= quantity) {
    return arr;
  }
  const result: any[] = [];
  while (result.length < quantity) {
    const index = random(arr.length - 1);
    const item = arr[index];
    const findItem = result.find((f) => f.id === item.id);
    if (!findItem) {
      result.push(item);
    }
  }
  return result;
}
