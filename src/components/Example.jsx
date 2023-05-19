import React, { useState, useEffect  } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”  const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  const [contador, setContador] = useState(0);

    // Similar a componentDidMount y componentDidUpdate:  
    useEffect(() => {    // Actualiza el título del documento usando la Browser API    
      document.title = `You clicked ${count} times`;  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>

      <p>You clicked {contador} times</p>
      <button onClick={()=> setContador(contador + 1 )}>
        Click me 2
      </button>
    </div>
  );
}
export default Example;