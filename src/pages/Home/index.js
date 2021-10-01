import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_detalhe1.jpg?ts=1626193145?ims=280x280" 
             alt="Tênis" />

        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}