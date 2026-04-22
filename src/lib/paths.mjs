import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CLI_ROOT = path.resolve(__dirname, "..", "..");

export const PACKAGED_CONTRACTS_INDEX_PATH = path.resolve(CLI_ROOT, "contracts/index.json");

export const resolveContractsIndexPath = () => {
  return {
    indexPath: PACKAGED_CONTRACTS_INDEX_PATH,
    rootDir: CLI_ROOT,
    mode: "packaged",
  };
};
