// eslint-disable-next-line import/extensions
import parser from './parsers.js';
// eslint-disable-next-line import/extensions
import compare from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parser(filepath1);
  const obj2 = parser(filepath2);
  const result = compare(obj1, obj2);
  return result;
};

export default genDiff;
