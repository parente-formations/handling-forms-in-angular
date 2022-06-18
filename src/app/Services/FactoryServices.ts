import { Injectable, Type } from "@angular/core";

export abstract class MyCalculatorBase {
  abstract calculate(first: number, second: number): number;
}

@Injectable({
  providedIn: "root",
})
export class MyFirstCalculator extends MyCalculatorBase {
  calculate(first: number, second: number): number {
    return first + second;
  }
}

@Injectable({
  providedIn: "root",
})
export class MySecondCalculator extends MyCalculatorBase {
  calculate(first: number, second: number): number {
    return first + second - 10;
  }
}

export const calculatorList: Map<string, Type<MyCalculatorBase>> = new Map<
  string,
  Type<MyCalculatorBase>
>();
calculatorList.set("MyFirstCalculator", MyFirstCalculator);
calculatorList.set("MySecondCalculator", MySecondCalculator);
