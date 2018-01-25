import { Injectable } from '@angular/core';

@Injectable()
export class CellServicesService {
  symbol: string = 'X';
  constructor() { }

getSymbol(){
	return this.symbol;
};

changeSymbol(){
	this.symbol === 'X' ? this.symbol = 'O' : this.symbol = 'X';
};
}
