const arrayMovies = [
  {
    image: "https://i.imgur.com/MX3VvqN.jpg",
    title: "The Goonies",
    director: ["Richard Donner"],
    categories: ["Adventure","Comedy","Family"],
    year: 1985,
    rate: 7.7
  },
  {
    image: "https://i.imgur.com/KDl3kyq.jpg",
    title: "Akira",
    director: ["Katsuhiro Ôtomo"],
    categories: ["Animation", "Action", "Drama"],
    year: 1988,
    rate: 8.0
  },
  {
    image: "https://i.imgur.com/2F5UNqo.jpg",
    title: "The Princess Bride",
    director: ["Rob Reiner"],
    categories: ["Adventure", "Family", "Fantasy"],
    year: 1987,
    rate: 8.0
  },
  {
    image: "https://i.imgur.com/nnuJFU3.jpg",
    title: "Tron",
    director: ["Steven Lisberger"],
    categories: ["Sci-fi", "Action", "Adventure"],
    year: 1982,
    rate: 6.8
  },
  {
    image: "https://i.imgur.com/IonOT01.jpg",
    title: "Conan the Barbarian",
    director: ["John Milius"],
    categories: ["Action", "Adventure", "Fantasy"],
    year: 1982,
    rate: 6.9
  },
  {
    image: "https://i.imgur.com/UEjCKY6.jpg",
    title: "Innerspace",
    director: ["Joe Dante"],
    categories: ["Action", "Adventure", "Comedy"],
    year: 1987,
    rate: 6.8
  },
  {
    image: "https://i.imgur.com/jY95vX6.jpg",
    title: "Short Circuit",
    director: ["John Badham"],
    categories: ["Comedy", "Family", "Sci-fi"],
    year: 1986,
    rate: 6.6
  },
  {
    image: "https://i.imgur.com/7HiUjoL.jpg",
    title: "Young Sherlock Holmes",
    director: ["Barry Levinson"],
    categories: ["Adventure", "Fantasy", "Mistery"],
    year: 1985,
    rate: 6.8
  },

  
  {
    image: "https://i.imgur.com/Q2SqK2h.jpg",
    title: "The Dark Crystal",
    director: ["Jim Henson", "Frank Oz"],
    categories: ["Adventure", "Family", "Fantasy"],
    year: 1982,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/4Op8zDk.jpg",
    title: "Victor Victoria",
    director: ["Blake Edwards"],
    categories: ["Comedy", "Musical", "Romance"],
    year: 1982,
    rate: 7.6
  },
  {
    image: "https://i.imgur.com/WzWXiL3.jpg",
    title: "Lethal Weapon",
    director: ["Richard Donner"],
    categories: ["Action", "Crime", "Thriller"],
    year: 1987,
    rate: 7.6
  },
  {
    image: "https://i.imgur.com/L9m0yVm.jpg",
    title: "For Your Eyes Only",
    director: ["John Glen"],
    categories: ["Action", "Adventure", "Thriller"],
    year: 1981,
    rate: 6.7
  },
  {
    image: "https://i.imgur.com/LzIalTH.jpg",
    title: "Three Men and a Baby",
    director: ["Leonard Nimoy"],
    categories: ["Comedy", "Drama", "Family"],
    year: 1987,
    rate: 6.1
  },
  {
    image: "https://i.imgur.com/6JyMpue.jpg",
    title: "Brazil",
    director: ["Terry Gilliam"],
    categories: ["Drama", "Sci-fi"],
    year:1985,
    rate: 7.9
  },
  {
    image: "https://i.imgur.com/fZipxh4.jpg",
    title: "The Great Mouse Detective",
    director: ["Ron Clements", "Burny Mattinson", "David Michener"],
    categories: ["Animation", "Adventure", "Family"],
    year: 1986,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/aRZxTpp.jpg",
    title: "Re-Animator",
    director: ["Stuart Gordon"],
    categories: ["Comedy", "Terror", "Sci-fi"],
    year: 1985,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/jBKicWc.jpg",
    title: "Escape from New York",
    director: ["John Carpenter"],
    categories: ["Action", "Adventure", "Sci-fi"],
    year: 1981,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/X167LUi.jpg",
    title: "Twins",
    director: ["Ivan Reitman"],
    categories: ["Comedy", "Crime"],
    year: 1988,
    rate: 6.1
  },
  {
    image: "https://i.imgur.com/luYa5v0.jpg",
    title: "The Monster Squad",
    director: ["Fred Dekker"],
    categories: ["Action", "Comedy", "Fantasy"],
    year: 1987,
    rate: 7.0
  },
  {
    image: "https://i.imgur.com/3EOBsqQ.jpg",
    title: "Creepshow",
    director: ["George A. Romero"],
    categories: ["Comedy", "Fantasy", "Horror"],
    year: 1982,
    rate: 6.8
  },
  {
    image: "https://i.imgur.com/L3PJLHc.jpg",
    title: "My Left Foot",
    director: ["Jim Sheridan"],
    categories: ["Biography", "Drama"],
    year: 1989,
    rate: 7.9
  },
  {
    image: "https://i.imgur.com/uhxic35.jpg",
    title: "Rumble Fish",
    director: ["Francis Ford Coppola"],
    categories: ["Crime", "Drama", "Romance"],
    year: 1983,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/b2shTAa.jpg",
    title: "Critters",
    director: ["Stephen Herek"],
    categories: ["Comedy", "Horror", "Sci-fi"],
    year: 1986,
    rate: 6.1
  },
  {
    image: "https://i.imgur.com/ykOLjkT.jpg",
    title: "A Room With a View",
    director: ["James Ivory"],
    categories: ["Drama", "Romance"],
    year: 1985,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/NWqJG3c.jpg",
    title: "The Abyss",
    director: ["James Cameron"],
    categories: ["Adventure", "Drama", "Mystery"],
    year: 1989,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/4Na6xVe.jpg",
    title: "Tonari no Totoro",
    director: [""],
    categories: ["Animation", "Comedy", "Family"],
    year: 1988,
    rate: 8.2
  },
  {
    image: "https://i.imgur.com/PNxQsGo.jpg",
    title: "Splash",
    director: ["Ron Howard"],
    categories: ["Comedy", "Fantasy", "Romance"],
    year: 1984,
    rate: 6.3
  },
  {
    image: "https://i.imgur.com/NPEyZwM.jpg",
    title: "Child's Play",
    director: ["Tom Holland"],
    categories: ["Horror", "Thriller"],
    year: 1988,
    rate: 6.6
  },
  {
    image: "https://i.imgur.com/hM4kb1d.jpg",
    title: "Kickboxer",
    director: ["Mark DiSalle","David Worth"],
    categories: ["Action", "Sport", "Thriller"],
    year: 1989,
    rate: 6.4
  },
  {
    image: "https://i.imgur.com/qDOascT.jpg",
    title: "The Name of the Rose",
    director: ["Jean-Jacques Annaud"],
    categories: ["Drama", "History", "Mystery"],
    year: 1986,
    rate: 7.7
  },
  {
    image: "https://i.imgur.com/sbXqZ55.jpg",
    title: "Ladyhawke",
    director: ["Richard Donner"],
    categories: ["Adventure","Comedy","Drama"],
    year: 1985,
    rate: 6.9
  },
  {
    image: "https://i.imgur.com/YZXaMtj.jpg",
    title: "Witness",
    director: ["Peter Weir"],
    categories: ["Drama", "Romance", "Thriller"],
    year: 1985,
    rate: 7.4
  },
  {
    image: "https://i.imgur.com/w7mKvCa.jpg",
    title: "Raiders of the Lost Ark",
    director: ["Steven Spielberg"],
    categories: ["Action", "Adventure"],
    year: 1981,
    rate: 8.4
  },
  {
    image: "https://i.imgur.com/NLVMmXv.jpg",
    title: "Indiana Jones and the Last Crusade",
    director: ["Steven Spielberg"],
    categories: ["Action", "Adventure"],
    year: 1989,
    rate: 8.3
  },
  {
    image: "https://i.imgur.com/YZw7yCm.jpg",
    title: "Spaceballs",
    director: ["Mel Brooks"],
    categories: ["Adventure", "Comedy", "Sci-fi"],
    year: 1987,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/bPGblem.jpg",
    title: "The Untouchables",
    director: ["Brian De Palma"],
    categories: ["Crime", "Drama", "Thriller"],
    year: 1987,
    rate: 7.9
  },
  {
    image: "https://i.imgur.com/xCMjr0z.jpg",
    title: "Beetle Juice",
    director: ["Tim Burton"],
    categories: ["Comedy", "Fantasy"],
    year: 1988,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/BUHYBVQ.jpg",
    title: "The Evil Dead",
    director: ["Sam Raimi"],
    categories: ["Horror"],
    year: 1981,
    rate: 7.4
  },
  {
    image: "https://i.imgur.com/bQK9U09.jpg",
    title: "Friday the 13th",
    director: ["Sean S. Cunningham"],
    categories: ["Horror","Mystery","Thriller"],
    year: 1980,
    rate: 6.4
  },
  {
    image: "https://i.imgur.com/Bf7aJ6b.jpg",
    title: "Gremlins",
    director: ["Joe Dante"],
    categories: ["Comedy", "Fantasy", "Horror"],
    year: 1984,
    rate: 7.3
  },
  {
    image: "https://i.imgur.com/wCLJNpm.jpg",
    title: "Return of the Jedi",
    director: ["Richard Marquand"],
    categories: ["Action","Adventure", "Fantasy"],
    year: 1983,
    rate: 8.3
  },
  {
    image: "https://i.imgur.com/HezCFR7.jpg",
    title: "Airplane!",
    director: ["Jim Abrahams","David Zucker","Jerry Zucker"],
    categories: ["Comedy"],
    year: 1980,
    rate: 7.7
  },
  {
    image: "https://i.imgur.com/FPZfUYD.jpg",
    title: "The Empire Strikes Back",
    director: ["Irvin Kershner"],
    categories: ["Action", "Adventure", "Fantasy"],
    year: 1980,
    rate: 8.7
  },
  {
    image: "https://i.imgur.com/DoLKcfl.jpg",
    title: "The Shining",
    director: ["Stanley Kubrick"],
    categories: ["Drama","Horror"],
    year: 1980,
    rate: 8.4
  },
  {
    image: "https://i.imgur.com/MUQYAoR.jpg",
    title: "Blade Runner",
    director: ["Ridley Scott"],
    categories: ["Action", "Drama","Sci-fi"],
    year: 1982,
    rate: 8.1
  },
  {
    image: "https://i.imgur.com/oFYYgDQ.jpg",
    title: "E.T., the Extra-Terrestrial",
    director: ["Steven Spielberg"],
    categories: ["Adventure", "Family","Sci-fi"],
    year: 1982,
    rate: 7.9
  },
  {
    image: "https://i.imgur.com/gxOOyo7.jpg",
    title: "First Blood",
    director: ["Ted Kotcheff"],
    categories: ["Action", "Adventure", "Thriller"],
    year: 1982,
    rate: 7.7
  },
  {
    image: "https://i.imgur.com/UtYECB0.jpg",
    title: "Poltergeist",
    director: ["Tobe Hooper"],
    categories: ["Horror", "Thriller"],
    year: 1982,
    rate: 7.3
  },
  {
    image: "https://i.imgur.com/A1Vi755.jpg",
    title: "The Thing",
    director: ["John Carpenter"],
    categories: ["Horror", "Mystery", "Sci-fi"],
    year: 1982,
    rate: 8.2
  },
  {
    image: "https://i.imgur.com/fTxQIJz.jpg",
    title: "The Outsiders",
    director: ["Francis Ford Coppola"],
    categories: ["Crime", "Drama"],
    year: 1983,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/v9pQS1v.jpg",
    title: "Scarface",
    director: ["Brian De Palma"],
    categories: ["Crime", "Drama"],
    year: 1983,
    rate: 8.3
  },
  {
    image: "https://i.imgur.com/wiFcmOy.jpg",
    title: "WarGames",
    director: ["John Badham"],
    categories: ["Action", "Drama", "Sci-fi"],
    year: 1983,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/S5aOJYU.jpg",
    title: "Dune",
    director: ["David Lynch"],
    categories: ["Action", "Adventure", "Sci-fi"],
    year: 1984,
    rate: 6.3
  },
  {
    image: "https://i.imgur.com/jahVwRH.jpg",
    title: "Ghostbusters",
    director: ["Ivan Reitman"],
    categories: ["Action", "Comedy", "Fantasy"],
    year: 1984,
    rate: 7.8
  },
  {
    image: "https://i.imgur.com/JW2irxc.jpg",
    title: "Indiana Jones and the Temple of Doom",
    director: ["Steven Spielberg"],
    categories: ["Action", "Adventure"],
    year: 1984,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/t4TuHp6.jpg",
    title: "The Karate Kid",
    director: ["John G. Avildsen"],
    categories: ["Action", "Drama", "Family"],
    year: 1984,
    rate: 7.3
  },
  {
    image: "https://i.imgur.com/zHEyND2.jpg",
    title: "Honey, I Shrunk the Kids",
    director: ["Joe Johnston"],
    categories: ["Adventure", "Comedy", "Family"],
    year: 1989,
    rate: 6.4
  },
  {
    image: "https://i.imgur.com/uAVKbsj.jpg",
    title: "A Nightmare on Elm Street",
    director: ["Wes Craven"],
    categories: ["Horror"],
    year: 1984,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/9PdglJQ.jpg",
    title: "Police Academy",
    director: ["Hugh Wilson"],
    categories: ["Comedy"],
    year: 1984,
    rate: 6.7
  },
  {
    image: "https://i.imgur.com/AwvkGkG.jpg",
    title: "The Terminator",
    director: ["James Cameron"],
    categories: ["Action", "Sci-fi"],
    year: 1984,
    rate: 8.1
  },
  {
    image: "https://i.imgur.com/JCNk16y.jpg",
    title: "Willow",
    director: ["Ron Howard"],
    categories: ["Action","Adventure", "Drama"],
    year: 1988,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/QWxh4rd.jpg",
    title: "Back to the Future",
    director: ["Robert Zemeckis"],
    categories: ["Adventure","Comedy", "Sci-fi"],
    year: 1985,
    rate: 8.6
  },
  {
    image: "https://i.imgur.com/stFWGUQ.jpg",
    title: "The Breakfast Club",
    director: ["John Hughes"],
    categories: ["Comedy", "Drama"],
    year: 1985,
    rate: 7.8
  },
  {
    image: "https://i.imgur.com/iLiSabg.jpg",
    title: "Legend",
    director: ["Ridley Scott"],
    categories: ["Adventure", "Fantasy", "Romance"],
    year: 1985,
    rate: 6.4
  },
  {
    image: "https://i.imgur.com/p2bmncc.jpg",
    title: "Silverado",
    director: ["Lawrence Kasdan"],
    categories: ["Action", "Crime", "Drama"],
    year: 1985,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/qKkBKnA.jpg",
    title: "Crocodile Dundee",
    director: ["Peter Faiman"],
    categories: ["Action", "Adventure","Comedy"],
    year: 1986,
    rate: 6.6
  },
  {
    image: "https://i.imgur.com/Y4ROdG5.jpg",
    title: "Aliens",
    director: ["James Cameron"],
    categories: ["Action", "Adventure", "Sci-fi"],
    year: 1986,
    rate: 8.4
  },
  {
    image: "https://i.imgur.com/GphnX7f.jpg",
    title: "Big Trouble in Little China",
    director: ["John Carpenter"],
    categories: ["Action", "Adventure", "Comedy"],
    year: 1986,
    rate: 7.3
  },
  {
    image: "https://i.imgur.com/8jxqIGA.jpg",
    title: "The Fly",
    director: ["David Cronenberg"],
    categories: ["Drama", "Horror", "Sci-fi"],
    year: 1986,
    rate: 7.6
  },
  {
    image: "https://i.imgur.com/r8CQY1e.jpg",
    title: "Highlander",
    director: ["Russell Mulcahy"],
    categories: ["Action", "Adventure", "Fantasy"],
    year: 1986,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/gu1Slv2.jpg",
    title: "Labyrinth",
    director: ["Jim Henson"],
    categories: ["Adventure", "Family", "Fantasy"],
    year: 1986,
    rate: 7.3
  },
  {
    image: "https://i.imgur.com/Xu5roLB.jpg",
    title: "Little Shop of Horrors",
    director: ["Frank Oz"],
    categories: ["Comedy", "Horror", "Musical"],
    year: 1986,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/Cbbm7fJ.jpg",
    title: "Top Gun",
    director: ["Tony Scott"],
    categories: ["Action", "Drama"],
    year: 1986,
    rate: 6.9
  },
  {
    image: "https://i.imgur.com/BSF6cuU.jpg",
    title: "Dirty Dancing",
    director: ["Emile Ardolino"],
    categories: ["Drama", "Music", "Romance"],
    year: 1987,
    rate: 7.0
  },
  {
    image: "https://i.imgur.com/jChVHeY.jpg",
    title: "Full Metal Jacket",
    director: ["Stanley Kubrick"],
    categories: ["Drama", "War"],
    year: 1987,
    rate: 8.3
  },
  {
    image: "https://i.imgur.com/nVueyNk.jpg",
    title: "The Lost Boys",
    director: ["Joel Schumacher"],
    categories: ["Comedy", "Horror"],
    year: 1987,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/WoMUhco.jpg",
    title: "Masters of the Universe",
    director: ["Gary Goddard"],
    categories: ["Action", "Adventure", "Fantasy"],
    year: 1987,
    rate: 5.3
  },
  {
    image: "https://i.imgur.com/aubmZLB.jpg",
    title: "Moonstruck",
    director: ["Norman Jewison"],
    categories: ["Comedy", "Drama", "Romance"],
    year: 1987,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/8r4MjNS.jpg",
    title: "Predator",
    director: ["John McTiernan"],
    categories: ["Action", "Adventure", "Horror"],
    year: 1987,
    rate: 7.8
  },
  {
    image: "https://i.imgur.com/MGnXJHG.jpg",
    title: "RoboCop",
    director: ["Paul Verhoeven"],
    categories: ["Action", "Crime", "Sci-fi"],
    year: 1987,
    rate: 7.6
  },
  {
    image: "https://i.imgur.com/kzxSZir.jpg",
    title: "The Running Man",
    director: ["Paul Michael Glaser"],
    categories: ["Action", "Sci-fi", "Thriller"],
    year: 1987,
    rate: 6.7
  },
  {
    image: "https://i.imgur.com/5sC48Ja.jpg",
    title: "Heathers",
    director: ["Michael Lehmann"],
    categories: ["Comedy", "Crime"],
    year: 1988,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/epJ6tqH.jpg",
    title: "Die Hard",
    director: ["John McTiernan"],
    categories: ["Action", "Thriller"],
    year: 1988,
    rate: 8.3
  },
  {
    image: "https://i.imgur.com/gn2Mkt5.jpg",
    title: "A Fish Called Wanda",
    director: ["Charles Crichton", "John Cleese"],
    categories: ["Comedy", "Crime"],
    year: 1988,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/9eZQXA4.jpg",
    title: "Who Framed Roger Rabbit",
    director: ["Robert Zemeckis"],
    categories: ["Animation", "Adventure", "Comedy"],
    year: 1988,
    rate: 7.7
  },
  {
    image: "https://i.imgur.com/G0Jwu3P.jpg",
    title: "Batman",
    director: ["Tim Burton"],
    categories: ["Action", "Adventure"],
    year: 1989,
    rate: 7.5
  },
  {
    image: "https://i.imgur.com/pFeFgfR.jpg",
    title: "Dead Poets Society",
    director: ["Peter Weir"],
    categories: ["Comedy", "Drama"],
    year: 1989,
    rate: 8.1
  },
  {
    image: "https://i.imgur.com/9pbITxc.jpg",
    title: "Cinema Paradiso",
    director: ["Giuseppe Tornatore"],
    categories: ["Drama", "Romance"],
    year: 1988,
    rate: 8.5
  },
  {
    image: "https://i.imgur.com/yQPuukc.jpg",
    title: "Scrooged",
    director: ["Richard Donner"],
    categories: ["Comedy", "Drama", "Fantasy"],
    year: 1988,
    rate: 6.9
  },
  {
    image: "https://i.imgur.com/MnfPScM.jpg",
    title: "Clue",
    director: ["Jonathan Lynn"],
    categories: ["Comedy", "Mystery", "Crime"],
    year: 1985,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/FiZrFRR.jpg",
    title: "The NeverEnding Story",
    director: ["Wolfgang Petersen"],
    categories: ["Adventure", "Family", "Drama"],
    year: 1984,
    rate: 7.4
  },
  {
    image: "https://i.imgur.com/HtKaqnK.jpg",
    title: "The Dead Zone",
    director: ["David Cronenberg"],
    categories: ["Drama", "Horror", "Sci-fi"],
    year: 1983,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/MfWiWhV.jpg",
    title: "Octopussy",
    director: ["John Glen"],
    categories: ["Action", "Adventure", "Thriller"],
    year: 1983,
    rate: 6.5
  },
  {
    image: "https://i.imgur.com/aZ1nyN6.jpg",
    title: "Bill & Ted's Excellent Adventure",
    director: ["Stephen Herek"],
    categories: ["Adventure", "Comedy", "Music"],
    year: 1989,
    rate: 6.9
  },
  {
    image: "https://i.imgur.com/WiKNzHQ.jpg",
    title: "Coming to America",
    director: ["John Landis"],
    categories: ["Comedy", "Romance"],
    year: 1988,
    rate: 7.1
  },
  {
    image: "https://i.imgur.com/wjta2sx.jpg",
    title: "Videodrome",
    director: ["David Cronenberg"],
    categories: ["Horror", "Thriller", "Sci-fi"],
    year: 1983,
    rate: 7.2
  },
  {
    image: "https://i.imgur.com/55ni1zn.jpg",
    title: "Stand By Me",
    director: ["Rob Reiner"],
    categories: ["Adventure", "Drama"],
    year: 1986,
    rate: 8.1
  },
  {
    image: "https://i.imgur.com/T8XYp5H.jpg",
    title: "Hellraiser",
    director: ["Clive Barker"],
    categories: ["Horror", "Thriller"],
    year: 1987,
    rate: 7.0
  },
  {
    image: "https://i.imgur.com/amOE0Wa.jpg",
    title: "The Blues Brothers",
    director: ["John Landis"],
    categories: ["Action", "Adventure", "Comedy"],
    year: 1980,
    rate: 7.9
  },
  {
    image: "https://i.imgur.com/z5rpGSS.jpg",
    title: "Back to the Future II",
    director: ["Robert Zemeckis"],
    categories: ["Adventure", "Comedy", "Sci-fi"],
    year: 1989,
    rate: 7.9
  }
]

export default arrayMovies;