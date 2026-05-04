// const a = 5;
// console.log(a == "5");
// console.log(a === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);

// 

// const x = 65;
// const result = x >= 70 ? "pass" : "fail";
// console.log(result);

// const y = 19;
// const voteAccess = y > 18 ? "can vote" : "cannot vote";
// console.log(voteAccess);
const order = {
    id:123,
    customer: {
        name: "john",
        address: {
            city:"New York"
        }
    }
}

console.log(order?.customer?.address?.city);
console.log(order?.customer?.phone?.number);

console.log(order?.shipping?.address?.street);


