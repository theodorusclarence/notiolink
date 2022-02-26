<div align="center">
  <h1>Notiolink</h1>
  <p>⚡ Self-hostable branded link shortener built with Next.js & Notion API</p>
  <p>Made by <a href="https://theodorusclarence.com">Theodorus Clarence</a></p>
</div>

## Installation Guide

Please read the full guide on [this notion page](https://notiolink.thcl.dev/installation-guide)

If you are migrating from v0 to v1, I suggest to re-fork the project and add the environment variables.

## Features

- ⚡ Unlimited branded links (use your own domain!)
- ☝ Self-hostable with Vercel
- 💨 Fast redirect using Next.js Middleware Functions
- 🌑 Awesome CMS using Notion
- ➕ See click count statistics
- 💠 Zero config, all customizable via env
- 💅 Numerous themes

### Link Tree Page

You can easily configure it on the notion database

![Link Tree](https://user-images.githubusercontent.com/55318172/150363654-f70477ae-fef6-4cf0-87d6-6bc9285a7f49.png)

### Add New Link

Route: `/new`

You can add link straight from the website for easy access, don't worry **this is protected with login page** so no one will mess with your links

![New Link](https://user-images.githubusercontent.com/55318172/152929343-279e175e-d63b-4c1e-81be-1823746d0f49.png)

### Link Details & Count

You can see the statistics with `/:slug/detail` route

![Link Details](https://user-images.githubusercontent.com/55318172/150364397-a867dba4-c2a6-4d18-b930-724074c6c654.png)

### Categorized Tree

Every category will be made into a standalone tree on `/c/:category` route

![Category](https://user-images.githubusercontent.com/55318172/152929498-2e44d6a3-5d49-4fbd-9ed3-b2e22aeffbd2.png)

### Themes

Themes you can choose

|     ![Dark](https://user-images.githubusercontent.com/55318172/152929950-690cc890-a1e9-4e71-a12a-402670167081.png) Dark      |   ![Light](https://user-images.githubusercontent.com/55318172/152929946-9a128b27-4bb3-433c-a7ec-14b19d8a9729.png) Light   |
| :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
| ![Street Neon](https://user-images.githubusercontent.com/55318172/152929924-cfc86c3b-1ab6-4ec3-b82c-56878447d027.png) Street | ![Monokai](https://user-images.githubusercontent.com/55318172/152929929-95df59d2-0690-4e4c-8a81-b75c86e4c289.png) Monokai |
|    ![Milky](https://user-images.githubusercontent.com/55318172/152929918-632410ea-d6e0-4354-b7fe-08b2d991e2ab.png) Milky     |                                                                                                                           |
