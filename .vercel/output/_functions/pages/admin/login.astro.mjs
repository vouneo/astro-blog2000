/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderHead, b as renderTemplate } from '../../chunks/astro/server_BTroRIYt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const ADMIN_PASSWORD = "Teagea-1987";
  let loginError = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const password = formData.get("password");
      if (password === ADMIN_PASSWORD) {
        Astro2.cookies.set("admin-auth", password, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          // 7 días
          httpOnly: true,
          secure: true,
          // Solo HTTPS en producción
          sameSite: "strict"
        });
        return Astro2.redirect("/admin");
      } else {
        loginError = "Invalid password";
      }
    } catch (error) {
      console.error("Login error:", error);
      loginError = "Login error occurred";
    }
  }
  const authCookie = Astro2.cookies.get("admin-auth")?.value;
  if (authCookie === ADMIN_PASSWORD) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`<html lang="es" data-astro-cid-rf56lckb> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login - vouneo's blog</title><meta name="robots" content="noindex, nofollow">${renderHead()}</head> <body data-astro-cid-rf56lckb> <div class="login-container" data-astro-cid-rf56lckb> <div class="login-form" data-astro-cid-rf56lckb> <h1 data-astro-cid-rf56lckb>Admin Login</h1> <p data-astro-cid-rf56lckb>Access to vouneo's blog administration</p> ${loginError && renderTemplate`<div class="rails-alert error" data-astro-cid-rf56lckb> ${loginError} </div>`} <form method="POST" data-astro-cid-rf56lckb> <div class="rails-form-group" data-astro-cid-rf56lckb> <label for="password" class="rails-form-label" data-astro-cid-rf56lckb>Password:</label> <input type="password" id="password" name="password" class="rails-form-input" required autocomplete="current-password" minlength="8" data-astro-cid-rf56lckb> </div> <div class="rails-form-group" data-astro-cid-rf56lckb> <button type="submit" class="rails-button" data-astro-cid-rf56lckb>
Login
</button> </div> </form> <hr class="section-divider" data-astro-cid-rf56lckb> <div class="security-info" data-astro-cid-rf56lckb> <p class="login-help" data-astro-cid-rf56lckb> <small data-astro-cid-rf56lckb>🔒 Secure admin access</small> </p> <p class="login-back" data-astro-cid-rf56lckb> <a href="/" class="admin-nav-link" data-astro-cid-rf56lckb>← Back to Blog</a> </p> </div> </div> </div> </body></html>`;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/login.astro", void 0);
const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
