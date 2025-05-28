export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large"; // ✅ Corrected
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // ✅ Corrected
}
