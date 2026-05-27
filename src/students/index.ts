import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

// מייבא את הקומפוננטות שלך
import SheviShapiraCard from "./shevi-shapira/Card";
import SheviShapiraJokePage from "./shevi-shapira/JokePage";

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
  {
  id: "shevi-shapira",
  name: "שבי שפירא",
  jokeTitle: "אלגוריתם בסופרמרקט 🛒", // הכותרת החדשה והמתאימה
  CardComponent: SheviShapiraCard,
  JokePageComponent: SheviShapiraJokePage,
},
];

export default students;