
import { Request, Response } from "express";
import { calculateBoxPlot } from "../controller/boxplotController";

export const getBoxPlot = (req: Request, res: Response) => {
  try {
    const result = calculateBoxPlot();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error calculating boxplot." });
  }
};
