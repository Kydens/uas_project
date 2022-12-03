const express = require('express');
const { celebrate } = require('celebrate');

const isAuth = require('../middlewares/isAuth');
const authValidator = require('../validator/auth');
const userController = require('../controllers/user');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.get('/', isAuth, async (req, res) => {
    console.log('here');
    return res.json({
      status: 'OK',
      email: req.user.email,
    }).status(200);
  });
  route.post(
    '/register',
    celebrate(authValidator.register),
    // eslint-disable-next-line arrow-body-style
    async (req, res, next) => {
      try {
        // TODO : check user is already registered
        const existingUser = await userController.findByEmail(req.body.email);
        if (existingUser) {
          throw new Error('Email is already registered!');
        }

        // TODO : register user
        await userController.create(
          req.body.email,
          req.body.username,
          req.body.password,
        );

        return res.redirect('/').status(200);
      } catch (err) {
        return next(err);
      }
    },
  );
  route.post(
    '/login',
    celebrate(authValidator.login),
    async (req, res, next) => {
      try {
        const user = await userController.login(req.body.email, req.body.password);

        if (!user) {
          throw new Error('Wrong email or password!');
        }

        // Generate token
        // const token = await userController.generateToken(user);

        return res.redirect('/home').status(200);
      } catch (err) {
        return next(err);
      }
    },
  );
};
