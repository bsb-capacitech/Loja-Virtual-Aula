import { useMemo } from 'react';

export function useCartTotal(cartItems) {
  const calcTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return calcTotal;
}
