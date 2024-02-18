import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, currency: string): string {
    // Logic to convert currency to VND
    if (currency === 'USD') {
      return (value * 23000).toFixed(0) + ' VND'; // Assuming 1 USD = 23000 VND
    } else if (currency === 'EUR') {
      return (value * 27000).toFixed(0) + ' VND'; // Assuming 1 EUR = 27000 VND
    }
    // Add more conditions for other currencies if needed
    return value.toString() + ' ' + currency;
  }
}
