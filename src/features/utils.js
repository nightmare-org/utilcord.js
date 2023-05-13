"use strict";
const crypto = require("crypto");
const dns = require("dns");

/**
 * @constructs chunk
 * @function
 * @param {String} array 
 * @param {Number} size 
 * @returns {Array}
 * @example
 * const { chunk } = require('utilcord.js');
 * console.log(chunk(['a', 'b', 'c', 'd'], 2));
 * // Output: [['a', 'b'], ['c', 'd']]
 */
function chunk(array, size) {
    if (!Array.isArray(array)) throw new Error('array must be an array');
    if (typeof size !== 'number') throw new Error('size must be a number');
    const chunked_arr = [];
    for (let i = 0; i < array.length; i += size) {
        chunked_arr.push(array.slice(i, i + size));
    }
    return chunked_arr;
}
/**
 * @constructs StringToMs
 * @function
 * @param {String} string 
 * @returns {Number}
 * @example
 * const { StringToMs } = require('utilcord.js');
 * console.log(StringToMs('1d'));
 * // Output: 86400000
 */
function StringToMs(string) {
    if (typeof string !== 'string') throw new Error('string must be a string');
    const seconds = string.match(/(\d+(?:\.\d+)?)\s*(?:s(?:ec(?:ond)?s?)?|seconds?)/i);
    const minutes = string.match(/(\d+(?:\.\d+)?)\s*(?:m(?:in(?:ute)?s?)?|minutes?)/i);
    const hours = string.match(/(\d+(?:\.\d+)?)\s*(?:h(?:ou(?:r)?s?)?|hours?)/i);
    const days = string.match(/(\d+(?:\.\d+)?)\s*(?:d(?:ay)?s?|days?)/i);
    const weeks = string.match(/(\d+(?:\.\d+)?)\s*(?:w(?:ee(?:k)?s?)?|weeks?)/i);
    const months = string.match(/(\d+(?:\.\d+)?)\s*(?:mo(?:n(?:th)?s?)?|months?)/i);
    const years = string.match(/(\d+(?:\.\d+)?)\s*(?:y(?:ea(?:r)?s?)?|years?)/i);
    let ms = 0;
    if (seconds) ms += parseFloat(seconds[1]) * 1000;
    if (minutes) ms += parseFloat(minutes[1]) * 60000;
    if (hours) ms += parseFloat(hours[1]) * 3600000;
    if (days) ms += parseFloat(days[1]) * 86400000;
    if (weeks) ms += parseFloat(weeks[1]) * 604800000;
    if (months) ms += parseFloat(months[1]) * 2629800000;
    if (years) ms += parseFloat(years[1]) * 31557600000;
    return ms;
}
/**
 * @constructs ms
* @function
* @param {Number} ms 
* @returns {String}
* @example
* const { ms } = require('utilcord.js');
* console.log(ms(86400000));
* // Output: 1d
*/                                                                                                                                          
function ms(ms) {
    if (typeof ms !== 'number') throw new Error('ms must be a number');
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (days > 0) {
        return `${days}:${hours}:${minutes}:${seconds}`;
    } else if (hours > 0) {
        return `${hours}:${minutes}:${seconds}`;
    } else if (minutes > 0) {
        return `${minutes}:${seconds}`;
    } else {
        return `${seconds}`;
    }
};
/**
 * @constructs shuffleArray
 * @function
 * @param {Number} time 
 * @returns {String}
 * @example
 * const { shuffleArray } = require('utilcord.js');
 * console.log(shuffleArray([1, 2, 3, 4, 5]));
 * // Output: [ 2, 5, 1, 4, 3 ]
 */
function shuffleArray(array) {
    if (!Array.isArray(array)) throw new Error('array must be an array');
    let i = array.length, temp, randomIndex;
    while (0 !== i) {
        randomIndex = Math.floor(Math.random() * i);
        i -= 1;
        temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};

/**
 * @constructs formatDate
 * @function
 * @example
 * @param {*} date 
 * @param {*} format 
 * @returns {String}
 * const currentDate = new Date();
 * console.log('Current Date:', formatDate(currentDate, 'medium'));
 * //
 */
function formatDate(date, format) {
    const options = { dateStyle: format };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * @constructs parseDate
 * @function
 * @example
 * const parsedDate = parseDate('2023-05-12');
 * console.log('Parsed Date:', parsedDate);
 * //
 */ 
function parseDate(dateString) {
    return new Date(dateString);
};

/**
 * 
 * @constructs calculateDateDifference
 * @function
 * @example
 * const startDate = new Date('2023-05-01');
 * const endDate = new Date('2023-05-12');
 * const dateDifference = calculateDateDifference(startDate, endDate);
 * console.log('Date Difference:', dateDifference, 'days'); 
 * //
*/

// Calculate the difference between two dates in days
function calculateDateDifference(start, end) {
    const timeDifference = end.getTime() - start.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
};
/**
 * 
 * @constructs convertTimeZone
 * @function 
 * @example
 * const convertedDate = convertTimeZone(currentDate, 'Europe/London');
 * console.log('Converted Date:', convertedDate) 
 * //
 */

/**
 * @constructs calculate
 * @function
 * @example
 * const result = calculate('add', 5, 3);
 * console.log('Result:', result); // Output: Result: 8
 * //
 */
function calculate(operation, num1, num2) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    default:
      return NaN;
  }
}

