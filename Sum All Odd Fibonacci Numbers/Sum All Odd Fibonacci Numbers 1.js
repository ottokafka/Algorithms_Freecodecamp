/**
 * Created by auto2 on 12/7/2016.
 * Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a
 * Fibonacci number. The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and
 * each subsequent number is the sum of the previous two numbers. As an example, passing 4 to the
 * function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
 Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
 */

function sumFibs(num) {
    var lastNum = 0;
    var presentNum = 1;
    var result = 0;
    while (presentNum <= num) {
        if (presentNum % 2 !== 0) {
            result += presentNum;
        }
        var added = presentNum + lastNum;
        lastNum = presentNum;
        presentNum = added;
    }

    return result;
}
sumFibs(4);

/*My Code Explanation:

 Create a variable to keep record of the current and previous numbers along with the result that will be returned.
 Use a while loop to make sure we do not go over the number given as parameter.
 We use the modulo operand to check if the current number is odd or even. If even add it to the result.
 Complete the Fibonacci circle by rotating getting the next number and swapping values after.
 Return the result.*/