import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ExchangeRateData {
  conversion_rate: { [currency: string]: number };
}

@Component({
    selector: 'app-currency-conventer',
    templateUrl: './currency-conventer.component.html',
    styleUrls: ['./currency-conventer.component.scss'],
    standalone: true,
    imports: [FormsModule, NgFor],
})
export class CurrencyConventerComponent {
  baseUrl = `https://v6.exchangerate-api.com/v6/af3b6d4b4e1dfe63e5042906`;

  selectedCurrency1: string = 'USD';
  amount1: number = 1;
  selectedCurrency2: string = 'EUR';
  amount2: number = 0;
  currencies: string[] = [];
  mainCurrencies: string[] = ['USD', 'EUR', 'GBP', 'GEL', 'CAD'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${this.baseUrl}/latest/USD`).subscribe(() => {
      this.currencies = this.mainCurrencies;
    });

    this.updateCurrency2();
  }

  updateCurrency2() {
    this.http
      .get<ExchangeRateData>(
        `${this.baseUrl}/pair/${this.selectedCurrency1}/${this.selectedCurrency2}`
      )
      .pipe(
        map((data: any) => {
          return this.amount1 * data.conversion_rate;
        })
      )
      .subscribe((result: number) => {
        this.amount2 = result;
      });
  }
}
