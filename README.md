<p align="center">
 <img align="center" src="https://raw.githubusercontent.com/selemondev/nuxt-signature-pad/master/assets/nuxt-signature-pad.jpeg" />
 <h1 align="center">
 Nuxt Signature Pad
 </h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nuxt-signature-pad">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/nuxt-signature-pad/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/nuxt-signature-pad">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/nuxt-signature-pad.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://nuxt.com">
    <img alt="nuxt-src" src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" />
  </a>
</p>

## Demo

### Play with it on [Stackblitz](https://stackblitz.com/edit/nuxt-starter-qstqbs?file=app.vue)

### Watch video

https://github.com/selemondev/nuxt-emoji-picker/assets/106826371/32b3ab4f-13cd-4c7e-918b-f2b4daa00cde

## Features

- Draw seamless arts in your Nuxt 3 application effortlessly.

## Quick Setup

1. Install the module in your Nuxt application with one command:

```bash
npx nuxi@latest module add nuxt-signature-pad
```

That's it! You can now use nuxt-signature-pad in your Nuxt application ✨

### Usage

You can use the `nuxt-signature-pad` component as shown below:

```vue
<template>
     <NuxtSignaturePad
      ref="signature" height="400px" width="950px" :max-width="options.maxWidth"
      :min-width="options.minWidth" :options="{
      penColor: options.penColor, backgroundColor: options.backgroundColor,
    }"
    />

</template>

<script setup>
const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 2,
  minWidth: 2,
})
const signature = ref()
</script>
```

You can check out all the available props and methods [here](https://github.com/selemondev/vue3-signature-pad?tab=readme-ov-file#props)


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>