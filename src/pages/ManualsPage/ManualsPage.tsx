import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";

import PrincipalColorArrowIcon from "../../assets/PrincipalColorArrowIcon.svg";

function ManualsPage() {
  function toggleManual(manualId: string) {
    let manual = document.getElementById(manualId);

    if (manual?.classList.contains("opened")) {
      manual.classList.remove("opened");
    } else {
      manual?.classList.add("opened");
    }
  }

  return (
    <div className="manuals-page">
      <Header />

      <div className="page-title">Manuais</div>

      <div className="manuals-page-content">
        <div id="storage_manual" className="manual-container">
          <div
            className="manual-header-container"
            onClick={() => {
              toggleManual("storage_manual");
            }}
          >
            <span className="manual-header-title">Manual de Armazenamento</span>
            <div className="chevron">
              <img
                className="button-arrow"
                src={PrincipalColorArrowIcon}
                alt="Ícone de Seta"
              />
            </div>
          </div>
          <div className="manual-text-container">
            <p className="manual">
              Para realizar o armazenamento de medicamentos, siga as seguintes
              orientações:
              <br />
              <br />
              - Mantenha os medicamentos em lugares secos e frescos, seguros e
              específicos para este fim, fora do alcance de crianças e animais;
              <br />
              - Evite guardar os medicamentos com produtos de limpeza,
              perfumaria e alimentos;
              <br />
              - Guarde na geladeira apenas os medicamentos líquidos, conforme
              orientação de um profissional de saúde;
              <br />
              - Não guarde medicamentos na porta da geladeira ou próximo do
              congelador;
              <br />
              - A insulina, por exemplo, perde o efeito se for congelada;
              <br />
              - Se você utilizar porta-comprimidos para guardar os medicamentos,
              deixe somente a quantidade suficiente para 24 horas.;
              <br />
              - Os recipientes devem ser cuidadosamente mantidos limpos e secos;
              <br />- O armazenamento de medicamentos deve ser individualizado
              para evitar erros e trocas com medicamentos de outras pessoas.
            </p>
            <div className="manual-font">
              Fonte:
              <button
                className="button-link"
                onClick={() => {
                  window.open(
                    "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-idosa/uso-e-armazenamento-de-medicamentos#:~:text=Os%20recipientes%20devem%20ser%20cuidadosamente,os%20medicamentos%20em%20lugares%20claros."
                  );
                }}
              >
                {" "}
                Ministério da Saúde
              </button>
            </div>
          </div>
        </div>
        <div id="disposal_manual" className="manual-container">
          <div
            className="manual-header-container"
            onClick={() => {
              toggleManual("disposal_manual");
            }}
          >
            <span className="manual-header-title">Manual de Descarte</span>
            <div className="chevron">
              <img
                className="select-arrow"
                src={PrincipalColorArrowIcon}
                alt="Ícone de Seta"
              />
            </div>
          </div>
          <div className="manual-text-container">
            <p className="manual">
              Para realizar o descarte de medicamentos vencidos e/ou em desuso,
              procure pontos de coleta em:
              <br />
              <br />
              - Farmácias;
              <br />
              - Drogarias;
              <br />
              - Unidade Básica de Saúde (UBS).
              <br />
              <br />
              Caso não haja pontos de coleta, essas instituições poderão lhe
              fornecer mais informações para que o descarte seja realizado
              corretamente.
            </p>
            <div className="manual-font">
              Fonte:
              <button
                className="button-link"
                onClick={() => {
                  window.open(
                    "https://www.gov.br/mma/pt-br/noticias/governo-federal-regulamenta-correto-descarte-de-medicamentos#:~:text=Governo%20Federal%20regulamenta%20correto%20descarte%20de%20medicamentos,-A%20medida%20busca&text=A%20partir%20de%20agora%2C%20os,outros%20pontos%20definidos%20pelos%20comerciantes."
                  );
                }}
              >
                {" "}
                Ministério da Saúde
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManualsPage;
