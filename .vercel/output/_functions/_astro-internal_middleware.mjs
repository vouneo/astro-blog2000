import { d as defineMiddleware, s as sequence } from './chunks/index_BSqD6cF_.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_NepDnmfe.mjs';
import 'kleur/colors';
import './chunks/astro/server_BTroRIYt.mjs';
import 'clsx';
import 'cookie';

const ADMIN_PASSWORD = "Teagea-1987";
const onRequest$1 = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith("/admin")) {
    return next();
  }
  if (context.url.pathname === "/admin/login") {
    return next();
  }
  const authCookie = context.cookies.get("admin-auth")?.value;
  if (authCookie !== ADMIN_PASSWORD) {
    return context.redirect("/admin/login");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
