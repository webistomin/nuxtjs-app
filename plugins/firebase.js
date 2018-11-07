import * as fb from 'firebase'
if (!fb.apps.length) {
  fb.initializeApp({
    apiKey: 'AIzaSyCsAwlXbS4ECWOPhk5CIlh8O9SYkfwuHZo',
    authDomain: 'nuxt-blog-85622.firebaseapp.com',
    databaseURL: 'https://nuxt-blog-85622.firebaseio.com',
    projectId: 'nuxt-blog-85622',
    storageBucket: 'nuxt-blog-85622.appspot.com',
    messagingSenderId: '283254975131'
  })
}
