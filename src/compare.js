import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  const result = keys.sort()
    .flatMap((key) => {
      const res = [];
      if (!Object.hasOwn(obj1, key)) {
        res.push(`+ ${key}: ${obj2[key]}\n`);
      } else if (!Object.hasOwn(obj2, key)) {
        res.push(`- ${key}: ${obj1[key]}\n`);
      } else if (obj1[key] !== obj2[key]) {
        res.push(`- ${key}: ${obj1[key]}\n`);
        res.push(`+ ${key}: ${obj2[key]}\n`);
      } else {
        res.push(`  ${key}: ${obj2[key]}\n`);
      }
      return res;
    });
  const res = `{
  ${result}}`;

  return res.replace(/[",]/g, '  ');
};

export default compare;