/**
 * @constructs generateRandomNumber
 * @function
 * @example
 * const randomNumber = generateRandomNumber(1, 10);
 * console.log('Random Number:', randomNumber); (random number between 1 and 10)
 * //
 */

// Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @constructs roundNumber
 * @function
 * @example
 *  const roundedNumber = roundNumber(3.14159, 2);
 *  console.log('Rounded Number:', roundedNumber);: Rounded Number: 3.14
 */

function roundNumber(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
}
/**
 * @constructs convertNumberFormat
 * @function
 * @example
 * const binaryNumber = convertNumberFormat(10, 'binary');
 * console.log('Binary Number:', binaryNumber); // Output: Binary Number: 1010
 * 
 * const hexadecimalNumber = convertNumberFormat(255, 'hexadecimal');
 * console.log('Hexadecimal Number:', hexadecimalNumber); // Output: Hexadecimal Number: ff
 */
  // Convert a number to a different format (binary, octal, hexadecimal)
  function convertNumberFormat(number, format) {
    switch (format) {
      case 'binary':
        return number.toString(2);
      case 'octal':
        return number.toString(8);
      case 'hexadecimal':
        return number.toString(16);
      default:
        return '';
    }
  }

// Encryption functions

/**
 * @constructs encryptedMessage
 * @function
 * @example
 * const encryptionKey = 'a1b2c3d4e5f6g7h8'; // Replace with your own encryption key
 * const message = 'Hello, World!';
 * const encryptedMessage = encryptMessage(encryptionKey, message);
 * console.log('Encrypted Message:', encryptedMessage);
 * //
 */

function encryptMessage(key, message) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encryptedMessage = cipher.update(message, 'utf8', 'hex');
    encryptedMessage += cipher.final('hex');
    return encryptedMessage;
}

/**
 * @constructs decryptMessage
 * @function
 * @example
 * const decryptedMessage = decryptMessage(encryptionKey, encryptedMessage);
 * console.log('Decrypted Message:', decryptedMessage);
 * //
 */

function decryptMessage(key, encryptedMessage) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8');
    decryptedMessage += decipher.final('utf8');
    return decryptedMessage;
}

// Hashing functions

/**
 * @constructs hashPassword
 * @function 
 * @example
 * const password = 'myPassword';
 * const hashedPassword = hashPassword(password);
 * console.log('Hashed Password:', hashedPassword);
 * //
 */

function hashPassword(password) {
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex');
    return hashedPassword;
}

/**
 * @constructs isEmailValid
 * @function
 * @example
 * const email = 'test@example.com';
 * isEmailValid(email).then((isValid) => {
 * console.log('Is Email Valid?', isValid);
 * });
 * //
 */

function isEmailValid(email) {
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return false;
  }
  const parts = email.split('@');
  const domain = parts[1];

  return new Promise((resolve) => {
    dns.resolveMx(domain, (error, addresses) => {
      if (error || !addresses || addresses.length === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * @constructs isDomainValid
 * @function
 * @example
 * const domain = 'example.com';
 * isDomainValid(domain).then((isValid) => {
  console.log('Is Domain Valid?', isValid);
 * });
 * //
 */

  function isDomainValid(domain) {
    return new Promise((resolve) => {
      dns.lookup(domain, (error) => {
        if (error) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

module.exports = {
    chunk,
    StringToMs,
    ms,
    shuffleArray,
    calculateDateDifference,
    parseDate,
    formatDate,
    calculate,
    generateRandomNumber,
    roundNumber,
    convertNumberFormat,
    encryptMessage,
    decryptMessage,
    hashPassword,
    isEmailValid,
    isDomainValid
}
