/**
 * A class that implements a simple Calculator
 */
export class Calculator {
    /**
     * Adds the provided numbers and returns the result
     * @param a First number
     * @param b Second number
     */
    public add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Subtracts second number from first number and returns the result
     * @param a First number
     * @param b Second number
     */
    public subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Multiplies the provided numbers and returns the result
     * @param a First number
     * @param b Second number
     */
    public multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * Divides the first number by the second number and returns the result
     * @param a First number
     * @param b Second number
     */
    public divide(a: number, b: number): number {
        return a / b;
    }
}