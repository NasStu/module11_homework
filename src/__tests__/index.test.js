import { multiply, countDown, revertString, getMonth, repeatWord } from "../index.js";

describe("test multiply", () => {
  it("multiply 1 * 0 to equal 0", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("multiply 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});


describe("countDown", () => {
  const number = 4;
  const correctAnswer = '4321';
  it("Should be correctly if the sequence of numbers is in reverse order", () => {
    expect(countDown(number)).toBe(correctAnswer);
  })
})

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("work")).toBe("krow"));
});

describe("Test for getMonth function", () => {
  it("Should be correctly if the number of month from 1 to 12 and invalid number", () => {
    expect(getMonth(11)).toBe('ноябрь');
    expect(getMonth('Не число')).toBe('Ошибка. Введено не число!');
    expect(getMonth(15)).toBe('Число не попадает в диапазон');
  })
})

describe("Test for repeatWord function", () => {
  const word = 'Lesson';
  const correctAnswer = 'Lesson1, Lesson2, Lesson3, Lesson4';
  const count = 4;
  it("it is correct if the required quantity of the output", () => {
    expect(repeatWord(word, count)).toBe(correctAnswer);
  })
})
