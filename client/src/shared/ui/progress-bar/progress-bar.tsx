import styles from "./progress-bar.module.scss"
import {FC} from "react";

export interface IProgressBar {
  /**
   * The percentage of progress to be displayed (0 to 100).
   */
  percentageProgress: number;

  /**
   * The background color of the progress bar. Default is '#434752'.
   * @default "#434752"
   */
  barColor?: string;

  /**
   * The color of the progress indicator. Default is '#5BD424'.
   * @default "#5BD424"
   */
  progressColor?: string;

  /**
   * The height of the progress bar. Default is '8px'.
   * @default "8px"
   */
  height?: string;
}

/**
 * Customizable progress bar component.
 *
 */
export const ProgressBar: FC<IProgressBar> = (props) => {
  const {percentageProgress, barColor = "#434752", progressColor = "#5BD424", height = "8px"} = props
  return (
    <div
      className={styles.bar}
      style={{background: barColor, height}}
    >
      <div
        className={styles.progress}
        style={{ background: progressColor, width: `${percentageProgress}%`}}/>
    </div>
  );
}

