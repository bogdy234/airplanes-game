export interface CellContent {
  isAirplane: boolean;
  showOutcome: boolean;
}

export interface DateTime {
  startDate: Date;
  endDate: Date;
}

export interface Stats {
  date: Date;
  duration: string;
  strikes: number;
}
