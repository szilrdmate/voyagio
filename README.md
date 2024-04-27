![Logo](public/logo_1.png)

# Voyagio

A highly cofigureable AI powered travel itinerary planner.

## 🔗 Demo

**Check out the live demo at:** https://voyagio.app

**Or check out a video demo at:** https://youtu.be/kMMQH4TOwK0

## 📑 Table of Contents

- [Project Overview](#📚-project-overview)
- [Using the planner](#📷-planning-a-trip)
- [Technologies](#⚛️-technologies)
- [Setup / Install](#💻-setup--install)
- [Approach](#🚶-approach)
- [Screenshots](#🖼️-screenshots)
- [Status](#📶-status)

## 📚 Project Overview

Welcome to the world of smart travel planning! 🌍 ✈️ This project is a highly configurable AI-powered travel itinerary planner, designed to transform how you plan your journeys. Imagine having a personal travel assistant at your fingertips, one that understands your preferences, adapts to your needs, and offers suggestions that are just right for you. That's exactly what this app aims to be.

Whether you're a solo adventurer, a family on vacation, or a business traveler, this planner tailors your itinerary using the power of AI. From suggesting hidden gems and must-visit spots to optimizing your schedule for time and efficiency, it's all about personalization. The integration with the OpenAI API allows the app to tap into sophisticated algorithms, ensuring your travel plans are both exciting and practical.

Moreover, its high configurability means you can tweak and adjust to suit your unique travel style. Want a relaxed holiday or a fast-paced adventure? Prefer cultural landmarks or nature escapes? This app caters to all your whims.

Embark on a journey of seamless, smart, and personalized travel planning. Pack your bags, set your preferences, and let the adventure begin! 🌟🚀

## 📷 Planning a Trip

### 1. Click on the Get Planning button

![main](https://github.com/szilrdmate/voyagio/assets/147255010/f513686d-8b2d-4a89-bcdd-5c79a94b3ed2)

### 2. Fill out the planner with your preferences and hit Get Itinerary

![configure](https://github.com/szilrdmate/voyagio/assets/147255010/501760e0-9f19-4f49-8fd7-a175c8a9069d)

### 3. Wait for it to load and check out your trip

![itinerary](https://github.com/szilrdmate/voyagio/assets/147255010/0ab97c75-5493-4236-aa59-e9a0315d9238)

## ⚛️ Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Unsplash](https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=Unsplash&logoColor=white)

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

This project is a React TypeScript application, combining React's user-friendly interface with TypeScript's robustness for a reliable, efficient experience. It utilizes the OpenAI API for advanced AI functionalities and Firebase for a scalable, manageable backend. This approach focuses on leveraging modern technology to deliver a smart, user-centric application, always looking for ways to enhance and evolve the experience. 🚀

## 🖼️ Screenshots

### Home

![home](https://github.com/szilrdmate/voyagio/assets/147255010/e83fef08-dcb3-46c7-a851-d8a3cb657952)

### Planner

![itinerary1](https://github.com/szilrdmate/voyagio/assets/147255010/e8e7366e-072a-43e2-95da-cb6c8cd32a60)

- **Unique Programs and Events:** The app harnesses AI to uncover unique local events and hidden gems, offering personalized suggestions beyond typical tourist spots.

![itinerary4](https://github.com/szilrdmate/voyagio/assets/147255010/f1e109e4-c412-40c9-bbe4-cdc468990d7a)

- **Factual, Data-Driven Insights:** It relies on real-time, data-driven information to provide accurate, up-to-date details on destinations, ensuring practical and safe travel recommendations.

![itinerary5](https://github.com/szilrdmate/voyagio/assets/147255010/e197541a-a702-401f-9a0d-4c59a0ccaaf0)

### Blog

- **Engaging and Relevant Content:** The blog page features carefully curated articles, tips, and stories, all relevant to your travel interests. It's a treasure trove of insights and ideas, ensuring every piece of content you read enriches your travel planning and experience.

![blog](https://github.com/szilrdmate/voyagio/assets/147255010/a86eaca7-261a-437b-a088-e52d922d837d)

### Account

- **Added benefit:** if you have an account your trips get automatically saved into your history and therefore you can recall them at any point in the future.

![saved](https://github.com/szilrdmate/voyagio/assets/147255010/74565978-aa8b-445c-9fcf-aa42a3ed84a9)

## 📶 Status

As of the current moment, this project is in a "complete-for-now" state. This means that the core functionalities envisioned at the outset have been successfully implemented and are functioning as intended. However, it's important to note that the journey doesn't end here. I am actively considering the addition of new features and enhancements in the future to further improve and expand the capabilities of this project.

Your feedback and opinions are incredibly valuable to me. So I encourage you to share your thoughts, critiques, and suggestions using the feedback tab in the app. Whether it's about existing features or ideas for new ones, I'm open to hearing what you have to say. Your input is crucial in guiding the future development of this project and ensuring it continues to meet and exceed the needs and expectations of its users.

Thank you for being a part of this journey, and I look forward to hearing from you! 🌟
