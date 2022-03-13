const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((val) => val * 2)];

const removeRandom = items => {
    let idex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idex), ...items.slice(idex + 1)];
  }

  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
  }

  const removeKey = (obj, key) => {
      let newObj = {...obj};
      delete newObj[key];
      return newObj;
  }

  
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
  }

  const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
  }
  