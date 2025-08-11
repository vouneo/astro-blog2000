/* empty css                                       */
import { c as createComponent, a as createAstro, d as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_hy3IuY0t.mjs';
import 'kleur/colors';
import { v as validatePostData, c as createPost, $ as $$AdminLayout } from '../../../chunks/admin_DA4NMG0q.mjs';
/* empty css                                     */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  let message = "";
  let messageType = "";
  let formData = {
    title: "",
    description: "",
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    categories: "",
    published: true,
    thumbnail: "",
    content: ""
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const postData = {
        title: data.get("title") || "",
        description: data.get("description") || "",
        date: data.get("date") || "",
        categories: (data.get("categories") || "").split(",").map((c) => c.trim()).filter((c) => c),
        published: data.get("published") === "on",
        thumbnail: data.get("thumbnail") || "",
        content: data.get("content") || ""
      };
      const errors = validatePostData(postData);
      if (errors.length === 0) {
        const slug = await createPost(postData);
        if (slug) {
          return Astro2.redirect(`/admin/posts?created=${encodeURIComponent(slug)}`);
        } else {
          message = "Error creating post. Check if title already exists.";
          messageType = "error";
        }
      } else {
        message = "Validation errors: " + errors.join(", ");
        messageType = "error";
        formData = { ...postData, categories: postData.categories.join(", ") };
      }
    } catch (error) {
      console.error("Error creating post:", error);
      message = "An error occurred while creating the post.";
      messageType = "error";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "New Post", "data-astro-cid-evsmad5u": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="new-post" data-astro-cid-evsmad5u> <!-- Header --> <header class="page-header" data-astro-cid-evsmad5u> <div class="header-main" data-astro-cid-evsmad5u> <h1 class="page-title" data-astro-cid-evsmad5u>Create New Post</h1> <p class="page-subtitle" data-astro-cid-evsmad5u>Write a new blog post with Markdown support</p> </div> <div class="header-actions" data-astro-cid-evsmad5u> <a href="/admin/posts" class="admin-btn secondary" data-astro-cid-evsmad5u>
← Back to Posts
</a> </div> </header> <!-- Mensaje de estado --> ${message && renderTemplate`<div${addAttribute(`admin-alert ${messageType}`, "class")} data-astro-cid-evsmad5u> ${message} </div>`} <!-- Formulario de creación --> <div class="edit-layout" data-astro-cid-evsmad5u> <form method="POST" class="edit-form" data-astro-cid-evsmad5u> <!-- Contenido principal --> <div class="content-section" data-astro-cid-evsmad5u> <div class="admin-card" data-astro-cid-evsmad5u> <div class="admin-card-body" data-astro-cid-evsmad5u> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="title" class="admin-form-label" data-astro-cid-evsmad5u>Title *</label> <input type="text" id="title" name="title" class="admin-form-input"${addAttribute(formData.title, "value")} required placeholder="Enter post title" data-astro-cid-evsmad5u> <small class="admin-form-help" data-astro-cid-evsmad5u>The slug will be generated automatically from the title</small> </div> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="description" class="admin-form-label" data-astro-cid-evsmad5u>Description *</label> <textarea id="description" name="description" class="admin-form-textarea" rows="3" required placeholder="Brief description of the post" data-astro-cid-evsmad5u>${formData.description}</textarea> <small class="admin-form-help" data-astro-cid-evsmad5u>This will appear in post cards and meta description</small> </div> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="content" class="admin-form-label" data-astro-cid-evsmad5u>Content *</label> <textarea id="content" name="content" class="admin-form-textarea content-editor" required placeholder="Write your post content in Markdown..." data-astro-cid-evsmad5u>${formData.content}</textarea> <small class="admin-form-help" data-astro-cid-evsmad5u>
You can use Markdown syntax. Images: ![alt](src), Links: [text](url)
</small> </div> </div> </div> </div> <!-- Sidebar con metadatos --> <aside class="sidebar-section" data-astro-cid-evsmad5u> <!-- Publication settings --> <div class="admin-card" data-astro-cid-evsmad5u> <div class="admin-card-header" data-astro-cid-evsmad5u> <h3 data-astro-cid-evsmad5u>📅 Publication</h3> </div> <div class="admin-card-body" data-astro-cid-evsmad5u> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="date" class="admin-form-label" data-astro-cid-evsmad5u>Publication Date</label> <input type="date" id="date" name="date" class="admin-form-input"${addAttribute(formData.date, "value")} required data-astro-cid-evsmad5u> </div> <div class="admin-form-group" data-astro-cid-evsmad5u> <label class="checkbox-label" data-astro-cid-evsmad5u> <input type="checkbox" name="published"${addAttribute(formData.published, "checked")} data-astro-cid-evsmad5u> <span class="checkmark" data-astro-cid-evsmad5u></span>
Published
</label> <small class="admin-form-help" data-astro-cid-evsmad5u>Uncheck to save as draft</small> </div> </div> </div> <!-- Categorization --> <div class="admin-card" data-astro-cid-evsmad5u> <div class="admin-card-header" data-astro-cid-evsmad5u> <h3 data-astro-cid-evsmad5u>🏷️ Categorization</h3> </div> <div class="admin-card-body" data-astro-cid-evsmad5u> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="categories" class="admin-form-label" data-astro-cid-evsmad5u>Categories</label> <input type="text" id="categories" name="categories" class="admin-form-input"${addAttribute(formData.categories, "value")} placeholder="black metal, ideas, música" data-astro-cid-evsmad5u> <small class="admin-form-help" data-astro-cid-evsmad5u>Separate multiple categories with commas</small> </div> <div class="admin-form-group" data-astro-cid-evsmad5u> <label for="thumbnail" class="admin-form-label" data-astro-cid-evsmad5u>Thumbnail URL</label> <input type="url" id="thumbnail" name="thumbnail" class="admin-form-input"${addAttribute(formData.thumbnail, "value")} placeholder="/img/thumbnails/post.jpg" data-astro-cid-evsmad5u> <small class="admin-form-help" data-astro-cid-evsmad5u>Optional: URL to post thumbnail image</small> </div> </div> </div> <!-- Actions --> <div class="admin-card" data-astro-cid-evsmad5u> <div class="admin-card-header" data-astro-cid-evsmad5u> <h3 data-astro-cid-evsmad5u>💾 Actions</h3> </div> <div class="admin-card-body" data-astro-cid-evsmad5u> <div class="action-buttons" data-astro-cid-evsmad5u> <button type="submit" class="admin-btn" data-astro-cid-evsmad5u>
Create Post
</button> <a href="/admin/posts" class="admin-btn secondary" data-astro-cid-evsmad5u>
Cancel
</a> </div> </div> </div> </aside> </form> </div> <!-- Markdown help --> <div class="admin-card markdown-help" data-astro-cid-evsmad5u> <div class="admin-card-header" data-astro-cid-evsmad5u> <h3 data-astro-cid-evsmad5u>📝 Markdown Quick Reference</h3> </div> <div class="admin-card-body" data-astro-cid-evsmad5u> <div class="help-grid" data-astro-cid-evsmad5u> <div class="help-item" data-astro-cid-evsmad5u> <strong data-astro-cid-evsmad5u>Headers:</strong><br data-astro-cid-evsmad5u> <code data-astro-cid-evsmad5u># H1</code>, <code data-astro-cid-evsmad5u>## H2</code>, <code data-astro-cid-evsmad5u>### H3</code> </div> <div class="help-item" data-astro-cid-evsmad5u> <strong data-astro-cid-evsmad5u>Text:</strong><br data-astro-cid-evsmad5u> <code data-astro-cid-evsmad5u>**bold**</code>, <code data-astro-cid-evsmad5u>*italic*</code>, <code data-astro-cid-evsmad5u>\`code\`</code> </div> <div class="help-item" data-astro-cid-evsmad5u> <strong data-astro-cid-evsmad5u>Links:</strong><br data-astro-cid-evsmad5u> <code data-astro-cid-evsmad5u>[text](url)</code>, <code data-astro-cid-evsmad5u>![alt](image.jpg)</code> </div> <div class="help-item" data-astro-cid-evsmad5u> <strong data-astro-cid-evsmad5u>Lists:</strong><br data-astro-cid-evsmad5u> <code data-astro-cid-evsmad5u>- Item 1</code>, <code data-astro-cid-evsmad5u>1. Numbered</code> </div> </div> </div> </div> </div> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/new.astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/new.astro";
const $$url = "/admin/posts/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
