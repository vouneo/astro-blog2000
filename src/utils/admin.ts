import fs from 'fs';
import path from 'path';

export interface PostData {
  title: string;
  description: string;
  date: string;
  categories: string[];
  published: boolean;
  thumbnail?: string;
  content: string;
}

// Obtener la ruta del directorio de posts
const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');

// Generar slug a partir del título
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno solo
    .trim()
    .replace(/^-+|-+$/g, ''); // Remover guiones al inicio y final
}

// Formatear fecha para frontmatter
export function formatDateForFrontmatter(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

// Crear contenido del archivo markdown
export function createMarkdownContent(data: PostData): string {
  const frontmatter = `---
title: "${data.title}"
description: "${data.description}"
date: ${data.date}
categories:
${data.categories.map(cat => `  - "${cat}"`).join('\n')}
published: ${data.published}${data.thumbnail ? `\nthumbnail: "${data.thumbnail}"` : ''}
---

${data.content}`;

  return frontmatter;
}

// Parsear archivo markdown
export function parseMarkdownFile(content: string): PostData {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('Invalid markdown format');
  }

  const [, frontmatterStr, contentStr] = match;
  
  // Parse manual básico del frontmatter (YAML simple)
  const frontmatter: any = {};
  
  frontmatterStr.split('\n').forEach(line => {
    if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      
      if (key.trim() === 'categories') {
        frontmatter.categories = [];
        return;
      }
      
      if (line.startsWith('  - ')) {
        const category = value.replace(/^["']|["']$/g, '');
        if (!frontmatter.categories) frontmatter.categories = [];
        frontmatter.categories.push(category);
        return;
      }
      
      // Remover comillas de valores
      let cleanValue = value.replace(/^["']|["']$/g, '');
      
      // Convertir tipos
      if (cleanValue === 'true') cleanValue = 'true';
      if (cleanValue === 'false') cleanValue = 'false';
      
      frontmatter[key.trim()] = cleanValue;
    }
  });

  return {
    title: frontmatter.title || '',
    description: frontmatter.description || '',
    date: frontmatter.date || '',
    categories: frontmatter.categories || [],
    published: frontmatter.published !== false,
    thumbnail: frontmatter.thumbnail,
    content: contentStr.trim()
  };
}

// Listar todos los posts
export async function getAllPosts(): Promise<Array<{ slug: string; data: PostData }>> {
  try {
    const files = fs.readdirSync(POSTS_DIR);
    const posts = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
        const data = parseMarkdownFile(content);
        posts.push({ slug, data });
      }
    }

    // Ordenar por fecha descendente
    return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

// Obtener un post específico
export async function getPost(slug: string): Promise<{ slug: string; data: PostData } | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = parseMarkdownFile(content);
    
    return { slug, data };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

// Guardar un post
export async function savePost(slug: string, data: PostData): Promise<boolean> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    const content = createMarkdownContent(data);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving post:', error);
    return false;
  }
}

// Crear un nuevo post
export async function createPost(data: PostData): Promise<string | null> {
  try {
    const slug = generateSlug(data.title);
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    
    // Verificar que no exista ya
    if (fs.existsSync(filePath)) {
      throw new Error(`Post with slug "${slug}" already exists`);
    }

    const content = createMarkdownContent(data);
    fs.writeFileSync(filePath, content, 'utf-8');
    
    return slug;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
}

// Eliminar un post
export async function deletePost(slug: string): Promise<boolean> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}

// Validar datos del post
export function validatePostData(data: Partial<PostData>): string[] {
  const errors: string[] = [];
  
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!data.description || data.description.trim().length === 0) {
    errors.push('Description is required');
  }
  
  if (!data.date || data.date.trim().length === 0) {
    errors.push('Date is required');
  } else {
    const date = new Date(data.date);
    if (isNaN(date.getTime())) {
      errors.push('Invalid date format');
    }
  }
  
  if (!data.content || data.content.trim().length === 0) {
    errors.push('Content is required');
  }
  
  return errors;
}