import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../models/User";

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

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    console.log(error);
    done(null, error);
  }
});
