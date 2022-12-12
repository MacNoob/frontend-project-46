import { fileURLToPath } from 'url';
import * as fs from 'node:fs';
import path, { dirname } from 'path';
// eslint-disable-next-line import/extensions
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// eslint-disable-next-line no-undef
test('genDiff', () => {
  const expectedData = readFile('expected.txt');
  const actualData = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  // eslint-disable-next-line no-undef
  expect(actualData).toEqual(expectedData);
});
