# Voyagio

A highly cofigureable AI powered travel itinerary planner.

**Check out the live demo at:** https://voyagio.vercel.app

![DemoGIF]()

## Project Overview

parapgraph1

paragraph 2

## Key Elements

### ComponentName:

paragraph 3

#### Inputs

- 1
- 2
- 3

#### Flow

1. foo
2. bar
3. baz

## Features

- [x] Customizeable prompt
- [x] Firebase Auth
- [x] Mapbox location query
- [x] Location Image Search
- [x] Relevant Suggestions

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Getting Started

### Prequisites

Before getting started, please ensure that you have the following third-party services set up:

- [OpenAI API](https://openai.com): AI model
- [MapBoxGLJS](https://mapbox.com/mapbox-gljs): Map
- [Firebase](https://www.firebase.google.com/): Backend

### Installation

To install the project and its dependencies, follow these steps:

1.  Clone the repository

```bash
git clone https://github.com/szilrdmate/voyagio.git
```

2.  Go to the project directory and install dependencies

```bash
cd voyagio
npm install
```

3.  Make a copy of the `.env.example` file:

```bash
cp .env.example .env
```

#### Open the `.env` file in a text editor and populate the values for the services mentioned above.

```bash
VITE_OPENAI_API_KEY=
VITE_MAPBOX_ACCESS_TOKEN=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
```

4.  Start the server

```bash
npm start
```
