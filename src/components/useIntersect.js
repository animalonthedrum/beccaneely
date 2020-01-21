import React, { useState, useEffect, useRef } from "react";

function useIntersection(options) {
  const [observerEntry, setEntry] = useState({});
  const elRef = useRef();

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        entries => setEntry(entries[0]),
        options
      );
      observer.observe(elRef.current);
      return () => observer.disconnect();
    },
    [elRef]
  );
  return { observerEntry, elRef };
}

function Intersect({ id, children }) {
  const { observerEntry, elRef } = useIntersection({ threshold: .2 });

  return (
    <div
      id={id}
      ref={elRef}
      data-visible={observerEntry.isIntersecting}
      className="reveal"
    >
      {children}
    </div>
  );
}

export default Intersect;