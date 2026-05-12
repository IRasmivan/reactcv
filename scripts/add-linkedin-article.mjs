import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDataPath = path.resolve(__dirname, "../src/data/blogPosts.json");

const parseArgs = (argv) => {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);
    const value = argv[index + 1];

    if (!value || value.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = value;
    index += 1;
  }

  return args;
};

const printHelp = () => {
  console.log(`Usage:
  npm run add:linkedin -- --title "Article title" --url "https://www.linkedin.com/pulse/..." --description "Short summary"

Optional:
  --date "May 12, 2026"
  --category "LinkedIn Article"
`);
};

const args = parseArgs(process.argv.slice(2));

if (args.help || args.h || !args.title || !args.url || !args.description) {
  printHelp();
  process.exit(args.help || args.h ? 0 : 1);
}

const blogPosts = JSON.parse(await fs.readFile(blogDataPath, "utf8"));

if (blogPosts.some((post) => post.url === args.url)) {
  console.log(`Article already exists for URL: ${args.url}`);
  process.exit(0);
}

const article = {
  date: args.date || new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date()),
  category: args.category || "LinkedIn Article",
  title: args.title,
  description: args.description,
  url: args.url,
  platform: "linkedin"
};

blogPosts.unshift(article);

await fs.writeFile(blogDataPath, `${JSON.stringify(blogPosts, null, 2)}\n`);

console.log(`Added LinkedIn article: ${args.title}`);