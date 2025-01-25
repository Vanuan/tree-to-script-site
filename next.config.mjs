import { resolve } from "path";
console.log(resolve("./loaders/yaml-custom-loader.js"));

/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
        ".yaml",
      ],

      rules: {
        "@/components/home.yaml": {
          loaders: [
            {
              loader: resolve("./loaders/yaml-custom-loader.js"),
              options: {
                // your options here
              },
            },
          ],
          as: "*.js",
        },
      },
    },
  },
};

// const nextConfig = {
//   experimental: {
//     turbo: {
//       rules: {
//         "*.ya?ml": {
//           loaders: ["js-yaml-loader"],
//           as: "*.js", // Treat YAML files as JavaScript after transformation
//         },
//       },
//     },
//   },
// };

export default nextConfig;
