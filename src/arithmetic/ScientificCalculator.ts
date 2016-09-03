import {Calculator} from "./Calculator";
/**
 * A class that adds some functionality to the Calculator class
 */
export class ScientificCalculator extends Calculator {
    /**
     * Returns the first number raised to the power of the second number
     * @param a First number
     * @param b Second number
     */
    public exp(a: number, b: number): number {
        return Math.pow(a, b);
    }
}