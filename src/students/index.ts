<<<<<<< HEAD
import { Student } from "../types";
=======
 import { Student } from "../types";
>>>>>>> 8737237 (add: tova joke)

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

<<<<<<< HEAD
=======
import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";

>>>>>>> 8737237 (add: tova joke)
// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
<<<<<<< HEAD
];

export default students;
=======
  {
    id: "tova",
    name: "טובה",
    jokeTitle: "למה האופניים נפלו?",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage,
  },
];

export default students;
>>>>>>> 8737237 (add: tova joke)
