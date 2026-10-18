//  Movie Class
class Movie {
    constructor(id, title, year, rating) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

// Unsorted Movie Array
const movies = [
    new Movie(105, "Spirited Away", 2001, "PG"),
    new Movie(101, "Attack on Titan", 2013, "TV-MA"),
    new Movie(109, "Your Name", 2016, "PG"),
    new Movie(102, "Fullmetal Alchemist", 2009, "TV-14"),
    new Movie(107, "Cowboy Bebop", 1998, "TV-MA"),
    new Movie(103, "Death Note", 2006, "TV-14"),
    new Movie(106, "Demon Slayer", 2019, "TV-MA"),
    new Movie(104, "Naruto", 2002, "TV-PG"),
    new Movie(110, "Jujutsu Kaisen", 2020, "TV-MA"),
    new Movie(108, "One Piece", 1999, "TV-14")
];

// Display Unsorted List in HTML
const unsortedList = document.getElementById("unsortedList");
movies.forEach(m => {
    let li = document.createElement("li");
    li.textContent = `ID: ${m.id} | ${m.title} (${m.year}) - ${m.rating}`;
    unsortedList.appendChild(li);
});

// Sort Array by ID in Ascending Order
const sortedMovies = [...movies].sort((a, b) => a.id - b.id);

// Display Sorted List in HTML
const sortedList = document.getElementById("sortedList");
sortedMovies.forEach(m => {
    let li = document.createElement("li");
    li.textContent = `ID: ${m.id} | ${m.title} (${m.year}) - ${m.rating}`;
    sortedList.appendChild(li);
});

