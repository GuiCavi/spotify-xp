import { useEffect, useState } from "react";

const textMapDefault = [
  "Remixando sua música preferida",
  "Ajustando o equalizador",
  "Dançando com a música",
  "Traduzindo aquela música que você escuta em inglês e canta em árabe.",
];

export const useRandomMessage = (textMap = textMapDefault, delay = 3000) => {
  const [counter, setCounter] = useState(Math.floor(Math.random() * textMap.length));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((_counter) => (_counter + 1) % textMap.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [counter]);

  return textMap[counter];
};
