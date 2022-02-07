# Improvements

Here are written improvements for the future. Some are quite easy to do, others are difficult and request a lot of time and others are just ideas

## Missing NotFound page

It would be easy to do. A 404 page with a nice pic and a redirect to home is missing

## Refactor login

For historical reasons there is a different login point for each role. It could be transformed just to one, put in a page and not a popup. This way also admin and intertek would have a recover pwd page. Quite easy to do.

## Redirect after login

If a user is not logged in and goes in a page that requires login, he is redirected to the login page (for now actually the home). After the login, it would be better if he was redirected again to the page he wanted initially to go to, instead he is now redirected to the home. Quite easy.

## Change icons of the companies

There is margin that makes them seem small. Also the favicon is "sgranated". It should be done by someone else.

## API Database connection perf

Each request creates a new DB connection. This is highly unperformant. Quite easy to fix

## Create UI framework

The `shared` folder in the frontend could become an UI framework. First everything could be extracted as css and then Vue.js component using that css and the "business-logic". Also Stencil could be used to make general purpose components. Very long to do, because of the refactoring and everything else.

## Use mongoose

Mongoose could be used instead of the direct mongo npm package. Quite big refactor, not so short to do.

## Use Route -> Controller -> Service -> Model and dep injection

A best practice for the api would be: the express route calls a controller passing res and req. The controller controls everything and uses Services (such as UserService, EmailService, ...). The service uses the models of the db to work (maybe mongoose) and other utils. With dependency injection, too.
This would be a good start to make serious testing. Very long to do, almost total refactor on apis.

## Add testing for apis

There are no test suites for the apis. It would be very nice to have it, but very very long to do if done correctly.

## Change structure of routes.

There are routes in the frontend such as /admin/webapp, /company/webapp, /laboratory/webapp. This could be normalized. Average long to do.

## Re-add notifications

There was a notification system in the first website, used expecially for chats, forums, etc. It was not reimplemented in the hmoda version because it was not so useful and it would have required time. Medium average long to do.

## Better error handling

There is not a very good forntend error handling. Medium long to do.

## Separate frontend and backend

Both the frontend and the backend are in the same repo and served with the same server. It should be better to separate them. Long to do.

## Use docker

One could put the (separated) backend and frontend in docker images, use docker compose or stack and use watchtower to update them every time there is a new image. Long to do.

## Use jspdf for pdf generation

Puppeteer obtains a very nice result, but it is quite slow and resource overkill. Average long to do, it depends also on how beautifyl the generated pdf should be.

## Use style for emails

THe emails could use a nice html with style and make it seem more professional. Not so long to do.

## use puppeteer for automating blockchain

Use puppeteer to simulate user and upload the certificates automatically. Average long to do, but not so stable.

## make it as a pwa

Creating a pwa with vue.js is not very difficult. It improves seo and is better. Relatively short to do.

## make SSR

it would improve seo and performance for low latency, but quite difficult to do with vue.js