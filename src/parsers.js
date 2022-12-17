import yaml from 'js-yaml';
import path from 'path';
import fs from 'node:fs';

const absolutePathToFile = (pathToFile) => path.resolve(pathToFile);
const readFile = (pathToFile) => fs.readFileSync(absolutePathToFile(pathToFile), 'utf-8');
const getFormat = (pathToFile) => path.extname(pathToFile);

const parser = (file) => {
  const format = getFormat(file);
  if (format === '.json') {
    return JSON.parse(readFile(file));
  } if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(file));
  }
  return new Error('Format not recognized, check file format!');
};

export default parser;
