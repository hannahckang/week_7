function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Abby", "Marshmallow", "Momo", "Coco", "Tooty", "Willy"];

function getRandomIndex(maxIndex) {
  
  return Math.floor(Math.random() * maxIndex);}

function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  
  return names[randomIdx];}

function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  
  return randomIdx;}


function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {return new Cat(generateRandomName(), generateRandomAge());} 
  else if (randomAnimal instanceof Dog) 
  {return new Dog(generateRandomName(), generateRandomAge());} 
  else if (randomAnimal instanceof Bird) 
  { return new Bird(generateRandomName(), generateRandomAge());}
}

$(document).ready(function() {
  var animal = generateRandomAnimal();
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});