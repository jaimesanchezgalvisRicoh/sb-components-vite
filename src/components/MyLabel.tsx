import "./MyLabel.css";

interface MyLabelProps {
  /**
   * Texto to Display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * All caps
   */
  allCaps?: boolean;
  /**
   * Secondary color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * fontColor
   */
  fontColor?: string;
}

/**
 * MyLabel is a simple component to display a label
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`${size} ${color} ${allCaps}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
