import { increment, decrement } from "../main.actions";

describe("Main reducer tests", () => {
  it("[increment] should create an action", () => {
    expect(increment()).toEqual({
      type: increment.type,
    });
  });

  it("[decrement] should create an action", () => {
    expect(decrement()).toEqual({
      type: decrement.type,
    });
  });
});
