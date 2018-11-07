export default function(context) {
  const isLogged = context.store.getters.isUserLoggedIn
  if (!isLogged) {
    context.redirect('/admin/auth')
  }
}
