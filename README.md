# vicdun-notification
Hi everyone, I'm Fahrettin Rıza Ergin.   
I'm a software developer. I'm a student of Computer Programing at University of Atatürk.    
I have prepared a notification package for you with my little knowledge of JavaScript.    
I wish you to use this package in good days.

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

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
   position: 'right-top', // default: right-top, other positions: left-top, center-top, right-top, center, left-bottom, center-bottom, right-bottom 
   type: 'default', // default, success, danger, warning, info
   style: 'margin-bottom: 1rem; margin-top: 1rem;',
   timeout: 3.5 // Default seconds: 3, you can write your own desired seconds. Example: 4.5
 })

```

## License
MIT, see [LICENSE.md](http://github.com/fahrettinrizaergin/vicdun-notification/blob/master/LICENSE.md) for details.
