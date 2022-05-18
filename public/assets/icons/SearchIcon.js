import * as React from "react";

function SearchIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.623 16.768l6.993 6.994a1.311 1.311 0 01-1.855 1.853l-6.993-6.993a10.4 10.4 0 111.853-1.854h.002zM10.4 18.199a7.8 7.8 0 100-15.6 7.8 7.8 0 000 15.6z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
