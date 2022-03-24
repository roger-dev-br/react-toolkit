import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';

import { increment, selectCount, decrement, incrementByAmount, incrementAsync } from './counterSlice';

export function Counter() {
  const dispatch = useDispatch();
  // valor atual do contador
  const count = useSelector(selectCount);
  // estado local para a quantidade a ser adicionada
  const [amount, setAmount] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(amount)))}
        >
          Somar Quantia
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(amount)))}
        >
          Somar Asincrono
        </button>
      </div>
    </div>
  );
}
