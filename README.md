# Welcome to RyRo-Stack!

## Features
- 📖 [Remix](https://remix.run/docs)
- [Django](https://www.djangoproject.com/)
- [Django Ninja](https://django-ninja.dev/)
- [Biome](https://biomejs.dev) format, lint, and more

## Development

Run the dev server:

```shellscript
npm run dev
```

Run API

```shellscript
python manage.py runserver
```

Run migration

```shellscript
python manage.py migrate
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
