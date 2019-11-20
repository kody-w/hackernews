import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hnApi";

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    setStoryIds('hello');
  }, []);

  return <p>{storyIds}</p>;
};
