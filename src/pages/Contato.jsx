import { useEffect, useState } from "react";

export default function Contato() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `sua contagem é ${count}`;

    return () => {
      console.log("componente desmontado");
    };
  }, [count]);

  return (
    <div>
      <p>sua contagem é {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
