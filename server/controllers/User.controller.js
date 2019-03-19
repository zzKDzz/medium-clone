const Article = require('./../models/Article')
const User = require('./../models/User')

addUser = (req, res, next) => {
  new User(req.body).save((err, newUser) => {
    if(err)
      res.send(err)
    else if(!newUser)
      res.send(400)
    else
      res.send(newUser)
    next()
  })
}

getUser = (req, res, next) => {
  User.findById(req.params.id).then((err, user) => {
    if(err)
      res.send(err)
    else if(!user)
      res.sendStatus(404)
    else
      res.send(user)
    next()
  }).catch(next)
}

followUser = (req, res, next) => {
  User.findById(req.params.id).then(user => {
    user.addFollower(req.params.my_id).then(() => res.json({msg: 'Followed !'}))
  }).catch(next)
}

getUserProfile = (req, res, next) => {
  User.findById(req.params.id).then(
    user => Article.find({'author': req.params.id}).then(
      articles => res.json({user, articles})
    )
  ).catch(err => { console.error(err) })
}

module.exports = {
  addUser,
  getUser,
  followUser,
  getUserProfile
}