# 🎧 Spotify Playlist Implementation (React)

This project is an implementation of a playlist page inspired by [@Juxtopposed](https://github.com/juxtopposed) [Spotify Redesign](https://youtu.be/suhEIUapSJQ?si=sqla5f_yZWG9cBa2&utm_source=ZTQxO). Developed with **React** for portfolio purposes. The main focus was to apply **Clean Architecture**, **Clean Code best practices**, component reusability, folder organization, and **SOLID principles**, while also utilizing **Context API** and **Zustand** for state management.

🚀 The project focuses on user interaction with the player, such as playing music, navigating between tracks, and adding to favorites.

> No actual music is used, only a simulation of something being played.

---

## ✨ Project Highlights

- **Design Implementation** of Spotify's playlist page
- Developed with **React**
- Structure based on **Clean Architecture**
- Clean, modular, and reusable code
- Use of **Context API** for state management (Player)
- Use of **Zustand** for data persistence (Favorites list and current track in the player)
- Clear separation of responsibilities (context-providers, components, utils)
- Application of concepts such as **layer separation**, **single responsibility**, and **SOLID principles**

---

## 📁 Folder Structure

```bash
app/
├── components/              # Reusable visual components
├── context-providers/       # Global contexts (PlayerContext, etc.)
├── utils/                   # Utility functions
├── entities/                # Entity definitions
├── api/                     # API request layer
├── services/                # Service layer
├── repositories/            # Repository layer
├── hooks/                   # Custom hooks
├── layout.tsx               # Application base structure
├── page.tsx                 # Main page (playlist)
├── globals.scss             # Global styles
```
