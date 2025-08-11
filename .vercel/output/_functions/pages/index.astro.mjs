/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate, d as renderComponent } from '../chunks/astro/server_hy3IuY0t.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_BRRzo3qJ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { slug, title, description, date, thumbnail, categories = [] } = Astro2.props;
  const formatDate = (date2) => {
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date2);
  };
  return renderTemplate`${maybeRenderHead()}<article class="retro-card card-post" data-astro-cid-iyiqi2so> <a${addAttribute(`/posts/${slug}`, "href")} class="card-link" data-astro-cid-iyiqi2so> ${thumbnail && renderTemplate`<div class="card-image" data-astro-cid-iyiqi2so> <img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-iyiqi2so> </div>`} <div class="card-content" data-astro-cid-iyiqi2so> <header class="card-header" data-astro-cid-iyiqi2so> <h2 class="card-title" data-astro-cid-iyiqi2so>${title}</h2> <time${addAttribute(date.toISOString(), "datetime")} class="card-date" data-astro-cid-iyiqi2so> ${formatDate(date)} </time> </header> <p class="card-description" data-astro-cid-iyiqi2so>${description}</p> ${categories.length > 0 && renderTemplate`<div class="card-categories" data-astro-cid-iyiqi2so> ${categories.map((category) => renderTemplate`<span class="category-tag" data-astro-cid-iyiqi2so>#${category}</span>`)} </div>`} <div class="card-footer" data-astro-cid-iyiqi2so> <span class="read-more" data-astro-cid-iyiqi2so>Leer más →</span> <span class="card-icon" data-astro-cid-iyiqi2so>✨</span> </div> </div> </a> </article> `;
}, "/home/vouneo/Dev/astro-blog/blog/src/components/PostCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.published !== false;
  });
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "vouneo's blog - Inicio", "description": "Blog retro sobre black metal, ideas y meditaciones nocturnas", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="text-center mb-12 py-8" data-astro-cid-j7pv25f6> <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" data-astro-cid-j7pv25f6> <span style="color: var(--theme-accent)" class="animate-glow" data-astro-cid-j7pv25f6>
Bienvenido
</span> </h1> <p class="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed" style="color: var(--theme-text-secondary)" data-astro-cid-j7pv25f6>
Un espacio digital para reflexiones sobre música, cultura y
<span style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>meditaciones nocturnas</span> </p> <!-- Stats o info adicional --> <div class="flex flex-wrap justify-center gap-6 text-sm opacity-75" data-astro-cid-j7pv25f6> <div class="flex items-center gap-2" data-astro-cid-j7pv25f6> <span style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>📝</span> <span data-astro-cid-j7pv25f6>${sortedPosts.length} posts</span> </div> <div class="flex items-center gap-2" data-astro-cid-j7pv25f6> <span style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>🎵</span> <span data-astro-cid-j7pv25f6>black metal</span> </div> <div class="flex items-center gap-2" data-astro-cid-j7pv25f6> <span style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>💭</span> <span data-astro-cid-j7pv25f6>ideas</span> </div> </div> </section>  <section data-astro-cid-j7pv25f6> <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center" data-astro-cid-j7pv25f6> <span style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>Últimos posts</span> </h2> ${sortedPosts.length > 0 ? renderTemplate`<div class="posts-grid" data-astro-cid-j7pv25f6> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "slug": post.slug, "title": post.data.title, "description": post.data.description, "date": post.data.date, "thumbnail": post.data.thumbnail, "categories": post.data.categories, "data-astro-cid-j7pv25f6": true })}`)} </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-j7pv25f6> <p class="text-xl mb-4" style="color: var(--theme-muted)" data-astro-cid-j7pv25f6>
No hay posts disponibles por el momento.
</p> <p class="text-sm opacity-75" data-astro-cid-j7pv25f6>
Pronto habrá contenido fresco aquí 🚀
</p> </div>`} </section>  <section class="text-center mt-16 py-8" data-astro-cid-j7pv25f6> <div class="retro-card max-w-lg mx-auto p-8" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold mb-4" style="color: var(--theme-accent)" data-astro-cid-j7pv25f6>
¿Te gusta el contenido?
</h3> <p class="mb-6" style="color: var(--theme-text-secondary)" data-astro-cid-j7pv25f6>
Este blog es un experimento digital nostálgico. 
        Si disfrutas de estas reflexiones, déjame saberlo.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="mailto:contact@vouneo.blog" class="retro-button inline-block" data-astro-cid-j7pv25f6>
📧 Contacto
</a> <button class="retro-button" onclick="alert('Libro de visitas próximamente... 📖')" data-astro-cid-j7pv25f6>
📖 Libro de visitas
</button> </div> </div> </section> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/index.astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
