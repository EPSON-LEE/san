// ChineseEncryptPlugin.js
const { parse, generate } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const template = require('@babel/template');

class ChineseEncryptPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('ChineseEncryptPlugin', (compilation) => {
      // 在生成资源前处理模块
      compilation.hooks.processAssets.tap(
        {
          name: 'ChineseEncryptPlugin',
          stage: compilation.PROCESS_ASSETS_STAGE_DERIVED,
        },
        (assets) => {
          for (const [filename, asset] of Object.entries(assets)) {
            // 只处理 .js 文件
            if (!filename.endsWith('.js')) continue;

            const source = asset.source();
            let code = source.toString();

            try {
              // 解析 AST
              const ast = parse(code, {
                sourceType: 'module',
                plugins: ['jsx', 'typescript'],
              });

              // 收集需要替换的节点
              const replacements = [];

              traverse(ast, {
                StringLiteral(path) {
                  const value = path.node.value;
                  // 判断是否包含中文（Unicode 范围 \u4e00-\u9fff）
                  if (/[\u4e00-\u9fff]/.test(value)) {
                    const encrypted = btoa(unescape(encodeURIComponent(value))); // UTF-8 安全的 Base64
                    replacements.push({
                      path,
                      original: value,
                      encrypted,
                    });
                  }
                },
              });

              if (replacements.length > 0) {
                // 构建解密函数
                const decryptFn = `
                  function __decryptChinese(str) {
                    return decodeURIComponent(escape(atob(str)));
                  }
                `;

                // 替换所有中文字符串为 __decryptChinese("加密串")
                let newCode = code;
                replacements.forEach(({ path, encrypted }) => {
                  const start = path.node.start;
                  const end = path.node.end;
                  const originalStr = code.slice(start, end);
                  const replacement = `__decryptChinese("${encrypted}")`;
                  newCode = newCode.replace(originalStr, replacement);
                });

                // 注入解密函数（插入到文件顶部）
                newCode = decryptFn + '\n' + newCode;

                // 更新 asset
                compilation.updateAsset(filename, newSource => {
                  return { source: () => newCode, size: () => newCode.length };
                });
              }
            } catch (err) {
              console.warn(`[ChineseEncryptPlugin] Failed to process ${filename}:`, err.message);
            }
          }
        }
      );
    });
  }
}

module.exports = ChineseEncryptPlugin;