import React, { useState } from "react";

import Splash from "./1/splash";
import Login from "./1/login";
import Cadastro from "./1/cadastro";

import Codigo from "./2/Codigo";
import NovaSenha from "./2/novaSenha";
import RecuperarSenha from "./2/RecuperarSenha";
import SenhaAlterada from "./2/senhaAlterada";

import BoasVindas from "./3/boasVindas";
import EscolhaPerfil from "./3/escolhaPerfi.";
import Modulos from "./3/modulos";
import Inicio from "./3/inicio";

type Tela =
  | "splash"
  | "login"
  | "cadastro"
  | "recuperarSenha"
  | "codigo"
  | "novaSenha"
  | "senhaAlterada"
  | "boasVindas"
  | "escolhaPerfil"
  | "modulos"
  | "inicio";

type Perfil = "mulher" | "homem" | "outro";

type Modulo =
  | "academia"
  | "menstruacao"
  | "gestacao";

export default function App() {
  const [tela, setTela] = useState<Tela>("splash");

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number>(0);

  const [perfil, setPerfil] = useState<Perfil | null>(null);

  const [modulosSelecionados, setModulosSelecionados] = useState<
    Modulo[]
  >([]);

  return (
    <>
      {/* SPLASH */}
      {tela === "splash" && (
        <Splash
          onFinish={() => setTela("login")}
        />
      )}

      {/* LOGIN */}
      {tela === "login" && (
        <Login
          onCadastro={() => setTela("cadastro")}
          onEsqueceuSenha={() => setTela("recuperarSenha")}
          onEntrar={() => setTela("boasVindas")}
        />
      )}

      {/* CADASTRO */}
      {tela === "cadastro" && (
        <Cadastro
          onVoltar={() => setTela("login")}
        />
      )}

      {/* RECUPERAR SENHA */}
      {tela === "recuperarSenha" && (
        <RecuperarSenha
          onVoltar={() => setTela("login")}
          onContinuar={() => setTela("codigo")}
        />
      )}

      {/* CÓDIGO */}
      {tela === "codigo" && (
        <Codigo
          onVoltar={() => setTela("recuperarSenha")}
          onContinuar={() => setTela("novaSenha")}
        />
      )}

      {/* NOVA SENHA */}
      {tela === "novaSenha" && (
        <NovaSenha
          onVoltar={() => setTela("codigo")}
          onContinuar={() => setTela("senhaAlterada")}
        />
      )}

      {/* SENHA ALTERADA */}
      {tela === "senhaAlterada" && (
        <SenhaAlterada
          onContinuar={() => setTela("login")}
        />
      )}

      {/* BOAS-VINDAS */}
      {tela === "boasVindas" && (
        <BoasVindas
          onContinuar={(nomeInformado, idadeInformada) => {
            setNome(nomeInformado);
            setIdade(idadeInformada);
            setTela("escolhaPerfil");
          }}
        />
      )}

      {/* ESCOLHA DO PERFIL */}
      {tela === "escolhaPerfil" && (
        <EscolhaPerfil
          onContinuar={(perfilEscolhido) => {
            setPerfil(perfilEscolhido);
            setTela("modulos");
          }}
        />
      )}

      {/* MÓDULOS */}
      {tela === "modulos" && (
        <Modulos
          perfil={perfil || "outro"}
          onContinuar={(modulos) => {
            setModulosSelecionados(modulos);
            setTela("inicio");
          }}
        />
      )}

      {/* INÍCIO */}
      {tela === "inicio" && (
        <Inicio
          nome={nome}
          idade={idade}
          perfil={perfil || "outro"}
          modulosSelecionados={modulosSelecionados}
          onModulos={() => setTela("modulos")}
        />
      )}
    </>
  );
}