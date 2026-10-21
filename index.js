/**
 * Checks if a given number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if prime, false otherwise.
 */
function isPrime(num) {
  if (typeof num !== 'number' || num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  isPrime
};