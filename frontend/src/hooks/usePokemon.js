import { use, useState } from "react";

function usePokemon(data) {
  const [index, setIndex] = useState(0);

  const currentPokemon = data[index];

  const total = data.length;

  const prev = Math.max(index - 1, 0);

  const next = Math.min(index + 1, total - 1);

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return { currentPokemon, total, index, prev, next, isFirst, isLast };
}

export default usePokemon;
