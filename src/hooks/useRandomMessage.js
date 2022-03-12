import { useEffect, useState } from "react";

const textMap = [
  "Remixando sua música preferida",
  "Ajustando o equalizador",
  "Dançando com a música",
  "Traduzindo aquela música que você escuta em inglês e canta em árabe.",
];

export const useRandomMessage = () => {
  const [counter, setCounter] = useState(Math.floor(Math.random() * textMap.length));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((_counter) => (_counter + 1) % textMap.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [counter]);

  return textMap[counter];
};
