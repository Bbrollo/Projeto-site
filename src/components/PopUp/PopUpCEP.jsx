import React, { useEffect, useState } from 'react';
import './PopUpCEP.scss';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Retorna null se o popup não estiver ativo

  return (
    <div className="fundo-popup">
      <div className="conteudo-popup">
      <button onClick={onClose} className='btnFechar'><img src="/static/images/btnX.png" alt="Botão fechar" /></button>
        <p className='tituloPop'>Personalize sua experiência e encontre produtos perto de você</p>
        <div>
            <p>Código postal*</p>
            <input type="text" name="codPostal" id="codPostal" className='inputDados' placeholder='00000-000'/>
        </div>
        <div className="cidadesEstado">
            <div>
                <label htmlFor="cidade">
                    Cidade
                    <input type="text" name="cidade" id="cidade" className="inputDados" placeholder='Opcional' />
                </label>
            </div>
        <div>
            <label htmlFor="estado">
                Estado
                <input type="text" name="estado" id="estado" className="inputDados" placeholder='Opcional' />
            </label>
        </div>
        </div>
        <input type="button" value="Salvar endereço" className='salvarEndereco' />
      </div>
    </div>
  );
};

export default Popup;
