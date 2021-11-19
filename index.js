//Stores each chars ASCII value + 100, in order, as a string.
function stringToHash(string) {
  let charArray = string.split('');
  let hash = "";
  charArray.forEach(number => hash += (number.charCodeAt(0) + 100).toString());
  return hash;
}

function hashToString(hash) {

  //split hash into array
  const asciiCodeArray = hash.match(/.{3}/g);

  //convert each array index into ascii character
  for (let i = 0; i < asciiCodeArray.length; i++) {
    asciiCodeArray[i] = parseInt(asciiCodeArray[i]) - 100;
  }

  return String.fromCharCode(...asciiCodeArray);
}

function insertHash(hashTable, string) {
  const hash = stringToHash(string);

  //create index for hash based on length of table
  const tableIndex = hash % hashTable.length;

  //There are already value/s in that table index.
  if (hashTable[tableIndex][0] != null) {

    //hash value not in table index. Add hash
    if (hashTable[tableIndex].indexOf(hash) == -1) {
      hashTable[tableIndex].push(hash);
    }
  }
  //No values in table index. Add hash
  else {
    hashTable[tableIndex].unshift(hash);
  }
}

function removeHash(hashTable, string) {
  const hash = stringToHash(string);
  const tableIndex = hash % hashTable.length;

  //table index contains values
  if (hashTable[tableIndex][0] != null) {

    //remove matching hash value
    hashTable[tableIndex] = hashTable[tableIndex].filter(element => element !== hash);
  }
}

//Returns a 2D array
function createHashTable(length) {
  let storageArray = new Array(length);

  for (let i = 0; i < length; i++) {
    storageArray[i] = [];
  }

  return storageArray;
}

/* ********************************************************************************* */
let hashTable = createHashTable(6);

insertHash(hashTable, "Aiden");
insertHash(hashTable, "Dan");
insertHash(hashTable, "Kaylea");
insertHash(hashTable, "Matt");
insertHash(hashTable, "Mitch");
insertHash(hashTable, "Dean");

console.table(hashTable);

// console.log(hashToString('177197216216'));

// removeHash(hashTable, "Dan");

// console.table(hashTable);



