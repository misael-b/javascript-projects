let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (initials) {
    return initials.slice(0,1)
});

console.log(firstInitials);
