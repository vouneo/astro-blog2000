/* empty css                                          */
import { c as createComponent, a as createAstro, d as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../chunks/astro/server_BTroRIYt.mjs';
import 'kleur/colors';
import { g as getPost, v as validatePostData, s as savePost, $ as $$AdminLayout, a as getAllPosts } from '../../../../chunks/admin_CEagRuiX.mjs';
/* empty css                                         */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      params: { slug: post.slug }
    }));
  } catch (error) {
    return [];
  }
}
const $$Edit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Edit;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/admin/posts");
  }
  const existingPost = await getPost(slug);
  if (!existingPost) {
    return Astro2.redirect("/admin/posts?error=Post not found");
  }
  let message = "";
  let messageType = "";
  let formData = {
    title: existingPost.data.title,
    description: existingPost.data.description,
    date: existingPost.data.date,
    categories: existingPost.data.categories?.join(", ") || "",
    published: existingPost.data.published,
    thumbnail: existingPost.data.thumbnail || "",
    content: existingPost.data.content
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
        const success = await savePost(slug, postData);
        if (success) {
          message = "Post updated successfully!";
          messageType = "success";
          formData = { ...postData, categories: postData.categories.join(", ") };
        } else {
          message = "Error updating post.";
          messageType = "error";
        }
      } else {
        message = "Validation errors: " + errors.join(", ");
        messageType = "error";
        formData = { ...postData, categories: postData.categories.join(", ") };
      }
    } catch (error) {
      console.error("Error updating post:", error);
      message = "An error occurred while updating the post.";
      messageType = "error";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Edit: ${formData.title}`, "data-astro-cid-mto6yudx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="edit-post" data-astro-cid-mto6yudx> <!-- Header con acciones --> <header class="page-header" data-astro-cid-mto6yudx> <div class="header-main" data-astro-cid-mto6yudx> <h1 class="page-title" data-astro-cid-mto6yudx>Edit Post</h1> <p class="page-subtitle" data-astro-cid-mto6yudx> <strong data-astro-cid-mto6yudx>Slug:</strong> <code data-astro-cid-mto6yudx>${slug}</code> •
<strong data-astro-cid-mto6yudx>File:</strong> <code data-astro-cid-mto6yudx>src/content/posts/${slug}.md</code> </p> </div> <div class="header-actions" data-astro-cid-mto6yudx> <a${addAttribute(`/posts/${slug}`, "href")} target="_blank" class="admin-btn secondary" data-astro-cid-mto6yudx> <span data-astro-cid-mto6yudx>👁️</span> Preview
</a> <a href="/admin/posts" class="admin-btn secondary" data-astro-cid-mto6yudx>
← Posts
</a> </div> </header> <!-- Mensaje de estado --> ${message && renderTemplate`<div${addAttribute(`admin-alert ${messageType}`, "class")} data-astro-cid-mto6yudx> ${message} </div>`} <!-- Formulario de edición --> <div class="edit-layout" data-astro-cid-mto6yudx> <form method="POST" class="edit-form" data-astro-cid-mto6yudx> <!-- Contenido principal --> <div class="content-section" data-astro-cid-mto6yudx> <div class="admin-card" data-astro-cid-mto6yudx> <div class="admin-card-body" data-astro-cid-mto6yudx> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="title" class="admin-form-label" data-astro-cid-mto6yudx>Title *</label> <input type="text" id="title" name="title" class="admin-form-input"${addAttribute(formData.title, "value")} required placeholder="Enter post title" data-astro-cid-mto6yudx> <small class="admin-form-help" data-astro-cid-mto6yudx>
⚠️ Changing the title won't change the slug (filename)
</small> </div> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="description" class="admin-form-label" data-astro-cid-mto6yudx>Description *</label> <textarea id="description" name="description" class="admin-form-textarea" rows="3" required placeholder="Brief description of the post" data-astro-cid-mto6yudx>${formData.description}</textarea> <small class="admin-form-help" data-astro-cid-mto6yudx>This will appear in post cards and meta description</small> </div> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="content" class="admin-form-label" data-astro-cid-mto6yudx>Content *</label> <textarea id="content" name="content" class="admin-form-textarea content-editor" required placeholder="Write your post content in Markdown..." data-astro-cid-mto6yudx>${formData.content}</textarea> <small class="admin-form-help" data-astro-cid-mto6yudx>
You can use Markdown syntax. Images: ![alt](src), Links: [text](url)
</small> </div> </div> </div> </div> <!-- Sidebar con metadatos --> <aside class="sidebar-section" data-astro-cid-mto6yudx> <!-- Publication settings --> <div class="admin-card" data-astro-cid-mto6yudx> <div class="admin-card-header" data-astro-cid-mto6yudx> <h3 data-astro-cid-mto6yudx>📅 Publication</h3> </div> <div class="admin-card-body" data-astro-cid-mto6yudx> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="date" class="admin-form-label" data-astro-cid-mto6yudx>Publication Date</label> <input type="date" id="date" name="date" class="admin-form-input"${addAttribute(formData.date, "value")} required data-astro-cid-mto6yudx> </div> <div class="admin-form-group" data-astro-cid-mto6yudx> <label class="checkbox-label" data-astro-cid-mto6yudx> <input type="checkbox" name="published"${addAttribute(formData.published, "checked")} data-astro-cid-mto6yudx> <span class="checkmark" data-astro-cid-mto6yudx></span>
Published
</label> <small class="admin-form-help" data-astro-cid-mto6yudx>Uncheck to save as draft</small> </div> </div> </div> <!-- Categorization --> <div class="admin-card" data-astro-cid-mto6yudx> <div class="admin-card-header" data-astro-cid-mto6yudx> <h3 data-astro-cid-mto6yudx>🏷️ Categorization</h3> </div> <div class="admin-card-body" data-astro-cid-mto6yudx> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="categories" class="admin-form-label" data-astro-cid-mto6yudx>Categories</label> <input type="text" id="categories" name="categories" class="admin-form-input"${addAttribute(formData.categories, "value")} placeholder="black metal, ideas, música" data-astro-cid-mto6yudx> <small class="admin-form-help" data-astro-cid-mto6yudx>Separate multiple categories with commas</small> </div> <div class="admin-form-group" data-astro-cid-mto6yudx> <label for="thumbnail" class="admin-form-label" data-astro-cid-mto6yudx>Thumbnail URL</label> <input type="url" id="thumbnail" name="thumbnail" class="admin-form-input"${addAttribute(formData.thumbnail, "value")} placeholder="/img/thumbnails/post.jpg" data-astro-cid-mto6yudx> <small class="admin-form-help" data-astro-cid-mto6yudx>Optional: URL to post thumbnail image</small> </div> </div> </div> <!-- Actions --> <div class="admin-card" data-astro-cid-mto6yudx> <div class="admin-card-header" data-astro-cid-mto6yudx> <h3 data-astro-cid-mto6yudx>💾 Actions</h3> </div> <div class="admin-card-body" data-astro-cid-mto6yudx> <div class="action-buttons" data-astro-cid-mto6yudx> <button type="submit" class="admin-btn" data-astro-cid-mto6yudx>
Update Post
</button> <a href="/admin/posts" class="admin-btn secondary" data-astro-cid-mto6yudx>
Cancel
</a> </div> </div> </div> <!-- Danger zone --> <div class="admin-card danger-zone" data-astro-cid-mto6yudx> <div class="admin-card-header" data-astro-cid-mto6yudx> <h3 data-astro-cid-mto6yudx>⚠️ Danger Zone</h3> </div> <div class="admin-card-body" data-astro-cid-mto6yudx> <p class="danger-text" data-astro-cid-mto6yudx>This action cannot be undone. The post file will be permanently deleted.</p> <input type="hidden" name="action" value="delete" data-astro-cid-mto6yudx> <input type="hidden" name="slug"${addAttribute(slug, "value")} data-astro-cid-mto6yudx> <button type="submit" class="admin-btn danger" data-astro-cid-mto6yudx>
🗑️ Delete Post
</button> </div> </div> </aside></form> </div> <!-- Markdown help --> <div class="admin-card markdown-help" data-astro-cid-mto6yudx> <div class="admin-card-header" data-astro-cid-mto6yudx> <h3 data-astro-cid-mto6yudx>📝 Markdown Quick Reference</h3> </div> <div class="admin-card-body" data-astro-cid-mto6yudx> <div class="help-grid" data-astro-cid-mto6yudx> <div class="help-item" data-astro-cid-mto6yudx> <strong data-astro-cid-mto6yudx>Headers:</strong><br data-astro-cid-mto6yudx> <code data-astro-cid-mto6yudx># H1</code>, <code data-astro-cid-mto6yudx>## H2</code>, <code data-astro-cid-mto6yudx>### H3</code> </div> <div class="help-item" data-astro-cid-mto6yudx> <strong data-astro-cid-mto6yudx>Text:</strong><br data-astro-cid-mto6yudx> <code data-astro-cid-mto6yudx>**bold**</code>, <code data-astro-cid-mto6yudx>*italic*</code>, <code data-astro-cid-mto6yudx>\`code\`</code> </div> <div class="help-item" data-astro-cid-mto6yudx> <strong data-astro-cid-mto6yudx>Links:</strong><br data-astro-cid-mto6yudx> <code data-astro-cid-mto6yudx>[text](url)</code>, <code data-astro-cid-mto6yudx>![alt](image.jpg)</code> </div> <div class="help-item" data-astro-cid-mto6yudx> <strong data-astro-cid-mto6yudx>Lists:</strong><br data-astro-cid-mto6yudx> <code data-astro-cid-mto6yudx>- Item 1</code>, <code data-astro-cid-mto6yudx>1. Numbered</code> </div> </div> </div> </div> </div> ` })} `;
}, "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/[slug]/edit.astro", void 0);

const $$file = "/home/vouneo/Dev/astro-blog/blog/src/pages/admin/posts/[slug]/edit.astro";
const $$url = "/admin/posts/[slug]/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
