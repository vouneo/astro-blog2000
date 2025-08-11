/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_hy3IuY0t.mjs';
import 'kleur/colors';
import { a as getAllPosts, $ as $$AdminLayout } from '../chunks/admin_DA4NMG0q.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getAllPosts();
  const publishedPosts = posts.filter((post) => post.data.published);
  const draftPosts = posts.filter((post) => !post.data.published);
  const recentPosts = posts.slice(0, 5);
  if (Astro2.url.searchParams.get("logout") === "true") {
    Astro2.cookies.delete("admin-auth", { path: "/" });
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard - Admin Panel", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard" data-astro-cid-u2h3djql> <header class="dashboard-header" data-astro-cid-u2h3djql> <h1 class="page-title" data-astro-cid-u2h3djql>Dashboard</h1> <p class="page-subtitle" data-astro-cid-u2h3djql>Welcome back! Here's what's happening with your blog.</p> </header> <!-- Estadísticas rápidas --> <div class="stats-section" data-astro-cid-u2h3djql> <div class="stats-grid" data-astro-cid-u2h3djql> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-icon" data-astro-cid-u2h3djql>📝</div> <div class="stat-content" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${posts.length}</div> <div class="stat-label" data-astro-cid-u2h3djql>Total Posts</div> </div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-icon" data-astro-cid-u2h3djql>✅</div> <div class="stat-content" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${publishedPosts.length}</div> <div class="stat-label" data-astro-cid-u2h3djql>Published</div> </div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-icon" data-astro-cid-u2h3djql>📄</div> <div class="stat-content" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${draftPosts.length}</div> <div class="stat-label" data-astro-cid-u2h3djql>Drafts</div> </div> </div> </div> </div> <!-- Acciones rápidas --> <div class="quick-actions-section" data-astro-cid-u2h3djql> <h2 class="section-title" data-astro-cid-u2h3djql>Quick Actions</h2> <div class="actions-grid" data-astro-cid-u2h3djql> <a href="/admin/posts/new" class="action-card primary" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>✍️</div> <div class="action-content" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Create New Post</h3> <p data-astro-cid-u2h3djql>Write a new blog post</p> </div> </a> <a href="/admin/posts" class="action-card secondary" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>📋</div> <div class="action-content" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Manage Posts</h3> <p data-astro-cid-u2h3djql>Edit and organize posts</p> </div> </a> <a href="/" target="_blank" class="action-card secondary" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>🌐</div> <div class="action-content" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>View Blog</h3> <p data-astro-cid-u2h3djql>See your public blog</p> </div> </a> </div> </div> <!-- Posts recientes --> <div class="recent-posts-section" data-astro-cid-u2h3djql> <div class="section-header" data-astro-cid-u2h3djql> <h2 class="section-title" data-astro-cid-u2h3djql>Recent Posts</h2> ${posts.length > 5 && renderTemplate`<a href="/admin/posts" class="view-all-btn" data-astro-cid-u2h3djql>View All Posts →</a>`} </div> ${recentPosts.length > 0 ? renderTemplate`<div class="posts-table-wrapper" data-astro-cid-u2h3djql> <table class="admin-table enhanced" data-astro-cid-u2h3djql> <thead data-astro-cid-u2h3djql> <tr data-astro-cid-u2h3djql> <th class="col-title" data-astro-cid-u2h3djql>Post</th> <th class="col-date" data-astro-cid-u2h3djql>Date</th> <th class="col-status" data-astro-cid-u2h3djql>Status</th> <th class="col-actions" data-astro-cid-u2h3djql>Actions</th> </tr> </thead> <tbody data-astro-cid-u2h3djql> ${recentPosts.map((post) => renderTemplate`<tr class="post-row" data-astro-cid-u2h3djql> <td class="post-info" data-astro-cid-u2h3djql> <div class="post-title" data-astro-cid-u2h3djql>${post.data.title}</div> <div class="post-description" data-astro-cid-u2h3djql>${post.data.description}</div> </td> <td class="post-date" data-astro-cid-u2h3djql> <div class="date-display" data-astro-cid-u2h3djql> ${new Date(post.data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </div> </td> <td class="post-status" data-astro-cid-u2h3djql> <span${addAttribute(`status-badge ${post.data.published ? "published" : "draft"}`, "class")} data-astro-cid-u2h3djql> ${post.data.published ? "\u2705 Published" : "\u{1F4C4} Draft"} </span> </td> <td class="post-actions" data-astro-cid-u2h3djql> <div class="action-buttons" data-astro-cid-u2h3djql> <a${addAttribute(`/admin/posts/${post.slug}/edit`, "href")} class="btn-edit" data-astro-cid-u2h3djql>
✏️ Edit
</a> <a${addAttribute(`/posts/${post.slug}`, "href")} target="_blank" class="btn-view" data-astro-cid-u2h3djql>
👁️ View
</a> </div> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<div class="empty-state" data-astro-cid-u2h3djql> <div class="empty-icon" data-astro-cid-u2h3djql>📝</div> <h3 data-astro-cid-u2h3djql>No posts yet</h3> <p data-astro-cid-u2h3djql>Create your first blog post to get started!</p> <a href="/admin/posts/new" class="admin-btn" data-astro-cid-u2h3djql>Create First Post</a> </div>`} </div> <!-- Cuenta --> <div class="account-section" data-astro-cid-u2h3djql> <div class="admin-card" data-astro-cid-u2h3djql> <div class="admin-card-header" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>👤 Account</h3> </div> <div class="admin-card-body" data-astro-cid-u2h3djql> <div class="account-actions" data-astro-cid-u2h3djql> <a href="?logout=true" class="admin-btn danger" data-astro-cid-u2h3djql>
🚪 Logout
</a> </div> </div> </div> </div> </div> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/index.astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
