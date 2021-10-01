import React from 'react';
import { 
  MdRemoveCircleOutline, 
  MdAddCircleOutline, 
  MdDelete } from 'react-icons/md';

import { 
  Container, 
  ProductTable, 
  Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img 
                  src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Tênis muito massa</strong>
                <span>R$134,20</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="7159c1" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$400,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="9159c1" />
                </button>
              </td>
            </tr>
          </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>R$139,90</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;