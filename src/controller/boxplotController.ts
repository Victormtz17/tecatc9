
import { numbers } from "../db/data";
import { BoxPlotResult } from "../types/boxplot";

function getMedian(arr: number[]): number {
  const mid = Math.floor(arr.length / 2);
  const sorted = [...arr].sort((a, b) => a - b);
  return arr.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export const calculateBoxPlot = (): BoxPlotResult => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const q1 = getMedian(sorted.slice(0, Math.floor(sorted.length / 2)));
  const q3 = getMedian(sorted.slice(Math.ceil(sorted.length / 2)));
  const median = getMedian(sorted);

  const iqr = q3 - q1;
  const min = Math.min(...sorted);
  const max = Math.max(...sorted);

  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;
  const outliers = sorted.filter(n => n < lowerFence || n > upperFence);

  return { min, max, median, q1, q3, outliers };
};
