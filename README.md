<div align="center">
  <h1>Notiolink</h1>
  <p>⚡ Self-hostable branded link shortener built with Next.js & Notion API</p>
  <p>Made by <a href="https://theodorusclarence.com">Theodorus Clarence</a></p>
</div>

## Installation Guide

Please read the full guide on [this notion page](https://notiolink.thcl.dev/installation-guide)

## Features

- ⚡ Unlimited branded links (use your own domain!)
- ☝ Self-hostable with Vercel
- 💨 Fast redirect using Next.js Middleware Functions
- 🌑 Awesome CMS using Notion
- ➕ See click count statistics
- 💠 Easy one file config

### Link Tree Page

You can easily configure it on the notion database

![Link Tree](https://user-images.githubusercontent.com/55318172/150363654-f70477ae-fef6-4cf0-87d6-6bc9285a7f49.png)

### Add New Link

Route: `/new`

You can add link straight from the website for easy access, don't worry **this is protected with login page** so no one will mess with your links

![New Link](https://user-images.githubusercontent.com/55318172/150363768-225c7752-6a96-44ba-b113-1511da8e221f.png)

### Link Details & Count

You can see the statistics with `/:slug/detail` route

![Link Details](https://user-images.githubusercontent.com/55318172/150364397-a867dba4-c2a6-4d18-b930-724074c6c654.png)
