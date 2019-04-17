const movies = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_SX300.jpg",
    title: "Peaky Blinders",
    rate: "3"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png/220px-Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png",
    title: "Peaky Blinders",
    rate: "3"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_SX300.jpg",
    title: "Bumblebee",
    rate: "2"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SX300.jpg",
    title: "Mortal Engines",
    rate: "3"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTkzNTY5Ml5BMl5BanBnXkFtZTgwNjU4MzY1MTI@._V1_SX300.jpg",
    title: "Twin Peaks",
    rate: "5"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg",
    title: "House of Cards",
    rate: "4"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BMTU1MzY1NDAxOV5BMl5BanBnXkFtZTgwMzI3OTk2NzM@._V1_SX300.jpg",
    title: "The Highwaymen",
    rate: "4"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BMjMzOTUwNzgyOV5BMl5BanBnXkFtZTgwNjk3MTQwNzM@._V1_SX300.jpg",
    title: "The Kid Who Would Be King",
    rate: "3"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BODI4MTI2OTAyMV5BMl5BanBnXkFtZTgwNjY3NDY1NjM@._V1_SX300.jpg",
    title: "Destroyer",
    rate: "3"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BMTk0NDIzMTA1MF5BMl5BanBnXkFtZTgwMzM0MTUzNjM@._V1_SX300.jpg",
    title: "Mary Poppins Returns",
    rate: "5"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BZGE1NGYxOWItODdmMy00NWNhLTgxZmMtYmVjYmViMGI0NTdmXkEyXkFqcGdeQXVyNzE2MTQyMzM@._V1_SX300.jpg",
    title: "Isn't It Romantic",
    rate: "3"
  }
];

function card(state = movies, action) {
  if (action.type === "ADD_MOVIE") {
    return state.concat(action.paylod);
  }
  return state;
}
export default card;
