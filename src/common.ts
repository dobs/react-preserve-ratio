export type Align = "center" | "left" | "right";
export type VAlign = "bottom" | "center" | "top";

export const alignMap: { [_: string]: string } = {
  center: "space-around",
  left: "flex-start",
  right: "flex-end",
};

export const valignMap: { [_: string]: string } = {
  bottom: "flex-end",
  center: "center",
  top: "flex-start",
};
