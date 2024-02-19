const data = require("./data");

// console.log(data);

const filterByCategory = (category) => {
    return data.filter((item) => item.category === category)
}

// console.log(filterByCategory("Protein"));
// console.log(filterByCategory("Vegetable"));
// console.log(filterByCategory("Fruit"));
// console.log(filterByCategory("Nuts"));
// console.log(filterByCategory("Grains"));
// console.log(filterByCategory("Dairy"));

const filterByValue = (key, value, comparison) => {
    return data.filter((item) => {
        if (comparison === 'equals') {
            return item[key] === value;
        }
        if (comparison === 'less') {
            return item[key] < value;
        }
        if (comparison === 'greater') {
            return item[key] > value;
        }
    })
}

// console.log(filterByValue("calorie", 100, "greater"))
// console.log(filterByValue("calorie", 100, "less"))

const sortByValue = (key, order) => {
    if (order === "asc") {
        console.log(data.sort((a, b) => a[key] - b[key]));
    }
    if (order === "desc") {
        console.log(data.sort((a, b) => b[key] - a[key]));
    }
}

// console.log(sortByValue("protiens", "asc"))
console.log(sortByValue("cab", "desc"))