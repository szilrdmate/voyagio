[Logo](/icon.114)

# Voyagio

A highly cofigureable AI powered travel itinerary planner.

## 🔗 Demo

**Check out the live demo at:** https://voyagio.vercel.app

**Or check out a video demo at:** https://youtu.be/kMMQH4TOwK0

## 📑 Table of Contents

- [Project Overview](#📚-project-overview)
- [User Flow / Screesnhots](#📷-user-flow)
- [Features](#🎲-features)
- [Technologies](#⚛️-technologies)
- [Setup / Install](#💻-setup--install)
- [Approach](#🚶-approach)
- [Status](#📶-status)
- [License](#📝-license)

## 📚 Project Overview

## 📷 User Flow

## 🎲 Features

- Customizeable prompt
- Firebase Auth
- Mapbox location query
- Location Image Search
- Relevant Suggestions

## ⚛️ Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 💻 Setup / Install

### Prequisites

Before getting started, please ensure that you have the following third-party services set up:

- [OpenAI API](https://openai.com): AI model
- [MapBoxGL](https://mapbox.com/mapbox-gljs): Map
- [Firebase + Firestore](https://www.firebase.google.com/): Authentication & Database
- [Unsplash API](https://www.unspalsh.com/): Image fetch

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
VITE_UNSPLASH_ACCESS_KEY=
```

4.  Start development server

```bash
npm run dev
```

## 🚶 Approach

## 📶 Status

## 📝 License
