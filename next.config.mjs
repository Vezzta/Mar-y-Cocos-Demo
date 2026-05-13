const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repoName.endsWith(".github.io");

const basePath =
  isGitHubActions && repoName && !isUserOrOrgSite ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
