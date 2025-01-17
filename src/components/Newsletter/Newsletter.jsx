import React, { useState } from "react";
import './Newsletter.scss';

const Newsletter = () => {

    const [isSubscribed, setIsSubscribed] = useState(false); 
    const[copiado, setCopiado] = useState(false)

    function sendEmailCupom() {
        setIsSubscribed(true); 
    }

    function copiar(){
        const textoCupom = "BEMVINDA";  // O texto que você quer copiar
        const textArea = document.createElement("textarea");
        textArea.value = textoCupom;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); 
        
    }

    return(
        <div className="container-newsletter">
            {isSubscribed ? (
                <>
                     Utilize o cupom abaixo e garanta seu desconto!
                    <div className="container-codigo-desconto">
                    <span className="codigo-desconto-texto">BEMVINDA</span>
                        <input type="button" value={copiado ? "Copiado" : "Copiar"} className="btn-copiar-desconto" onClick={copiar}/>
                    </div>
                </>
            ) : (
                <>
                    <label htmlFor="email" className="texto-newsletter" >Cadastre-se e receba 10% OFF na sua primeira compra!</label>
                    <div className="container-inputs-newsletter">
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" className="input-email"/>
                        <input type="button" value="ENVIAR" className="btn-enviar-newsletter" onClick={sendEmailCupom}/>
                    </div>
                </>
            )}   
        </div>
    );
};
export default Newsletter;