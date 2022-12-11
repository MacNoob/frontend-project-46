import path from 'path';
import fs from 'fs';
// eslint-disable-next-line import/extensions
import compare from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf-8'));
  const obj2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf-8'));
  const result = compare(obj1, obj2);
  return result;
};

export default genDiff;
