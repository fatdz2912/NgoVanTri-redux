const obj1 = {
  name: "Tuấn",
  gender: "male",
};
const obj2 = {
  address: "123 ABC",
  age: 10,
};
const newObj = {
  ...obj1,
  ...obj2,
};
// const name = obj1.name
// const gender = obj1.gender
const { name, gender } = obj1;
const arr1 = [1, 2, 3];
const arr2 = ["A", "B", "C"];
const newArr = [4, ...arr1, ...arr2];
// const number1 = arr1[0]
// const number2 = arr1[1]
const [number1, number2] = arr1;
const fullName = `ABC${name}XYZ`;
const list = [
  {
    id: 1,
    name: "iPhone 14",
    price: 20,
  },
  {
    id: 2,
    name: "Samsung S23",
    price: 15,
  },
  {
    id: 3,
    name: "Xiaomi Mi13",
    price: 10,
  },
];
list.forEach((item, index) => {
  // console.log(item, index);
});
const productNames = list.map((item) => item.name);
const filterProduct = list.filter((item) => item.price >= 15);
const xiaomiProduct = list.find((item) => item.name === "Xiaomi Mi13");
const hasPrice20 = list.some((item) => item.price === 20);
const totalPrice = list.reduce((total, item) => total + item.price, 0);

// Xóa
// ["A"]
// arr2.splice(1, 2);
// const newArr2 = arr2.filter((_, index) => index !== 1);
// Cập nhật
// ["A", "D", "C"]
// arr2.splice(1, 1, "D");
// Chèn
// ["A", "B", "D", "C"]
// arr2.splice(2, 0, "D");

// const newNumberArr = list.sort((a, b) => a.price - b.price);
