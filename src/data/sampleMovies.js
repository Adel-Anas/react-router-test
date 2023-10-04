import Onepiece from "../images/One piece.jpg";
import BlueBeetle from "../images/Blue Beetle.jpg";
import SpiderMan from "../images/SpiderMan.jpg";
import TalkToMe from "../images/talk to me.jpg";

const sampleMovies = [
  {
    id : 1,
    title: "One piece",
    date: "2023",
    rating: 8.4,
    genre: "Action, Adventure, Comedy",
    imageUrl: Onepiece,
    trailerUrl: "https://www.youtube.com/watch?v=Ades3pQbeh8&pp=ygUZb25lIHBpZWNlIG5ldGZsaXggdHJhaWxlcg%3D%3D",
    description: "Young pirate Monkey D. Luffy as he sails across the seas with his Straw Hats gang in search of the mysterious One Piece treasure. "
    
  },

  {
    id : 2,
    title: "Blue Beetle",
    date: "2023",
    rating: 6.3,
    genre: "Sci-Fi, Adventure, Action",
    imageUrl: BlueBeetle,
    trailerUrl: "https://www.youtube.com/watch?v=4wxyy8Rcz4k",
    description: "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle. He's a superhero, whether he likes it or not."
  },

  {
    id : 3,
    title: "Spider-Man: Across the Spider-Verse",
    date: "2023",
    rating: 8.7,
    genre: "Animation, Adventure, Action",
    imageUrl: SpiderMan,
    trailerUrl: "https://www.youtube.com/watch?v=shW9i6k8cB0&pp=ygUlc3BpZGVybWFuIGFjcm9zcyBzcGlkZXIgdmVyc2UgdHJhaWxlcg%3D%3D",
    description : "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
  },
  {
    id : 4,
    title: "Talk to me",
    date: "2023",
    rating: 7.2,
    genre: "Thriller, Horror",
    imageUrl: TalkToMe,
    trailerUrl: "https://www.youtube.com/watch?v=PGo4wfCejsk&pp=ygUSdGFsayB0byBtZSB0cmFpbGVy",
    description: "The film follows a group of teenagers who discover they are able to contact spirits using a mysterious embalmed hand, only for things to go too far. Talk to Me premiered at the Adelaide Film Festival on 30 October 2022, and was released in Australia on 27 July 2023, by Maslow Entertainment."
  },
];

export default sampleMovies;
