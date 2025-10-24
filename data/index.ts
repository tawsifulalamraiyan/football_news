// utils/ageCalculator.js
function calculateAge(dateString: string | number | Date) {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// data/index.ts
export const playerData = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    currentclub: "Al Nassr",
    country: "Portugal",
    dateofbirth: "1985-02-05",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  },
  {
    id: 2,
    name: "Lionel Messi",
    currentclub: "Inter Miami",
    country: "Argentina",
    dateofbirth: "1987-06-24",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQfRdy60ZrMws8046-0BcouJODZYkQpvETHbIgTB7q8l6Z4pntsLv39m5IB6D1IGGgvAPFY92JnC3i9naQ",
  },
  {
    id: 3,
    name: "Neymar Jr",
    currentclub: "Al Hilal",
    country: "Brazil",
    dateofbirth: "1992-02-05",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Neymar_2018.jpg",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    currentclub: "Real Madrid",
    country: "France",
    dateofbirth: "1998-12-20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbapp%C3%A9_2019.jpg",
  },
  {
    id: 5,
    name: "Erling Haaland",
    currentclub: "Manchester City",
    country: "Norway",
    dateofbirth: "2000-07-21",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Erling_Haaland_2023.jpg",
  },
  {
    id: 6,
    name: "Kevin De Bruyne",
    currentclub: "Manchester City",
    country: "Belgium",
    dateofbirth: "1991-06-28",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kevin_De_Bruyne_2021.jpg",
  },
  {
    id: 7,
    name: "Mohamed Salah",
    currentclub: "Liverpool",
    country: "Egypt",
    dateofbirth: "1992-06-15",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mohamed_Salah_2018.jpg",
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    currentclub: "Barcelona",
    country: "Poland",
    dateofbirth: "1988-08-21",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Robert_Lewandowski_2023.jpg",
  },
  {
    id: 9,
    name: "Harry Kane",
    currentclub: "Bayern Munich",
    country: "England",
    dateofbirth: "1993-07-28",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Harry_Kane_2023.jpg",
  },
  {
    id: 10,
    name: "Vinícius Jr",
    currentclub: "Real Madrid",
    country: "Brazil",
    dateofbirth: "2000-07-12",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Vin%C3%ADcius_Jr_2023.jpg",
  },
  {
    id: 11,
    name: "Jude Bellingham",
    currentclub: "Real Madrid",
    country: "England",
    dateofbirth: "2003-06-29",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jude_Bellingham_2023.jpg",
  },
  {
    id: 12,
    name: "Bukayo Saka",
    currentclub: "Arsenal",
    country: "England",
    dateofbirth: "2001-09-05",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Bukayo_Saka_2023.jpg",
  },
  {
    id: 13,
    name: "Pedri",
    currentclub: "Barcelona",
    country: "Spain",
    dateofbirth: "2002-11-25",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Pedri_2022.jpg",
  },
  {
    id: 14,
    name: "Gavi",
    currentclub: "Barcelona",
    country: "Spain",
    dateofbirth: "2004-08-05",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gavi_2023.jpg",
  },
  {
    id: 15,
    name: "Luka Modrić",
    currentclub: "Real Madrid",
    country: "Croatia",
    dateofbirth: "1985-09-09",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Luka_Modric_2022.jpg",
  },
  {
    id: 16,
    name: "Toni Kroos",
    currentclub: "Real Madrid",
    country: "Germany",
    dateofbirth: "1990-01-04",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Toni_Kroos_2023.jpg",
  },
  {
    id: 17,
    name: "Virgil van Dijk",
    currentclub: "Liverpool",
    country: "Netherlands",
    dateofbirth: "1991-07-08",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Virgil_van_Dijk_2023.jpg",
  },
  {
    id: 18,
    name: "Marcus Rashford",
    currentclub: "Manchester United",
    country: "England",
    dateofbirth: "1997-10-31",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Marcus_Rashford_2023.jpg",
  },
  {
    id: 19,
    name: "Bruno Fernandes",
    currentclub: "Manchester United",
    country: "Portugal",
    dateofbirth: "1994-09-08",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Bruno_Fernandes_2022.jpg",
  },
  {
    id: 20,
    name: "Son Heung-min",
    currentclub: "Tottenham Hotspur",
    country: "South Korea",
    dateofbirth: "1992-07-08",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Son_Heung-min_2023.jpg",
  },
].map((player) => ({
  ...player,
  age: calculateAge(player.dateofbirth),
}));
