try {
  const data = JSON.parse('{"name":"Priya"');   // missing closing brace
  console.log(data);
} catch (err) {
  console.log("Couldn't parse:", err.message);
}
console.log("App keeps running");