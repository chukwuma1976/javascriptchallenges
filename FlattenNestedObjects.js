function flatten(obj) {
    let flattenedObj = {};

    for (const key in obj) {
        if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
            const tempObj = flatten(obj[key]);
            for (const tempKey in tempObj) {
                flattenedObj[`${key}.${tempKey}`] = tempObj[tempKey];
            }
        } else if (Array.isArray(obj[key])) {
            if (obj[key].some(e => typeof e === "object"))
                flattenedObj[key] = obj[key].map((element) => typeof element === "object" ? flatten(element) : element);
            else flattenedObj[key] = obj[key];
        } else {
            flattenedObj[key] = obj[key];
        }
    }

    return flattenedObj;
}

const obj = {
    firstName: "Heath",
    lastName: "Frederick",
    occupation: {
        name: "Software Engineer",
        duties: ["automation testing", "bug fixes", "deployments"],
        workAddress: {
            street: "Las Colinas Ave",
            city: "Irving",
            state: "Texas"
        }
    }
}

const arrOfObj = [
    {
        label: "first",
        id: 1,
        children: []
    },
    {
        label: "second",
        id: 2,
        children: [
            {
                label: "third",
                id: 3,
                children: [
                    {
                        label: "fifth",
                        id: 5,
                        children: []
                    },
                    {
                        label: "sixth",
                        id: 6,
                        children: [
                            {
                                label: "seventh",
                                id: 7,
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                label: "fourth",
                id: 4,
                children: []
            },
            1,
            "different Type",
            true
        ]
    }
];

console.log("Flattening a single nested object 1");
console.log(flatten(obj));

console.log("Flattening an array of objects");
const flatArrObj = arrOfObj.map(e => flatten(e));
console.log(flatArrObj);

const flat1 = flatArrObj[0];
const flat2 = flatArrObj[1];