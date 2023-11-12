import React from 'react'

const DownArrow = ({width = 12}) => {
  return (
    <svg
      width={width}
    //   height="8"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="M11 1.75961L6.88384 5.8758C6.39773 6.36191 5.60228 6.36191 5.11617 5.8758L1 1.75961"
        stroke="#585858"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default DownArrow
