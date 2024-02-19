import { CurrencyConverterPipe } from "./currency-converter.pipe";

CurrencyConverterPipe

describe('CurrencyConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
