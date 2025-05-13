import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";


export default defineConfig([
  // 基础JS配置
  js.configs.recommended,
  // TypeScript配置
  {
    files: ["./src/**/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        project: true, // 自动检测最近的tsconfig.json
      },
    },
    rules: {
      "no-console": ["warn", {
        allow: ["warn", "error"],
      }],
      "no-unused-vars": [
        "warn",
        {
          "varsIgnorePattern": "^_",  // 忽略以_开头的变量
          "argsIgnorePattern": "^_"  // 忽略以_开头的参数
        }
      ], // 关闭JS的no-unused-vars规则
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
      // 从@typescript-eslint/recommended中手动添加的重要规则
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "varsIgnorePattern": "^_",  // 忽略以_开头的变量
          "argsIgnorePattern": "^_"  // 忽略以_开头的参数
        }
      ],
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      // 从prettier冲突解决中手动添加的规则
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },
  {
    files: ["./src/leetcode/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        project: true, // 自动检测最近的tsconfig.json
      },
    },
    rules: {
      "no-console": 'off',
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-irregular-whitespace": "off",
      // 从@typescript-eslint/recommended中手动添加的重要规则
      "@typescript-eslint/no-unused-vars":"off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      // 从prettier冲突解决中手动添加的规则
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  }
]);
