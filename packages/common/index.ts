import * as RockPaperScissors from "./rock-paper-scissors";
import * as ConnectFour from "./connect-four";

export enum GAME_NAMESPACES {
  ROCK_PAPER_SCISSORS = RockPaperScissors.slug,
  CONNECT_FOUR = ConnectFour.slug,
}

export enum TIERS_IDS {
  ALPHA = "5f534987-4ca5-4b27-8597-835fc9512f85",
  BETA = "397bf400-1d70-4edb-927f-ea6306ea6240",
  GAMMA = "0e8cb282-7bab-4631-8b3a-76795e3cb92f",
  FREE = "8abf627a-bd65-4c50-9e16-52554e4064f9",
}

export { RockPaperScissors, ConnectFour };
