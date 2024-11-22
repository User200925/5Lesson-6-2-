
let myArray = [1, 2, 3, 4];
console.log(myArray)

console.log(myArray.length);

// Подтверждаем удаление элемента
if (confirm("Удалить один элемент из массива?")) {
  myArray.pop(); // Удаляем последний элемент
  console.log("Элемент удален. Новый массив: " + myArray);
} else {
  console.log("Элементы массива остались на месте: " + myArray);
}
