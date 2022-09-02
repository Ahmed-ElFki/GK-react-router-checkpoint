import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { MovieContext } from "./Components/MovieContext";

function App() {
  let Movie = [
    {
      Id: 1,
      Title: "Avatar",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan_57660765-3a76-4bb5-941d-42c7a6644afb_480x.progressive.jpg?v=1656006092",
      Rating: 5,
    },
    {
      Id: 2,
      Title: "I Am Legend",
      Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/i-am-legend_66680d6b-_1_480x.progressive.jpg?v=1631809521",
      Rating: 4,
    },
    {
      Id: 3,
      Title: "300",
      Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7e2dc32e78ffb2506c6576b7a0099def_67333658-63bb-4938-98dc-d7460a680296_480x.progressive.jpg?v=1573613578",
      Rating: 3,
    },
    {
      Id: 4,
      Title: "The Avengers",
      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers.2436_480x.progressive.jpg?v=1647534214",
      Rating: 5,
    },
    {
      Id: 5,
      Title: "The Wolf of Wall Street",
      Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wolfofwallstreet_480x.progressive.jpg?v=1620229322",
      Rating: 3,
    },
    {
      Id: 6,
      Title: "Interstellar",
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar5_480x.progressive.jpg?v=1585846879",
      Rating: 4,
    },
    {
      Id: 7,
      Title: "Game of Thrones",
      Plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/gameofthrones.4th.promo_480x.progressive.jpg?v=1616181218",
      Rating: 4,
    },
    {
      Id: 8,
      Title: "Doctor Strange",
      Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan005_2e6e7360-baf5-4123-9a4f-61002e65c323_480x.progressive.jpg?v=1649447693",
      Rating: 3,
    },
    {
      Id: 9,
      Title: "Rogue One: A Star Wars Story",
      Plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e812a9b6a8c7f43c9be71928eb280d6d_c8681527-11c9-4d06-a5b1-633e897a30ec_480x.progressive.jpg?v=1573588748",
      Rating: 3,
    },
    {
      Id: 10,
      Title: "Assassin's Creed",
      Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2b4cedb481e4a8093725541227299aee_74c2b6c9-260e-4f60-9a5c-d58954f5de99_480x.progressive.jpg?v=1573592736",
      Rating: 5,
    },
  ];

  // eslint-disable-next-line
  let [moviesData, setMoviesData] = useState(Movie);

  return (
    <MovieContext.Provider value={{ moviesData, setMoviesData }}>
      <Filter />
      <MovieList moviesArray={moviesData} />
    </MovieContext.Provider>
  );
}

export default App;
