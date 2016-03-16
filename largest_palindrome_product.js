/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  var product = 0;

if (digits === 2) {
  factor_0 = 99;
  factor_1 = 99;

  product = factor_0 * factor_1;
  palindromeNumber = product.toString().split('').reverse();
  palindromeNumber = Number(palindromeNumber.join(''));

  while (product !== palindromeNumber){
    factor_0 -= 1;
    product = factor_0 * factor_1;
    palindromeNumber = product.toString().split('').reverse();
    palindromeNumber = Number(palindromeNumber.join(''));   
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

} 

else {
  var reverse;
    for (var i = 900; i < 1000; i++) {
      for (var k = i; k < 1000; k++) {
        product = k * i;
        reverse = product.toString().split('').reverse();
        reverse = Number(reverse.join(''));

        if (product === reverse && product > palindromeNumber){
          palindromeNumber = product;
          console.log(product);
        }
      }
    }



    return {
      factor_0 : factor_0,
      factor_1 : factor_1,
      palindromeNumber : palindromeNumber
    };

  }
};