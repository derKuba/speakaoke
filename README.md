# Speakaoke

Speakaoke is an app for PowerPoint karaoke. Based on a given term, it generates a presentation using ChatGPT and automatically starts the slideshow. The project consists of a **frontend** built with **SolidJS** and a **backend** powered by **Fastify**.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend](#backend)
  - [Environment Variables](#environment-variables)
  - [Starting the Server](#starting-the-server)
- [Frontend](#frontend)
  - [Running the Application](#running-the-application)
- [Technologies](#technologies)
- [License](#license)

## Features

- Generates presentations based on a given topic
- Uses ChatGPT for content creation
- Automatically plays presentations using **Reveal.js**
- Modern frontend with **SolidJS**
- Fast and efficient backend with **Fastify**

## Installation

### Prerequisites

- **Node.js** (recommended: v18 or newer)
- **npm** or **yarn**

### Clone the Repository

```sh
  git clone https://github.com/your-repo/speakaoke.git
  cd speakaoke
```

## Backend

The backend is built with **Fastify** and provides the API for generating presentations.

### Install Dependencies

```sh
  cd backend
  npm install
```

### Environment Variables

Create a `.env` file in the backend directory and add the following variables:

```
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

### Starting the Server

#### Development Mode:

```sh
npm run dev
```

#### Production Mode:

```sh
npm start
```

## Frontend

The frontend is built with **SolidJS** and provides the user interface for the app.

### Install Dependencies

```sh
  cd frontend
  npm install
```

### Running the Application

#### Development Mode:

```sh
npm run dev
```

#### Build for Production:

```sh
npm run build
```

#### Preview Build:

```sh
npm run serve
```

## Technologies

- **Backend:** Fastify, OpenAI API, Node.js
- **Frontend:** SolidJS, TailwindCSS, Reveal.js
- **Build Tools:** Vite

## License

This project is released under the **MIT License**.
