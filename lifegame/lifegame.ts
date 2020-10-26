export function toLifeGameList(input: string): string[][] {
  return input.split("\n").map((line) => line.split(""));
}

export function countSurroundingALive(
  x: number,
  y: number,
  world: string[][]
): number {
  let count = 0;

  // x, yからみて、'*'どうかを調べるマスの相対的位置
  const move = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  move.forEach(([dx, dy]) => {
    // nx, ny ... 見ているマスの座標
    const nx = x + dx;
    const ny = y + dy;

    // worldからはみ出していない
    if (0 <= nx && nx <= 2 && 0 <= ny && ny <= 2) {
      // かつ、'*'である
      if (world[ny][nx] === "*") {
        count++;
      }
    }
  });

  return count;
}
