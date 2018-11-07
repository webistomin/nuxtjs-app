import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCsAwlXbS4ECWOPhk5CIlh8O9SYkfwuHZo',
    authDomain: 'nuxt-blog-85622.firebaseapp.com',
    databaseURL: 'https://nuxt-blog-85622.firebaseio.com',
    projectId: 'nuxt-blog-85622',
    storageBucket: 'nuxt-blog-85622.appspot.com',
    messagingSenderId: '283254975131'
  })
}
export default function(context) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      context.store.dispatch('autoLoginUser', user)
    }
  })
}
