import { promises as fs } from "node:fs";
import path from "node:path";

async function main() {
    const root = process.cwd();
    const src = path.join(root, "README.md");
    const destDir = path.join(root, "packages/react");
    const dest = path.join(destDir, "README.md");

    await fs.mkdir(destDir, { recursive: true });
    await fs.copyFile(src, dest);

    console.log(`Copied README.md -> ${path.relative(root, dest)}`);
}

main().catch((err) => {
    console.error(err?.message || err);
    process.exit(1);
});
