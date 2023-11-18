import React from 'react'

const DownArrow = ({width = 12}) => {
  return (
    <svg
      width={width}
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="M11 1.75961L6.88384 5.8758C6.39773 6.36191 5.60228 6.36191 5.11617 5.8758L1 1.75961"
        stroke="#585858"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownArrow
