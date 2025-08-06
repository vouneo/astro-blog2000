/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BTroRIYt.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../../chunks/BaseLayout_DggWcQMt.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };
  const allPosts = await getCollection("posts", ({ data }) => data.published !== false);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "data-astro-cid-gysqo7gh": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<nav class="mb-8 text-sm opacity-75" data-astro-cid-gysqo7gh> <a href="/" class="nav-link" data-astro-cid-gysqo7gh>Inicio</a> <span class="mx-2" data-astro-cid-gysqo7gh>→</span> <span data-astro-cid-gysqo7gh>Posts</span> <span class="mx-2" data-astro-cid-gysqo7gh>→</span> <span style="color: var(--theme-accent)" data-astro-cid-gysqo7gh>${post.data.title}</span> </nav>  <header class="mb-12 text-center" data-astro-cid-gysqo7gh> <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in" data-astro-cid-gysqo7gh> <span style="color: var(--theme-accent)" data-astro-cid-gysqo7gh>${post.data.title}</span> </h1> <div class="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm" data-astro-cid-gysqo7gh> <time${addAttribute(post.data.date.toISOString(), "datetime")} class="flex items-center gap-2" style="color: var(--theme-muted)" data-astro-cid-gysqo7gh> <span data-astro-cid-gysqo7gh>📅</span> ${formatDate(post.data.date)} </time> ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-gysqo7gh> <span style="color: var(--theme-muted)" data-astro-cid-gysqo7gh>🏷️</span> <div class="flex flex-wrap gap-2" data-astro-cid-gysqo7gh> ${post.data.categories.map((category) => renderTemplate`<span class="px-2 py-1 text-xs rounded-full border" style="
                  background-color: var(--theme-card-bg);
                  border-color: var(--theme-accent);
                  color: var(--theme-accent);
                " data-astro-cid-gysqo7gh>
#${category} </span>`)} </div> </div>`} </div> <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style="color: var(--theme-text-secondary)" data-astro-cid-gysqo7gh> ${post.data.description} </p> </header>  <article class="prose prose-lg max-w-none mb-16" data-astro-cid-gysqo7gh> <div class="retro-card p-8 md:p-12" data-astro-cid-gysqo7gh> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-gysqo7gh": true })} </div> </article>  <nav class="mb-12" data-astro-cid-gysqo7gh> <div class="flex flex-col sm:flex-row justify-between gap-4" data-astro-cid-gysqo7gh> <a href="/" class="retro-button text-center flex items-center justify-center gap-2" data-astro-cid-gysqo7gh>
← Volver al inicio
</a> <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="retro-button flex items-center justify-center gap-2" data-astro-cid-gysqo7gh>
↑ Subir
</button> </div> </nav>  ${relatedPosts.length > 0 && renderTemplate`<section class="mt-16" data-astro-cid-gysqo7gh> <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center" data-astro-cid-gysqo7gh> <span style="color: var(--theme-accent)" data-astro-cid-gysqo7gh>Otros posts</span> </h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-gysqo7gh> ${relatedPosts.map((relatedPost) => renderTemplate`<div class="retro-card p-6" data-astro-cid-gysqo7gh> <h3 class="font-bold mb-2" data-astro-cid-gysqo7gh> <a${addAttribute(`/posts/${relatedPost.slug}`, "href")} class="nav-link" data-astro-cid-gysqo7gh> ${relatedPost.data.title} </a> </h3> <p class="text-sm mb-4" style="color: var(--theme-text-secondary)" data-astro-cid-gysqo7gh> ${relatedPost.data.description} </p> <time${addAttribute(relatedPost.data.date.toISOString(), "datetime")} class="text-xs opacity-75" style="color: var(--theme-muted)" data-astro-cid-gysqo7gh> ${formatDate(relatedPost.data.date)} </time> </div>`)} </div> </section>`} <section class="mt-16" data-astro-cid-gysqo7gh> <div class="retro-card p-8 text-center" data-astro-cid-gysqo7gh> <h3 class="text-xl font-bold mb-4" style="color: var(--theme-accent)" data-astro-cid-gysqo7gh>
💬 Comentarios
</h3> <p class="mb-4" style="color: var(--theme-text-secondary)" data-astro-cid-gysqo7gh>
El sistema de comentarios estará disponible pronto.
</p> <p class="text-sm opacity-75" data-astro-cid-gysqo7gh>
Por ahora, puedes contactarme directamente para compartir tus pensamientos.
</p> </div> </section> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
