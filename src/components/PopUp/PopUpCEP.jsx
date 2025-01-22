import React, { useEffect, useState } from "react";
import "./PopUpCEP.scss";

const Popup = ({ isOpen, onClose, onSaveCEP }) => {
  const [cepInput, setCepInput] = useState("");

  if (!isOpen) return null;

  const handleSaveCEP = () => {
    if (cepInput) {
      onSaveCEP(cepInput); // Chama a função passada de volta para o Header
      onClose(); // Fecha o popup
    }
  };

  return (
    <div className="fundo-popup">
      <div className="conteudo-popup">
        <button onClick={onClose} className="btnFechar">
          <img src="/static/images/btnX.png" alt="Botão fechar" />
        </button>
        <p className="tituloPop">
          Personalize sua experiência e encontre produtos perto de você
        </p>
        <div>
          <p>Código postal*</p>
          <input
            type="text"
            name="codPostal"
            id="codPostal"
            className="inputDados"
            placeholder="00000-000"
            value={cepInput}
            onChange={(e) => setCepInput(e.target.value)}
          />
        </div>
        <div className="cidadesEstado">
          <div>
            <label htmlFor="cidade">
              Cidade
              <input
                type="text"
                name="cidade"
                id="cidade"
                className="inputDados"
                placeholder="Opcional"
              />
            </label>
          </div>
          <div>
            <label htmlFor="estado">
              Estado
              <input
                type="text"
                name="estado"
                id="estado"
                className="inputDados"
                placeholder="Opcional"
              />
            </label>
          </div>
        </div>
        <input
          type="button"
          value="Salvar endereço"
          className="salvarEndereco"
          onClick={handleSaveCEP}
        />
      </div>
    </div>
  );
};

export default Popup;
