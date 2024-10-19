interface DownIconProps {
  className?: string;
}

function DownIcon({ className }: DownIconProps) {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.0332 1.5L4.03069 4.5L7.02818 1.5"
        stroke="#151D48"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownIcon;
