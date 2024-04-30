import uniqueRandomArray from 'unique-random-array';
import supervillains from './supervillains.json' with {type: 'json'};

export default supervillains;

export const randomSupervillain = uniqueRandomArray(supervillains);
