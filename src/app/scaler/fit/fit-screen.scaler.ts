import { Scaler } from "../scaler";
import { Project } from "../../model/project/project.model";

export class FitScreenScaler implements Scaler {
    compute(project: Project, previewContainerWidth: number, previewContainerHeight: number, beadSize: number): number {
        const expectedSize = project.nbBoardWidth * project.board.nbBeadPerRow * beadSize;
        return +(((previewContainerWidth) / expectedSize).toFixed(2));
    }
}