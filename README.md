# myWorkout

## Visão Geral do Projeto

O `myWorkout` é uma aplicação web completa (Full-Stack) projetada para ajudar usuários a gerenciar e acompanhar seus treinos. Com ele, você pode criar treinos personalizados, adicionar exercícios a cada treino e registrar as séries (repetições e peso) para cada exercício, acompanhando seu progresso ao longo do tempo.

## Funcionalidades

-   **Autenticação de Usuário**:
    -   Cadastro de novos usuários.
    -   Login seguro com token de autenticação.
-   **Gestão de Treinos**:
    -   Dashboard para visualizar todos os treinos cadastrados.
    -   Criação de novos treinos com nomes personalizados.
    -   Exclusão de treinos existentes.
-   **Gestão de Exercícios**:
    -   Adicionar exercícios a um treino específico.
    -   Visualizar a lista de exercícios de um treino.
    -   Excluir exercícios de um treino.
-   **Gestão de Séries**:
    -   Registrar séries para cada exercício, incluindo repetições e peso.
    -   Visualizar o histórico de séries de um exercício, com opção de filtrar por data.
    -   Excluir séries individuais.

## Tecnologias Utilizadas

### Frontend

-   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **React Router DOM**: Para navegação e roteamento na aplicação.
-   **Hooks (useState, useEffect, useParams, useLocation, useNavigate)**: Para gerenciamento de estado e ciclo de vida dos componentes.
-   **CSS**: Para estilização da interface.
-   **Serviços de API**: Funções para interagir com o backend.

### Backend

-   **Node.js**: Ambiente de execução JavaScript.
-   **Express.js**: Framework web para construir a API RESTful.
-   **Serviços**: Lógica de negócio para manipulação de dados de treinos, exercícios e séries.
-   **Repositórios**: Camada de acesso a dados.
-   **Autenticação**: Gerenciamento de tokens (JWT) para sessões de usuário.

## Uso

1.  **Cadastre-se**: Na página inicial, clique em "Cadastre-se" para criar uma nova conta.
2.  **Faça Login**: Utilize suas credenciais para acessar o Dashboard.
3.  **Crie um Treino**: No Dashboard, clique em "+ Novo Treino" e dê um nome ao seu treino.
4.  **Adicione Exercícios**: Clique em um treino para abri-lo e use o formulário para adicionar exercícios (ex: "Supino Reto", "Agachamento").
5.  **Registre Séries**: Clique em um exercício para registrar as repetições e o peso de suas séries. Você pode ver o histórico e filtrar por data.
6.  **Gerencie**: Exclua treinos, exercícios ou séries conforme necessário.

---

## Créditos e Direitos Autorais

Este projeto é uma versão evoluída e melhorada de um trabalho anterior, focada em melhores práticas e novas funcionalidades.
Você pode encontrar a versão original em: [[LINK DO PROJETO ANTIGO AQUI](https://github.com/eliasnlima/trainup)]

© 2026 Elias. Todos os direitos reservados.

