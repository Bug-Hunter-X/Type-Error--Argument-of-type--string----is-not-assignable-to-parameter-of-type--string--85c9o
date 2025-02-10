function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the array element
console.log(greeter(user[0])); // Accessing the first element

// Solution 2: Joining array elements into a string
console.log(greeter(user.join(" "))); // Joining array elements with a space

//Solution 3: Handling array in the function
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(" ");
}
console.log(greeterArray(user));