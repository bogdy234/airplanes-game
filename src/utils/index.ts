import { CellContent } from "../types";

export const randomNumber = (upperLimit: number) => {
  return Math.floor(Math.random() * upperLimit);
};

export const getCells = (size: number) => {
  const newCells: CellContent[] = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newCells.push({ isAirplane: false, showOutcome: false });
    }
  }

  const randomIndex = randomNumber(size * size);
  newCells[randomIndex] = { ...newCells[randomIndex], isAirplane: true };

  return newCells;
};

export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
}
