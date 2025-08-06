/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BTroRIYt.mjs';
import 'kleur/colors';
import { d as deletePost, a as getAllPosts, $ as $$AdminLayout } from '../../chunks/admin_CEagRuiX.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let message = "";
  let messageType = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action");
    const slug = formData.get("slug");
    if (action === "delete" && slug) {
      const success = await deletePost(slug);
      if (success) {
        message = `Post "${slug}" deleted successfully.`;
        messageType = "success";
      } else {
        message = `Error deleting post "${slug}".`;
        messageType = "error";
      }
    }
  }
  const posts = await getAllPosts();
  const status = Astro2.url.searchParams.get("status") || "all";
  const filteredPosts = posts.filter((post) => {
    if (status === "published") return post.data.published;
    if (status === "draft") return !post.data.published;
    return true;
  });
  const createdSlug = Astro2.url.searchParams.get("created");
  if (createdSlug && !message) {
    message = `Post "${createdSlug}" created successfully!`;
    messageType = "success";
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Posts Management", "data-astro-cid-jktp4foz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="posts-management" data-astro-cid-jktp4foz> <!-- Header mejorado --> <header class="page-header" data-astro-cid-jktp4foz> <div class="header-main" data-astro-cid-jktp4foz> <h1 class="page-title" data-astro-cid-jktp4foz>Posts Management</h1> <p class="page-subtitle" data-astro-cid-jktp4foz>Create, edit and manage all your blog posts</p> </div> <div class="header-actions" data-astro-cid-jktp4foz> <a href="/admin/posts/new" class="admin-btn" data-astro-cid-jktp4foz>
✍️ New Post
</a> <a href="/admin" class="admin-btn secondary" data-astro-cid-jktp4foz>
← Dashboard
</a> </div> </header> <!-- Mensaje de estado --> ${message && renderTemplate`<div${addAttribute(`admin-alert ${messageType}`, "class")} data-astro-cid-jktp4foz> ${message} </div>`} <!-- Stats rápidas --> <div class="posts-stats" data-astro-cid-jktp4foz> <div class="stats-grid" data-astro-cid-jktp4foz> <div class="stat-card" data-astro-cid-jktp4foz> <div class="stat-icon" data-astro-cid-jktp4foz>📝</div> <div class="stat-content" data-astro-cid-jktp4foz> <div class="stat-number" data-astro-cid-jktp4foz>${posts.length}</div> <div class="stat-label" data-astro-cid-jktp4foz>Total Posts</div> </div> </div> <div class="stat-card" data-astro-cid-jktp4foz> <div class="stat-icon" data-astro-cid-jktp4foz>✅</div> <div class="stat-content" data-astro-cid-jktp4foz> <div class="stat-number" data-astro-cid-jktp4foz>${posts.filter((p) => p.data.published).length}</div> <div class="stat-label" data-astro-cid-jktp4foz>Published</div> </div> </div> <div class="stat-card" data-astro-cid-jktp4foz> <div class="stat-icon" data-astro-cid-jktp4foz>📄</div> <div class="stat-content" data-astro-cid-jktp4foz> <div class="stat-number" data-astro-cid-jktp4foz>${posts.filter((p) => !p.data.published).length}</div> <div class="stat-label" data-astro-cid-jktp4foz>Drafts</div> </div> </div> </div> </div> <!-- Filtros mejorados --> <div class="filters-section" data-astro-cid-jktp4foz> <div class="admin-card" data-astro-cid-jktp4foz> <div class="admin-card-body" data-astro-cid-jktp4foz> <div class="filters-content" data-astro-cid-jktp4foz> <div class="filter-label" data-astro-cid-jktp4foz> <span data-astro-cid-jktp4foz>📂 Show:</span> </div> <div class="filter-tabs" data-astro-cid-jktp4foz> <a href="/admin/posts"${addAttribute(`filter-tab ${status === "all" ? "active" : ""}`, "class")} data-astro-cid-jktp4foz>
All (${posts.length})
</a> <a href="/admin/posts?status=published"${addAttribute(`filter-tab ${status === "published" ? "active" : ""}`, "class")} data-astro-cid-jktp4foz>
Published (${posts.filter((p) => p.data.published).length})
</a> <a href="/admin/posts?status=draft"${addAttribute(`filter-tab ${status === "draft" ? "active" : ""}`, "class")} data-astro-cid-jktp4foz>
Drafts (${posts.filter((p) => !p.data.published).length})
</a> </div> </div> </div> </div> </div> <!-- Lista de posts mejorada --> ${filteredPosts.length > 0 ? renderTemplate`<div class="posts-section" data-astro-cid-jktp4foz> <div class="posts-table-wrapper" data-astro-cid-jktp4foz> <table class="admin-table enhanced" data-astro-cid-jktp4foz> <thead data-astro-cid-jktp4foz> <tr data-astro-cid-jktp4foz> <th class="col-post" data-astro-cid-jktp4foz>Post</th> <th class="col-date" data-astro-cid-jktp4foz>Date</th> <th class="col-categories" data-astro-cid-jktp4foz>Categories</th> <th class="col-status" data-astro-cid-jktp4foz>Status</th> <th class="col-actions" data-astro-cid-jktp4foz>Actions</th> </tr> </thead> <tbody data-astro-cid-jktp4foz> ${filteredPosts.map((post) => renderTemplate`<tr class="post-row" data-astro-cid-jktp4foz> <td class="post-info" data-astro-cid-jktp4foz> <div class="post-title" data-astro-cid-jktp4foz>${post.data.title}</div> <div class="post-description" data-astro-cid-jktp4foz>${post.data.description}</div> <div class="post-meta" data-astro-cid-jktp4foz> <span class="post-slug" data-astro-cid-jktp4foz>Slug: ${post.slug}</span> </div> </td> <td class="post-date" data-astro-cid-jktp4foz> <div class="date-display" data-astro-cid-jktp4foz> ${new Date(post.data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </div> </td> <td class="post-categories" data-astro-cid-jktp4foz> ${post.data.categories && post.data.categories.length > 0 ? renderTemplate`<div class="categories-list" data-astro-cid-jktp4foz> ${post.data.categories.map((cat) => renderTemplate`<span class="category-tag" data-astro-cid-jktp4foz>${cat}</span>`)} </div>` : renderTemplate`<span class="no-categories" data-astro-cid-jktp4foz>No categories</span>`} </td> <td class="post-status" data-astro-cid-jktp4foz> <span${addAttribute(`status-badge ${post.data.published ? "published" : "draft"}`, "class")} data-astro-cid-jktp4foz> ${post.data.published ? "\u2705 Published" : "\u{1F4C4} Draft"} </span> </td> <td class="post-actions" data-astro-cid-jktp4foz> <div class="action-buttons" data-astro-cid-jktp4foz> <a${addAttribute(`/admin/posts/${post.slug}/edit`, "href")} class="btn-edit" data-astro-cid-jktp4foz>
✏️ Edit
</a> <a${addAttribute(`/posts/${post.slug}`, "href")} target="_blank" class="btn-view" data-astro-cid-jktp4foz>
👁️ View
</a> <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this post? This action cannot be undone.')" data-astro-cid-jktp4foz> <input type="hidden" name="action" value="delete" data-astro-cid-jktp4foz> <input type="hidden" name="slug"${addAttribute(post.slug, "value")} data-astro-cid-jktp4foz> <button type="submit" class="btn-delete" data-astro-cid-jktp4foz>
🗑️ Delete
</button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div>` : renderTemplate`<div class="empty-state" data-astro-cid-jktp4foz> <div class="empty-content" data-astro-cid-jktp4foz> <div class="empty-icon" data-astro-cid-jktp4foz>📝</div> <h3 data-astro-cid-jktp4foz>No ${status === "all" ? "" : status} posts found</h3> <p data-astro-cid-jktp4foz> ${status === "all" ? "Create your first blog post to get started!" : `No ${status} posts available. Try a different filter.`} </p> <div class="empty-actions" data-astro-cid-jktp4foz> ${status === "all" ? renderTemplate`<a href="/admin/posts/new" class="admin-btn" data-astro-cid-jktp4foz>
✍️ Create First Post
</a>` : renderTemplate`<a href="/admin/posts" class="admin-btn secondary" data-astro-cid-jktp4foz>
📂 View All Posts
</a>`} </div> </div> </div>`} </div> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/index.astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/index.astro";
const $$url = "/admin/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
