
import { Router } from "express";
import { getBoxPlot } from "../handler/boxplotHandler";

const router = Router();

router.get("/boxplot", getBoxPlot);

export default router;
