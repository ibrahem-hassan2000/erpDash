interface EmployeesIconProps {
  className?: string;
  fill?: string;
}
function EmployeesIcon({ className, fill = "#026980" }: EmployeesIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_20700)">
        <path
          d="M9 12C12.309 12 15 9.309 15 6C15 2.691 12.309 0 9 0C5.691 0 3 2.691 3 6C3 9.309 5.691 12 9 12ZM9 2C11.206 2 13 3.794 13 6C13 8.206 11.206 10 9 10C6.794 10 5 8.206 5 6C5 3.794 6.794 2 9 2ZM10 15C10 15.552 9.552 16 9 16C5.14 16 2 19.14 2 23C2 23.552 1.552 24 1 24C0.448 24 0 23.552 0 23C0 18.038 4.038 14 9 14C9.552 14 10 14.448 10 15ZM21 14.051V14C21 12.897 20.103 12 19 12H17C15.897 12 15 12.897 15 14V14.051C13.308 14.296 12 15.742 12 17.5V20.5C12 22.43 13.57 24 15.5 24H20.5C22.43 24 24 22.43 24 20.5V17.5C24 15.742 22.692 14.296 21 14.051ZM15.5 16H20.5C21.327 16 22 16.673 22 17.5V18H14V17.5C14 16.673 14.673 16 15.5 16ZM20.5 22H15.5C14.673 22 14 21.327 14 20.5V20H17C17 20.552 17.448 21 18 21C18.552 21 19 20.552 19 20H22V20.5C22 21.327 21.327 22 20.5 22Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_20700">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EmployeesIcon;
