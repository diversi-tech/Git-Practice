import { Student } from "../types";
import EfratGibraltarCard from "./efrat-gibraltar/Card";
import EfratGibraltarJokePage from "./efrat-gibraltar/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";


import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import SaritJokePage from "./sarit-cohen/JokePage";

import MichaleCard from "./michale/Card";
import michaleJokePage from "./michale/JokePage";
import SaritCard from "./sarit-cohen/Card";
// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [

{
  id: "michale",
  name: "מיכל אילוז",
  jokeTitle: "בדיחת קרש",
  CardComponent: MichaleCard,
  JokePageComponent: michaleJokePage,
},

    {
    id: "efrat-gibraltar",
    name: "אפרת גיברלטר",
    jokeTitle: "חדשות רעות",
    CardComponent: EfratGibraltarCard,
    JokePageComponent: EfratGibraltarJokePage,
  },

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
   {
    id: "Sarit=Cohen",
    name: "שרית כהן",
    jokeTitle: "אופרת סבון",
    CardComponent: SaritCard,
    JokePageComponent: SaritJokePage,
  },
];

export default students;
