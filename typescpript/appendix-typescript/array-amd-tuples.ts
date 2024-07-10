/* 1.number와 같이 자료형 뒤에 대활호를 써주는거 */
const numbers: number[] = [1, 2, 3, 4]; //숫자열배열

//Araay안에 <>제네릭 사용 Array<string>은 '배열 내에 있는 원소들의 타입은 문자열이다'
const stringArray: Array<string> = ["a", "b", "c", "d"]; //문자열원소

const oneToTen = [...numbers, ...stringArray];
console.log(oneToTen);

//객체의 배열 타입
const idols: { name: string; birth: number }[] = [
  { name: "minji", birth: 200 },
  { name: "minji!", birth: 201 },
  { name: "minji@", birth: 202 },
  { name: "minji#", birth: 203 },
  { name: "minji$", birth: 204 },
];
//배열의 원소가 객체인 타입
const gameConsoleArray: Array<{ name: string; launch: number }> = [
  { name: "플스5", launch: 2020 },
  { name: "플스!", launch: 2021 },
  { name: "플스@", launch: 2022 },
  { name: "플스#", launch: 2023 },
  { name: "플스$", launch: 2024 },
];

//튜플

// 튜플은 원소 개수만큼 타입 정의가 필요
const myTUple: [string, number] = ["eun", 111];

//튜플은 함수의 매개변수가 여러 개 일떄 유용
function printMyInfo(label: string, info: [string, number]): void {
  console.log(`1번째 ${label}`, ...info);
}
printMyInfo("튜플테스트", myTUple);

function fetchUser(): [string, number] {
  return ["se", 112];
}

const [name24, height24] = fetchUser();
console.log("2번째" + name24, height24);

type cup = {
  size: string;
};
type brand = {
  brandName: string;
};
type bradnCup = cup & brand;

let starbucksGrandeSizeCup: bradnCup = {
  brandName: "strarbucks",
  size: "greande",
};

console.log(starbucksGrandeSizeCup);

function echo(message: string): string {
  console.log("a" + message);
  return message;
}

const funcEcho = echo;
echo("Hello"); // 또는
funcEcho("Hello");
