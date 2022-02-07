# vicdun-notification
Hi everyone, I'm Fahrettin Rıza Ergin.
I have prepared a notification package for you with my little knowledge of JavaScript. 
I wish you to use this package in good days. 

### Download the package 
```sh
npm i vicdun-notification --save
```
##### Or
```sh
yarn add vicdun-notification
```

### Package Usage

```html
<template>
  <bodyRender />
</template>

<script>
import { bodyRender } from 'vicdun-notification'

export default {
  components: {
    bodyRender
  }
}
</script>
```
##### Or

```html
<template></template>

<script>
import { bodyRender } from 'vicdun-notification'

export default {
  mounted () {
    bodyRender()
  }
}
</script>
```
### Use of editing notification content within other pages
```javascript 
// How to use to change notification content
import { notification } from 'vicdun-notification'

notification({
   class: 'mb-4',
   message: 'Hi guys',
   position: 'left-bottom', // left-top, center-top, right-top, center, left-bottom, center-bottom, right-bottom
   type: 'info', // default, success, danger, warning, info
   style: 'margin-bottom: 1rem',
   timeout: 3.5 // second
 })

```
