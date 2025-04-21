// src/types/boxplot.ts
export interface BoxPlotResult {
    min: number;
    max: number;
    median: number;
    q1: number;
    q3: number;
    outliers: number[];
  }
  