import { useState } from "react";

function usePokemon(datas) {
  const [index, setIndex] = useState(0);

  const currentPokemon = datas[index];

  const total = datas.length;

  const prev = () => setIndex(Math.max(index - 1, 0));

  const next = () => setIndex(Math.min(index + 1, total - 1));

  const selectByName = (query) => {
    const newIndex = datas.findIndex((d) => d.name === query);

    if (newIndex !== -1) setIndex(newIndex);
  };

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return {
    currentPokemon,
    total,
    index,
    prev,
    next,
    isFirst,
    isLast,
    selectByName,
  };
}

export default usePokemon;
