module.exports = {
    ensureAuth: function (req, res, next) {
      // if theres a user logged in, move on to next thing
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    // if not logged in, redirect to main page
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/dashboard')
      }
    },
  }
  
