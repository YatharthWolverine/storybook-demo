import * as React from "react";

function Close(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M10.65 9.015l7.008-7.009A1.165 1.165 0 1016.009.357l-7.01 7.01L1.992.356a1.165 1.165 0 10-1.649 1.65l7.009 7.008-7.009 7.01a1.165 1.165 0 00.825 1.99c.298 0 .597-.114.824-.342L9 10.664l7.009 7.01a1.163 1.163 0 001.649 0 1.164 1.164 0 000-1.65l-7.009-7.009z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoClose = React.memo(Close);
export default MemoClose;
