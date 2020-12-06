const formatString = function (string) {
  let stringLength = string.split('');
  let stringNumber = Number(stringLength.length);
  if (stringNumber > 40) {
    stringLength.length = 40;
    let stringFormating = stringLength.join('');
    console.log(stringFormating + '...');
  } else {
    console.log(string);
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
