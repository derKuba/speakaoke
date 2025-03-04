# Speakaoke

Speakaoke ist eine App für PowerPoint-Karaoke. Basierend auf einem Begriff wird mit Hilfe von ChatGPT eine Präsentation generiert und automatisch gestartet. Das Projekt besteht aus einem **Frontend** mit **SolidJS** und einem **Backend** mit **Fastify**.

## Inhaltsverzeichnis

- [Features](#features)
- [Installation](#installation)
- [Backend](#backend)
  - [Umgebungsvariablen](#umgebungsvariablen)
  - [Starten des Servers](#starten-des-servers)
- [Frontend](#frontend)
  - [Starten der Anwendung](#starten-der-anwendung)
- [Technologien](#technologien)
- [Lizenz](#lizenz)

## Features

- Generiert Präsentationen basierend auf einem Begriff
- Nutzt ChatGPT zur Erstellung der Inhalte
- Präsentationen werden automatisch mit **Reveal.js** abgespielt
- Modernes Frontend mit **SolidJS**
- Schnell und effizient durch **Fastify** im Backend

## Installation

### Voraussetzungen

- **Node.js** (empfohlen: v18 oder neuer)
- **npm** oder **yarn**

### Repository klonen

```sh
  git clone https://github.com/dein-repo/speakaoke.git
  cd speakaoke
```

## Backend

Das Backend basiert auf **Fastify** und stellt die API für die Präsentationsgenerierung bereit.

### Installation der Abhängigkeiten

```sh
  cd backend
  npm install
```

### Umgebungsvariablen

Erstelle eine `.env` Datei im Backend-Verzeichnis und füge folgende Variablen hinzu:

```
OPENAI_API_KEY=dein_openai_api_key
PORT=3000
```

### Starten des Servers

#### Entwicklungsmodus:

```sh
npm run dev
```

#### Produktionsmodus:

```sh
npm start
```

## Frontend

Das Frontend basiert auf **SolidJS** und stellt die Benutzeroberfläche für die App bereit.

### Installation der Abhängigkeiten

```sh
  cd frontend
  npm install
```

### Starten der Anwendung

#### Entwicklungsmodus:

```sh
npm run dev
```

#### Produktionsbuild erstellen:

```sh
npm run build
```

#### Build-Vorschau anzeigen:

```sh
npm run serve
```

## Technologien

- **Backend:** Fastify, OpenAI API, Node.js
- **Frontend:** SolidJS, TailwindCSS, Reveal.js
- **Build Tools:** Vite

## Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** veröffentlicht.
