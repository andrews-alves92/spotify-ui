
# 🎧 Spotify Playlist Implementation (React)

Este projeto é uma implementação da pagina de playlist baseado no [Spotify Redesign](https://youtu.be/suhEIUapSJQ?si=sqla5f_yZWG9cBa2&utm_source=ZTQxO) by [@Juxtopposed](https://github.com/juxtopposed).
Desenvolvida com **React** para fins de portfólio. O foco principal foi aplicar **Clean Architecture**, **boas práticas de Clean Code**, reusabilidade de componentes, organização de pastas e aplicação de princípios **SOLID**, utilizando também **Context API** e **Zustand** para o gerenciamento de estado.

🚀 O projeto foca na interaçao do usuário com o player, como tocar a musica, navegação entre as músicas e adicionar aos favoritos.

> Não são usadas musicas, mas somente uma simulação de que tem algo sendo tocado.

---

## ✨ Destaques do Projeto

- **Implementação do Design** da página de playlist do Spotify
- Desenvolvido com **React**
- Estrutura baseada em **Clean Architecture**
- Código limpo, modular e reutilizável
- Uso de **Context API** para gerenciamento de estado (Player)
- Uso de **Zustand** para persistencia dos dados (Lista de Favoritos e musica atual no player)
- Separação clara de responsabilidades (context-providers, components, utils)
- Aplicação de conceitos como **separação de camadas**, **responsabilidade única** e princípios do **SOLID**


---

## 📁 Estrutura de Pastas

```bash
app/
├── components/              # Componentes visuais reutilizáveis
├── context-providers/       # Contextos globais (PlayerContext, etc)
├── utils/                   # Funções utilitárias
├── entities/                # Definições das entidades
├── api/                     # Camada de requisições para api
├── services/                # Camada de services
├── services/                # Camada de repositórios
├── hooks/                   # Hooks customizados
├── layout.tsx               # Estrutura base da aplicação
├── page.tsx                 # Página principal (playlist)
├── globals.scss             # Estilos globais
