import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from './currency-converter.pipe'; // Đường dẫn đến pipe của bạn

@NgModule({
  declarations: [
    CurrencyConverterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyConverterPipe
  ]
})
export class CurrencyConverterModule { }
