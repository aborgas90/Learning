//set data yang tidak dappat di duplikasi
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
//menambahkan data dengan add
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log(numberSet);
//menggunakan fungsi delete() dengan data yg ingin dihapus
numberSet.delete(4);
console.log(numberSet);
