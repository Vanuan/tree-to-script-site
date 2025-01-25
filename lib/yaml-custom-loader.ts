import fs from "fs";
import path from "path";
import yaml from "js-yaml";

type YamlValue =
  | string
  | number
  | boolean
  | null
  | YamlValue[]
  | { [key: string]: YamlValue };

export function loadYaml<T extends { base_structure: string }>(
  filePath: string,
): T {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = yaml.load(fileContents) as T;

  return processPlaceholders<T>(data);
}

function processPlaceholders<T extends { base_structure: string }>(obj: T): T {
  const replacements = {
    base_structure: obj.base_structure,
  };

  const replacer = (_: string, key: string) =>
    replacements[key as keyof typeof replacements] || "";

  const processValue = (value: YamlValue): YamlValue => {
    if (typeof value === "string") {
      return value.replace(/\{\{(\w+)\}\}/g, replacer);
    }
    if (Array.isArray(value)) {
      return value.map(processValue);
    }
    if (typeof value === "object" && value !== null) {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, processValue(v)]),
      );
    }
    return value;
  };

  return processValue(obj) as T;
}

// export function loadYaml(filePath: string) {
//   const fullPath = path.join(process.cwd(), filePath);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const data = yaml.load(fileContents);

//   return processPlaceholders(data);
// }

// function processPlaceholders(obj: any): any {
//   // Get the base_structure directly from root
//   const replacements = {
//     base_structure: obj.base_structure,
//   };

//   const replacer = (_: string, key: string) =>
//     replacements[key as keyof typeof replacements] || "";

//   const processValue = (value: any): any => {
//     if (typeof value === "string") {
//       return value.replace(/\{\{(\w+)\}\}/g, replacer);
//     }
//     if (Array.isArray(value)) return value.map(processValue);
//     if (typeof value === "object") {
//       return Object.fromEntries(
//         Object.entries(value).map(([k, v]) => [k, processValue(v)]),
//       );
//     }
//     return value;
//   };

//   return processValue(obj);
// }
