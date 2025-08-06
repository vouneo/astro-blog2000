import { c as createComponent, a as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderScript, b as renderTemplate } from './astro/server_BTroRIYt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import fs from 'fs';
import path from 'path';

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, description = "Admin Panel - vouneo's blog" } = Astro2.props;
  return renderTemplate`<html lang="es" data-admin-theme="crimson-dark" data-astro-cid-hwrjlp2m> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>"><meta name="robots" content="noindex, nofollow">${renderHead()}</head> <body data-astro-cid-hwrjlp2m> <div class="admin-container" data-astro-cid-hwrjlp2m> <header class="admin-header" data-astro-cid-hwrjlp2m> <div class="admin-header-content" data-astro-cid-hwrjlp2m> <div class="header-left" data-astro-cid-hwrjlp2m> <h1 class="admin-title" data-astro-cid-hwrjlp2m> <a href="/admin" data-astro-cid-hwrjlp2m>🕳️ vouneo's admin</a> </h1> </div> <nav class="admin-nav" data-astro-cid-hwrjlp2m> <a href="/admin" class="admin-nav-link" data-astro-cid-hwrjlp2m>Dashboard</a> <a href="/admin/posts" class="admin-nav-link" data-astro-cid-hwrjlp2m>Posts</a> <a href="/" class="admin-nav-link" target="_blank" data-astro-cid-hwrjlp2m>View Blog</a> <!-- Theme switcher --> <div class="theme-switcher" data-astro-cid-hwrjlp2m> <button onclick="toggleAdminTheme()" class="theme-toggle-btn" title="Toggle theme" data-astro-cid-hwrjlp2m>
🌓
</button> </div> </nav> </div> </header> <main class="admin-main" data-astro-cid-hwrjlp2m> ${renderSlot($$result, $$slots["default"])} </main> <footer class="admin-footer" data-astro-cid-hwrjlp2m> <p data-astro-cid-hwrjlp2m>&copy; 2025 vouneo's blog admin</p> </footer> </div> ${renderScript($$result, "/home/vouneo/Dev/astro-blog/blog/src/components/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/home/vouneo/Dev/astro-blog/blog/src/components/AdminLayout.astro", void 0);

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");
function generateSlug(title) {
  return title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim().replace(/^-+|-+$/g, "");
}
function createMarkdownContent(data) {
  const frontmatter = `---
title: "${data.title}"
description: "${data.description}"
date: ${data.date}
categories:
${data.categories.map((cat) => `  - "${cat}"`).join("\n")}
published: ${data.published}${data.thumbnail ? `
thumbnail: "${data.thumbnail}"` : ""}
---

${data.content}`;
  return frontmatter;
}
function parseMarkdownFile(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  if (!match) {
    throw new Error("Invalid markdown format");
  }
  const [, frontmatterStr, contentStr] = match;
  const frontmatter = {};
  frontmatterStr.split("\n").forEach((line) => {
    if (line.includes(":")) {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":").trim();
      if (key.trim() === "categories") {
        frontmatter.categories = [];
        return;
      }
      if (line.startsWith("  - ")) {
        const category = value.replace(/^["']|["']$/g, "");
        if (!frontmatter.categories) frontmatter.categories = [];
        frontmatter.categories.push(category);
        return;
      }
      let cleanValue = value.replace(/^["']|["']$/g, "");
      if (cleanValue === "true") cleanValue = "true";
      if (cleanValue === "false") cleanValue = "false";
      frontmatter[key.trim()] = cleanValue;
    }
  });
  return {
    title: frontmatter.title || "",
    description: frontmatter.description || "",
    date: frontmatter.date || "",
    categories: frontmatter.categories || [],
    published: frontmatter.published !== false,
    thumbnail: frontmatter.thumbnail,
    content: contentStr.trim()
  };
}
async function getAllPosts() {
  try {
    const files = fs.readdirSync(POSTS_DIR);
    const posts = [];
    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.replace(".md", "");
        const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
        const data = parseMarkdownFile(content);
        posts.push({ slug, data });
      }
    }
    return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}
async function getPost(slug) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    const data = parseMarkdownFile(content);
    return { slug, data };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
}
async function savePost(slug, data) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    const content = createMarkdownContent(data);
    fs.writeFileSync(filePath, content, "utf-8");
    return true;
  } catch (error) {
    console.error("Error saving post:", error);
    return false;
  }
}
async function createPost(data) {
  try {
    const slug = generateSlug(data.title);
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      throw new Error(`Post with slug "${slug}" already exists`);
    }
    const content = createMarkdownContent(data);
    fs.writeFileSync(filePath, content, "utf-8");
    return slug;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}
async function deletePost(slug) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
}
function validatePostData(data) {
  const errors = [];
  if (!data.title || data.title.trim().length === 0) {
    errors.push("Title is required");
  }
  if (!data.description || data.description.trim().length === 0) {
    errors.push("Description is required");
  }
  if (!data.date || data.date.trim().length === 0) {
    errors.push("Date is required");
  } else {
    const date = new Date(data.date);
    if (isNaN(date.getTime())) {
      errors.push("Invalid date format");
    }
  }
  if (!data.content || data.content.trim().length === 0) {
    errors.push("Content is required");
  }
  return errors;
}

export { $$AdminLayout as $, getAllPosts as a, createPost as c, deletePost as d, getPost as g, savePost as s, validatePostData as v };
