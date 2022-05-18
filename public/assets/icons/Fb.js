import * as React from "react";

function Fb(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 19" fill="none" {...props}>
      <path
        d="M18.665 0H1.185a.76.76 0 00-.76.76v17.48c0 .42.34.76.76.76h17.48c.42 0 .76-.34.76-.76V.76a.76.76 0 00-.76-.76zM16.47 5.546h-1.518c-1.19 0-1.42.565-1.42 1.396v1.831h2.84l-.37 2.867h-2.47V19h-2.961v-7.358H8.093V8.773h2.478V6.66c0-2.454 1.498-3.791 3.688-3.791 1.05 0 1.95.078 2.213.114v2.563h-.002z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoFb = React.memo(Fb);
export default MemoFb;
