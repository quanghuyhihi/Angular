import { Component, Input } from '@angular/core';
import { CurrencyConverterPipe } from '../../pipes/currency-converter.pipe';
import { CurrencyConverterModule } from '../../pipes/currency-converter.module';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyConverterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productChild: any;
}
