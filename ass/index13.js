const extractInfo = (people) => {
    return people.map(person => {
        const name = person.name;
        const city = person.address.city;
        const streetName = person.address.street.name;

        return `${name} lives in ${city} on ${streetName}`;
    });
};

const people = [
    {
        name: "Alice",
        address: {
            city: "New York",
            street: { name: "Broadway", number: 123 }
        }
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: { name: "Sunset Boulevard", number: 456 }
        }
    }
];

console.log(extractInfo(people));