import React, { useEffect, useState } from "react";
import "./PopUpCEP.scss";

const Popup = ({ isOpen, onClose, onSaveCEP }) => {
  const [cepInput, setCepInput] = useState("");
  const [cidade, setCidade] = useState(""); // Estado para cidade
  const [estado, setEstado] = useState(""); // Estado para estado

  useEffect(() => {
    // Função para buscar dados do CEP
    const fetchCEPData = async () => {
      if (cepInput.length === 8) { // Verifica se o CEP tem 8 caracteres
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
          const data = await response.json();
          if (!data.erro) {
            setCidade(data.localidade); // Preenche a cidade
            setEstado(data.uf); // Preenche o estado
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
        }
      }
    };
     // Chama a função quando o CEP mudar
     if (cepInput.length === 8) {
      fetchCEPData();
    } else {
      setCidade(""); // Reseta cidade e estado se o CEP estiver incompleto
      setEstado("");
    }
  }, [cepInput]); // Só executa a cada alteração no cepInput

  if (!isOpen) return null;

  const handleSaveCEP = () => {
    if (cepInput) {
      localStorage.removeItem("userCEP"); // Remove o CEP antigo
      localStorage.setItem("userCEP", cepInput); // Salva o novo CEP
      onSaveCEP(cepInput); // Atualiza o estado no Header
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
                value={cidade}
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
                value={estado}
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
