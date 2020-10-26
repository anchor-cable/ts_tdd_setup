import { Greeter } from './lifegame';

test('test', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Taro');
});