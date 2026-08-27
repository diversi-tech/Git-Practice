import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import TamarJokePage from "./TamarZ/JokePage";
import TamarCard from "./TamarZ/Card";

import HennyCard from "./henny/Card";
import HennyJokePage from "./henny/JokePage";

import AlumasHilatCard from "./aluma-shilat/Card";
import AlumasHilatJokePage from "./aluma-shilat/JokePage";

import YaelCard from "./yael/Card.txt";
import YaelJokePage from "./yael/JokePage";

import AvitalForshnerCard from "./avitalForshner/Card";
import AvitalForshnerJokePage from "./avitalForshner/JokePage";

import AvitalZakCard from "./avital-zak/Card";
import AvitalZakJokePage from "./avital-zak/JokePage";

import ShilatBenGigiCard from "./shilat-ben-gigi/Card";
import ShilatBenGigiJokePage from "./shilat-ben-gigi/JokePage";
import AvishagCard from "./avishag/Card";
import AvishagJokePage from "./avishag/jokePage";

import MaliHashayCard from "./mali-hashay/Card";
import MaliHashayJokePage from "./mali-hashay/JokePage";

const students: Student[] = [
  {
    id: "avishag",
    name: "אבישג בן דוד",
    jokeTitle: "המחשב החולה",
    CardComponent: AvishagCard,
    JokePageComponent: AvishagJokePage,
  },
  {
    id: "shilat-ben-gigi",
    name: "שילת בן גיגי",
    jokeTitle: "הרמה הבאה",
    CardComponent: ShilatBenGigiCard,
    JokePageComponent: ShilatBenGigiJokePage,
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
   {
      id: "tamar z",
      name: "תמר ז",
      jokeTitle: "THE BUS",
      CardComponent: TamarCard,
      JokePageComponent: TamarJokePage,
   },
  {
    id: "avital-zak",
    name: "אביטל זק",
    jokeTitle: "המחשב והווירוס",
    CardComponent: AvitalZakCard,
    JokePageComponent: AvitalZakJokePage,
  },
  {
    id: "chani-chanzin",
    name: "אפרת יעקובי",
    jokeTitle: "המתכנתת והבאגים",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },

  {
    id: "henny",
    name: "הני כהן",
    jokeTitle: "למה מתכנתים מעדיפים Dark Mode?",
    CardComponent: HennyCard,
    JokePageComponent: HennyJokePage,
  },
  {
    id: "alumas-hilat",
    name: "אלומה חילאת",
    jokeTitle: "המחשב החולה",
    CardComponent: AlumasHilatCard,
    JokePageComponent: AlumasHilatJokePage,
  },
  
  {
    id: "yael",
    name: "יעל סגיס",
    jokeTitle: "פיצריה",
    CardComponent: YaelCard,
    JokePageComponent: YaelJokePage,
  },
  {
    id: "mali-hashay",
    name: "מלי חשאי",
    jokeTitle: "השימפנזים בחורף",
    CardComponent: MaliHashayCard,
    JokePageComponent: MaliHashayJokePage,
  },
  {
    id: "avital-forshner",
    name: "אביטל פורשנר",
    jokeTitle: "כרוב וכרובית",
    CardComponent: AvitalForshnerCard,
    JokePageComponent: AvitalForshnerJokePage,
  },
];

export default students;