'use strict';

function getElementWidth(content, padding, border) {
  const paddingValue = Number.parseFloat(padding);
  const contentValue = Number.parseFloat(content);
  const borderValue = Number.parseFloat(border);
  const fullWidth =
    Number.parseFloat(contentValue) + 2 * (paddingValue + borderValue);
  return fullWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
