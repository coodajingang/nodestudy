import {sum} from "../app";

test('basic', () => {
    console.log("test basic")
    expect(sum(123,10)).toBe(133);
})