
# 🎧 Spotify Playlist Redesign (React)

Este projeto é uma implementação personalizada da página de playlist do Spotify, desenvolvida com **React** para fins de aprendizado e portfólio. O foco principal foi aplicar **Clean Architecture**, **boas práticas de Clean Code**, reusabilidade de componentes, organização de pastas e aplicação de princípios **SOLID**, utilizando também **Context API** e **Zustand** para o gerenciamento de estado.

> 🚀 O projeto ainda está em desenvolvimento e algumas funcionalidades estão em fase de integração.

---

## ✨ Destaques do Projeto

- **Redesign completo** da página de playlist do Spotify
- Desenvolvido com **React 19**
- Estrutura baseada em **Clean Architecture**
- Código limpo, modular e reutilizável
- Uso de **Context API** e **Zustand** para gerenciamento de estado (Player) e persistencia dos dados (Lists de Favoritos)
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
