import { CellContent } from "./../../types/index";

export interface BoardProps {
  cells: CellContent[];
  onClickCell: (index: number) => void;
  size: number;
}
