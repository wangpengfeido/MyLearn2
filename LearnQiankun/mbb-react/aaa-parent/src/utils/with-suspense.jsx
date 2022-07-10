import React, { Suspense } from "react";

export const withSuspense = Compoment => {
  return function (props) {
    return (
      <Suspense fallback={null}>
        <Compoment {...props}></Compoment>
      </Suspense>
    );
  };
};
