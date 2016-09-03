import {Arithmetic} from "../src/index";
import * as Chai from "chai";
/**
 * Test for Calculator
 */
describe("Calculator", () => {
    it("#add should add two numbers", async(done) => {
        const calculator = new Arithmetic.Calculator();
        const answer = calculator.add(1, 3);
        Chai.expect(answer).to.be.equal(4);
        done();
    });
});