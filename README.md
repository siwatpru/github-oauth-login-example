# 🔑 Github OAuth Login

This is an example of how Github's OAuth login flow works.

## ⚙️ Setting

First off, you need an OAuth app. You can create one by following this [guide](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).

You also need to config the OAuth app to match the app that we will be using. In this case:

* `Homepage URL` - `http://localhost:8000`
* `Authorization callback URL` - `http://localhost:8000/redirect`

Then we need to config the app. Copy `client_id` and `client_secret` and put them in `app.js` and `public/index.html`

The app is run by default on port `8000`

## 🖥 Start the app

This is a simple express app. You just need to run

```
yarn
yarn start

# or

npm install
npm start
```

Have fun 😀
