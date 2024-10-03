import { useMemo } from 'react';
import { useCart } from '../context/useCart';

function PurchaseHistory() {
  const { purchaseHistory } = useCart();

  const memoizedHistory = useMemo(() => purchaseHistory, [purchaseHistory]);

  if (memoizedHistory.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Histórico de Compras</h2>
        <p>Você ainda não realizou nenhuma compra.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Histórico de Compras</h2>
      <ul className="list-group">
        {
            purchaseHistory.map(purchase => (
            <li key={purchase.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>Compra em {purchase.date}</h5>
                    <ul>
                    {
                        purchase.items.map(item => (
                            <li key={item.id} className="d-flex justify-content-between">
                            <div>
                                <img src={item.image} alt={item.title} width="50" className="me-3"/>
                                <span>{item.title} - {item.quantity}x</span>
                            </div>
                            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div>
                    <h5>Total da Compra: R$ {purchase.total}</h5>
                </div>
                </div>
            </li>
            ))
        }
      </ul>
    </div>
  );
}

export default PurchaseHistory;
