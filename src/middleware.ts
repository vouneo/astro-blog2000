import { defineMiddleware } from 'astro:middleware';

// Password simple desde variable de entorno
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || 'change-this-password-123';

export const onRequest = defineMiddleware(async (context, next) => {
  // Solo aplicar middleware a rutas /admin
  if (!context.url.pathname.startsWith('/admin')) {
    return next();
  }

  // Página de login no necesita autenticación
  if (context.url.pathname === '/admin/login') {
    return next();
  }

  // Verificar autenticación simple
  const authCookie = context.cookies.get('admin-auth')?.value;
  
  if (authCookie !== ADMIN_PASSWORD) {
    // Redirigir al login si no está autenticado
    return context.redirect('/admin/login');
  }

  // Usuario autenticado, continuar
  return next();
});