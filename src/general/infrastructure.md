# Infrastructure

The infrastructure of the ..... TODO

## The software

The software is written in **Typescript** in its all entirety and consists in:

* a **Web App**
* some **Rest APIs**
* an **SDK**

### The Web App

The Web App is written in [**Vue 2**](https://vuejs.org/) and [**Typescript**](https://www.typescriptlang.org/). The framework is one of the **four most popular frontend frameworks** (namely: React, Vue, Angular, Svelte) and was chosen both because it was the better known by the developer and because its design is more elegant than React's one. 

Almost all the style was written by hand and **no UI framework has been used**. Most of the style relies on **flexbox** css rules, with some use of the **grid** ones. This choice was done because **custom style** was asked by the company, with a sort of **design-mockup created by a designer**. 

The only **third-party libraries** used for the style are:
* __[pdfjs](https://https://mozilla.github.io/pdf.js/)__: It is used to display preview (the first page) of PDF files, before they are downloaded
* __[progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/)__: It is used for the "piadine", the semicircles with Intertek's score in the personal page of a ghostmaker
* __[v-caledar](https://vcalendar.io/)__: It is used for the events calendar
* __[vue-advanced-cropper](https://github.com/Norserium/vue-advanced-cropper#readme)__: It is used for the various image croppers that appear when uploading an image
* __[vue-aos](https://npmjs.com/package/vue-aos)__: It is used for the animation on-scroll effects
* __[vuebar](https://www.npmjs.com/package/vuebar)__: It was used for the chat, is no more needed in the HModa version

Other non-ui libraries used are:
* __[VueRouter](https://router.vuejs.org/)__: The default router of Vue
* __[Vuex](https://vuex.vuejs.org/)__: The default store of Vue
* __[Vue 18n](https://kazupon.github.io/vue-i18n/)__: A internationalization library for Vue
* __[Vue meta](https://vue-meta.nuxtjs.org/)__: A meta tags library for Vue, for a better SEO
* __[Vue gtag](https://matteo-gabriele.gitbook.io/vue-gtag/)__: A Google Analytics library for Vue
* __[translate](https://www.npmjs.com/package/translate)__: A translation library for Javascript, used to translate pages with user-generated content

#### A note on the Vue version

Vue.js 2 has been used because Vue.js 3 was not out yet when the project started. Because it does not depend on a lot of third-party libraries, it should be possible to pass to the newer version, but doing it would mean rewrite a lot of code.

#### The shared components

A folder `shared` in the Vue.js code contains components that, with some adjustments, could be really become a "Ghostmakers" UI framework, that could be reused in other Vue.js projects (web projects in general if transformed with webcomponents).

The `site` folder contains other interesting components, too. Some of them could be added to an Ui framework while others are too specific.

### The Rest APIs

The Rest APIs are written in **Node.js** and **Express.js**. The language is **Typescript**.

... TODO ...

Some interesting features:
* sending emails with **nodemailer** and **pug templates**.
* scheduling jobs with **bullmq** and **redis**.
* authentication with **passport.js**, **jwt** and a wrapper of **session cookies** to improve performance.
* the usage of **dree** to charge the routes
* the usage **puppeteer** to create PDFs from website pages

### The SDK

The SDK is written in **Typescript**, compiled with **Webpack** and uses **axios** to make requests. It is available through [@ghostmakers/hmoda-sdk](https://npmjs.com/package/@ghostmakers/hmoda-sdk).

... TODO ...

## Other components

Everything is accessible through info@ghostmakers.it

Other components are:
* The code repos
* The database
* The poeditor
* The cloud server
* Google analytics

### The code repos

The code repos are on Github, on the org ghostmakers-it [TODO......]

### The database

The database is MongoDB and hosted on MongoDB Atlas TODO .........

### The translations

For the translations Poeditor is used to extract json key files ..... TODO

### The cloud server

The server is hosted on shellrent and internally,on a ubuntu machine that uses PM2.... TODO

### Google analytics

it is used TODO...