import React from "react";

export const SaveIcon = (props) => {
  const { ...remaining } = props;
  return (
    <svg id="Layer_1" version="1.1" viewBox="0 0 30 30" {...remaining}>
      <path
        fill="currentColor"
        d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z"
      />
      <rect height="5" width="2" x="16" y="4" />
    </svg>
  );
};
