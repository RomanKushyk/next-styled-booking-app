interface Props {
  color?: string;
  size?: number;
  direction?: "left" | "right";
}

export default function Chevron({ color, size, direction }: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: size ?? "100%",
        height: size ?? "100%",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transform: `scale(${direction === "left" ? 1 : -1})`,
        }}
      >
        <path
          d="M6.40304 11.5456C6.15393 11.7948 6.15393 12.2046 6.40304 12.4537L14.1173 20.168C14.3664 20.4171 14.7763 20.4171 15.0254 20.168C15.2745 19.9189 15.2745 19.509 15.0254 19.2599L7.76509 11.9997L15.0254 4.7394C15.2745 4.49029 15.2745 4.08047 15.0254 3.83136C14.7763 3.58225 14.3664 3.58225 14.1173 3.83136L6.40304 11.5456Z"
          fill={color ?? "currentColor"}
          style={{
            transition: "fill 0.3s linear",
          }}
        />
      </svg>
    </div>
  );
}
