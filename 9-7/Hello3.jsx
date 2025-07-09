import { useState } from 'react';
import Hello2 from './Hello2';  // ✅ Valid import
import './App.css';

function Hello3() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Good morning from Hello3</h1>
      <Hello2 />  {/* ✅ You need to use it */}
    </>
  );
}

export default Hello3;
