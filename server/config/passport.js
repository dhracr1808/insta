import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../models/User";
import { TOKEN_SECRET, clientId, clientSecret, callbackURL } from "./config";
/* =================== GOOGLE STRATEGY ====================== */
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    { clientID: clientId, clientSecret, callbackURL },

    async function (accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      const name = profile.name.givenName;
      const image = profile.photos;
      const user = await User.findOrCreate({
        where: { email },
        defaults: { image, password: TOKEN_SECRET, active: true, name },
      });
      return done(null, user[0]);
    }
  )
);
/* =================== LOCAL STRATEGY ====================== */

passport.use(
  new Strategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const message = "Email o Contraseña Incorrecta";
        const user = await User.findOne({ where: { email } });
        if (!user) return done(null, false, { message });
        const salt = await user.hash(password, user.salt);
        if (salt !== user.password) return done(null, false, { message });
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});
