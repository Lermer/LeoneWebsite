import { getCollection } from 'astro:content';

export interface GraphNode {
  id: string;
  label: string;
  exists: boolean; // true if file exists, false if just referenced
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Extract title from file path (e.g., "2. Research/Brian Eno.md" -> "Brian Eno")
function pathToTitle(path: string): string {
  return path.split('/').pop()?.replace('.md', '') || '';
}

// Extract wiki-links from markdown content
function extractWikiLinks(content: string): string[] {
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
  const links: string[] = [];
  let match;

  while ((match = wikiLinkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }

  return links;
}

export async function buildGraphData(): Promise<GraphData> {
  const allExplorations = await getCollection('explorations');

  // Filter to only include explorations with Public: true
  const explorations = allExplorations.filter(entry => entry.data.Public === true);

  const nodes = new Map<string, GraphNode>();
  const links: GraphLink[] = [];

  // First pass: create nodes for all existing public files
  for (const entry of explorations) {
    const slug = entry.slug;
    const title = pathToTitle(entry.id);

    nodes.set(slug, {
      id: slug,
      label: title,
      exists: true,
    });
  }

  // Second pass: extract links and create nodes for referenced files
  for (const entry of explorations) {
    const sourceSlug = entry.slug;
    const wikiLinks = extractWikiLinks(entry.body);

    for (const linkText of wikiLinks) {
      const targetSlug = linkText.toLowerCase().replace(/\s+/g, '-');

      // Create node for target if it doesn't exist
      if (!nodes.has(targetSlug)) {
        nodes.set(targetSlug, {
          id: targetSlug,
          label: linkText,
          exists: false,
        });
      }

      // Create link
      links.push({
        source: sourceSlug,
        target: targetSlug,
      });
    }
  }

  return {
    nodes: Array.from(nodes.values()),
    links,
  };
}
