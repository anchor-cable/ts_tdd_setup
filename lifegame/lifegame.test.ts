import { toLifeGameList, countSurroundingALive } from "./lifegame";

test("ライフゲームフォーマットに沿った標準入力を受け取って配列化する", () => {
  expect(toLifeGameList("*-*\n***\n---")).toStrictEqual([
    ["*", "-", "*"],

    ["*", "*", "*"],

    ["-", "-", "-"],
  ]);
});

test("セルを渡すと周りに生きているセルが幾つあるのか数え上げる", () => {
  const x = 0; // 原点(左上)
  const y = 0; // 原点(左上)
  const world = [
    ["*", "-", "*"],

    ["*", "*", "*"],

    ["-", "-", "-"],
  ];
  expect(countSurroundingALive(x, y, world)).toBe(2);
});
