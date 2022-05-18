import * as React from "react";

function TriangleYellow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 187 18" fill="none" {...props}>
      <path
        d="M73 18l15-9-15-9v18zM0 18l14-9L0 0v18zM173 18l14-9-14-9v18zM141 18l15-9-15-9v18z"
        fill="#FDF400"
      />
    </svg>
  );
}

const MemoTriangleYellow = React.memo(TriangleYellow);
export default MemoTriangleYellow;
