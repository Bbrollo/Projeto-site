import React from "react";
import './Footer.scss'
const Footer = () => {

    return(
        <footer>
            <div>
                <img src="\static\images\Logo-bebece-footer.svg" alt="Logo Bebecê" className="logo-bebece-footer"/>
            </div>
            <div className="redes-sociais">
                <a href="https://www.instagram.com/bebece/" target="_blank">
                    <img src="\static\images\instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/share/1BJmNFKTjG/?mibextid=wwXIfr" target="_blank">
                    <img src="\static\images\facebook.svg" alt="Facebook" />
                </a>
                <a href="https://br.pinterest.com/bebececalcados/" target="_blank">
                    <img src="\static\images\pinterest.svg" alt="Printerest" />
                </a>
                <a href="#" target="_blank">
                    <img src="\static\images\twitter.svg" alt="Twitter" />
                </a>
                <a href="https://www.tiktok.com/@bebece.br" target="_blank">
                    <img src="\static\images\tiktok.svg" alt="Tik Tok" />
                </a>
            </div>
            <div>
                <span className="titulo-link-footer">Sobre a empresa</span><br />
                <a href="#" className="links-footer">Quem somos</a><br />
                <a href="#" className="links-footer">Fale conosco</a>
            </div>
            <div>
                <span className="titulo-link-footer">Políticas</span><br />
                <a href="#" className="links-footer">Política de Privacidade</a><br />
                <a href="#" className="links-footer">Termos de Uso</a><br />
                <a href="#" className="links-footer">Política de Entrega</a><br />
                <a href="#" className="links-footer">Política de Cupom e Descontos</a>
            </div>
        </footer>

    )
}

export default Footer;