/* eslint import/no-webpack-loader-syntax: off */
/* eslint react/jsx-no-target-blank: off */

import React from "react";
import { Appear, Deck, Heading, Image, Slide, Text, List, ListItem, CodePane } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import "normalize.css";

const images = {
  bg: require("../assets/bg.jpg"),
  bgCapa: require("../assets/bg_capa.jpg"),
  engSimb: require("../assets/eng_simb.png"),
  engSimbWhite: require("../assets/eng_simb_white.png"),
  caniuse: require("../assets/caniuse.png"),
  saw: require("../assets/saw.jpg"),
  wannaPlay: require("../assets/do-you-wanna-play-a-game.jpg"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#003958",
    tertiary: "#3787b2",
    quaternary: "#A9A9A9",
    default: "#333",
  },
  {
    primary: "Open Sans",
    secondary: "Anton",
  }
);

const HeadingTitle = ({ children, ...props }) => (
  <Heading textAlign="left" margin="0 0 40px" textFont="secondary" size={3} textColor="secondary" {...props}>
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  renderSlideCapa() {
    return (
      <Slide bgImage={images.bgCapa}>
        <Heading margin="40px 0 0 520px" textFont="secondary" size={3} caps lineHeight={1} textColor="secondary">
          Soluções WEB
        </Heading>
        <Heading
          textFont="secondary"
          size={5}
          style={{ position: "absolute", bottom: 90, right: 50 }}
          textColor="tertiary">
          Prof. Lucas Ferreira
        </Heading>
      </Slide>
    );
  }
  renderSlideTitulo(title) {
    return (
      <Slide bgColor="secondary">
        <Image src={images.engSimbWhite} width={253} margin="-60px auto 110px" />
        <Heading textFont="secondary" size={1} caps fit lineHeight={1} textColor="primary" style={{ fontWeight: 400 }}>
          {title}
        </Heading>
      </Slide>
    );
  }
  renderSlideTituloImagem(title, img = null, width = 600) {
    return (
      <Slide bgImage={images.bg} bgPosition="bottom right">
        <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
          {title}
        </HeadingTitle>
        {!!img && <Image src={img} width={width} margin="42px auto 0" />}
      </Slide>
    );
  }
  renderSlideTituloLista(title, items = [], beforeChildren = null, afterChildren = null) {
    return (
      <Slide bgImage={images.bg} bgPosition="bottom right">
        <HeadingTitle size={6} margin="0 0 16px">
          {title}
        </HeadingTitle>
        {beforeChildren}
        <List>
          {items.map((item, i) => (
            <Appear key={i}>
              <ListItem textSize={23} margin="0 0 14px" style={{ padding: 0, listStyle: "none" }}>
                {item}
              </ListItem>
            </Appear>
          ))}
        </List>
        {afterChildren}
      </Slide>
    );
  }
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {this.renderSlideCapa()}
        {this.renderSlideTitulo("Front­end: HTML e CSS")}
        {this.renderSlideTituloLista("HTML", [
          "HyperText Markup Language, ou linguagem de marcação",
          "É a principal linguagem utilizada na criação de sites e serviços WEB",
          "Documentos HTML normalmente são interpretados por Navegadores",
          "Foi criada por Tim Berners-Lee junto da WWW",
          "Teve sua primeira especificação ofical em 1993",
          "Tornou-se padronizada a partir do HTML 2.0 em 1995",
          "Em 1999 publicou-se a especificação do HTML 4.0 (amplamente usada até hoje)",
          "No ano 2000 a linguagem tornou-se uma normal internacional → ISO 15445:2000",
          "Em 2014 publicou-se o HTML 5.0 (versão atual)",
        ])}
        {this.renderSlideTituloLista("A linguagem (de marcação)", [
          "Todo documento HTML possui marcadores",
          "Que são palavras entre parênteses angulares",
          "Esses marcadores são os comandos de formatação da linguagem",
          "Um elemento é formado por um nome de marcador (tag), atributos, valores e filhos",
        ])}
        <Slide bgImage={images.bg} bgPosition="top left">
          <Appear>
            <div>
              <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
                Exemplo de elemento com filho
              </HeadingTitle>
              <CodePane
                lang="html"
                source={['<a href="http://www.satc.edu.br">Site da SATC</a>'].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <HeadingTitle textAlign="center" size={6} margin="66px auto 0">
                Exemplo de elemento sem filho
              </HeadingTitle>
              <CodePane
                lang="html"
                source={["<br />", "<hr />", '<img src="minhaImagem.png" alt="Minha Imagem" />'].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
            Estrutura Básica de um Documento HTML
          </HeadingTitle>
          <CodePane
            lang="html"
            source={require("!raw-loader!../assets/html.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
            DOCTYPE
          </HeadingTitle>
          <Appear>
            <div>
              <CodePane
                lang="html"
                source={["<!DOCTYPE html> <!-- HTML 5 -->"].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                lang="html"
                source={[
                  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">',
                ].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                lang="html"
                source={[
                  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',
                ].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                lang="html"
                source={[
                  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
                ].join("\n")}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        {this.renderSlideTituloLista("Tags importantes (e quase obrigatórias)", [
          <span>
            <code>{`<html>`}</code> : define o início de um documento HTML
          </span>,
          <span>
            <code>{`<head>`}</code> : define o cabeçalho de um documento HTML
          </span>,
          <span>
            <code>{`<body>`}</code> : define o conteúdo principal, o corpo do documento e esta é a parte do documento
            HTML que é exibida no navegador
          </span>,
        ])}
        {this.renderSlideTituloLista("Cabeçalho (HEAD)", [
          "Inclui meta informações sobre documento",
          "Campos de configuração do site (responsividade, favicons, preload e etc)",
          "Usados por mecanismos de busca ou leitores de tela",
          "Elementos externos (assets) carregados com prioridade",
          <span>
            Tags mais usadas: <code>{`<title>`}</code>, <code>{`<meta>`}</code>, <code>{`<link>`}</code>,{" "}
            <code>{`<style>`}</code> e <code>{`<script>`}</code>
          </span>,
          "Não confundir com o topo visual do site (HEADER)",
        ])}
        {this.renderSlideTituloLista(
          "Corpo (BODY)",
          [
            <span>
              <code>{`<header>`}</code> : topo do site
            </span>,
            <span>
              <code>{`<footer>`}</code> : rodapé
            </span>,
            <span>
              <code>{`<h1>, <h2>, ... <h6>`}</code> : tags de título por ordem de relevância
            </span>,
            <span>
              <code>{`<p>`}</code> : parágrafo
            </span>,
            <span>
              <code>{`<br />`}</code> : quebra de linha
            </span>,
            <span>
              <code>{`<img />`}</code> : imagem
            </span>,
            <span>
              <code>{`<table>, <tr>, <td>`}</code> : tabela (dados tabulares)
            </span>,
            <span>
              <code>{`<div>`}</code> : divisões ou blocos
            </span>,
            <span>
              <code>{`<b>, <i>, <u> e <s>`}</code> : negrito, itálico, sublinhado e riscado
            </span>,
            <span>
              <code>{`<a>`}</code> : hiper-ligação, link ou âncora
            </span>,
            <span>
              <code>{`<input>, <select> ou <textarea>`}</code> : campos de formulário
            </span>,
            <span>
              <code>{`<button>`}</code> : botões
            </span>,
            "entre outras várias tags",
          ],
          <Text textAlign="left" textSize={21} margin="6px auto 12px">
            Qualquer elemento real, visual (ou não) a ser disposto em um site/aplicação web.
          </Text>
        )}
        {this.renderSlideTituloImagem("LET THE GAMES BEGIN", images.saw, 480)}
        {this.renderSlideTituloLista("HTML5", [
          "É a quinta versão da linguagem HTML",
          "Traz consigo importantes mudanças quanto ao papel do HTML no mundo da Web",
          "Novas API’s e funcionalidades sintáticas, semânticas e foco na acessibilidade",
          "Possibilita o uso de novos recursos antes possíveis apenas com a aplicação de outras tecnologias",
          "Suporte para as mais recentes multimídias",
          <span>
            Novas tags: <code>{`<video>`}</code>, <code>{`<audio>`}</code>, <code>{`<canvas>`}</code>,{" "}
            <code>{`<section>`}</code>, <code>{`<main>`}</code>, <code>{`<article>`}</code>, <code>{`<header>`}</code>,{" "}
            <code>{`<menu>`}</code> e <code>{`<nav>`}</code>
          </span>,
          <span>
            Lista completa de novas tags:{" "}
            <a href="https://pt.wikipedia.org/wiki/HTML5#Novos_elementos_do_HTML5" target="_blank">
              https://pt.wikipedia.org/wiki/HTML5#Novos_elementos_do_HTML5
            </a>
          </span>,
        ])}
        {this.renderSlideTitulo("OK, mas e o tal do CSS?")}
        {this.renderSlideTituloLista("Cascading Style Sheets", [
          "Ou folha de estilos em cascata",
          "É um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web",
          "Proposto por Håkon Wium Lie (Opera Foundation) em 1994",
          "Primeira versão oficial em 1996",
          "Sintaxe simples baseada em seletores e propriedades",
          "Documentos inline ou externos",
        ])}
        {this.renderSlideTituloLista(
          "Comofas?",
          [
            "Uma instrução CSS consiste em um seletor e um bloco de declaração",
            "Cada declaração contém uma propriedade e um valor, separados por dois pontos (:)",
            "Cada declaração finalizada por ponto e vírgula (;)",
            "Seletores são usados para declarar a quais elementos de marcação um estilo se aplica",
          ],
          null,
          <Appear>
            <CodePane
              lang="html"
              source={["selector [, selector2, ...][:pseudo-class] {", "  property: value;", "}"].join("\n")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        )}
        {this.renderSlideTituloLista(
          "Seletores",
          [
            <span>
              elemento do tipo: <code>{`element_name { style definition; }`}</code>
            </span>,
            <span>
              todos os elementos com a classe: <code>{`.class_name { style definition; }`}</code>
            </span>,
            <span>
              o elemento com o id: <code>{`#id_of_element { style definition; }`}</code>
            </span>,
          ],
          <Text textAlign="left" textSize={21} margin="6px auto 12px">
            Tipos de seletores mais comuns:
          </Text>
        )}
        {this.renderSlideTituloImagem("DO YOU WANNA PLAY A GAME?", images.wannaPlay, 480)}
        {this.renderSlideTitulo("OUTRAS COISAS")}
        {this.renderSlideTituloLista("Acessibilidade", [
          "”Acessibilidade na web significa que pessoas com deficiência podem usar a web. Mais especificamente, a acessibilidade na web significa que pessoas com deficiência podem perceber, entender, navegar, interagir e contribuir para a web. E mais. Ela também beneficia outras pessoas, incluindo pessoas idosas com capacidades em mudança devido ao envelhecimento”",
        ])}
        {this.renderSlideTituloLista("HTML semântico", [
          "Utilizar os elementos e tags corretas para cada função, destacando o conteúdo e utilidade de cada elemento de acordo com sua estrutura.",
          'Não usar tags fracas para necessidades fortes, nem substituir elementos de consistencia real por outros "falsos"',
          "Trazer a devida importância aos leitores de telas e indexadores de sites de busca",
        ])}
        {this.renderSlideTituloImagem("Can I Use...", images.caniuse, 680)}
        {this.renderSlideTituloLista("Sites Legais", [
          "https://www.w3schools.com/html/default.asp",
          "https://www.w3schools.com/css/default.asp",
          "https://developer.mozilla.org/en-US/docs/Web/HTML",
          "https://developer.mozilla.org/en-US/docs/Web/CSS",
          "http://www.w3c.br/pub/Materiais/PublicacoesW3C/cartilha-w3cbr-acessibilidade-web-fasciculo-I.html",
          "https://tableless.com.br",
          "https://caniuse.com",
        ])}
      </Deck>
    );
  }
}
