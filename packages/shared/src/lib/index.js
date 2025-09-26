// 模块定义表： moduleId => 工厂函数
const module = {};

// 模块缓存： moduleId => {exports loaded}
const moduleCache = {};

function factory(module, exports, require) {
  // 模块代码在这里运行
  exports.hello = "world";
  // 或
  module.exports = { hello: "world" };
}

function require(moduleId) {
  // 1. 检查缓存-避免重复加载
  if (moduleCache[moduleId]) {
    return moduleCache[moduleId].exports;
  }

  // 2. 获取模块工厂函数
  const factory = modules[moduleId];
  if (!factory) {
    throw new Error(`Module not found: ${moduleId}`);
  }

  // 3. 创建模块对象
  const module = {
    id: moduleId,
    exports: {},
    loaded: false,
  };

  // 4. 将模块加入缓存（防止循环依赖时无限递归）
  moduleCache[moduleId] = module;

  // 5. 执行工厂函数
  factory(module, module.exports, require);

  // 6. 标记为已加载
  module.loaded = true;

  return module.exports;
}

// 注册模块：moduleId -> factory
function define(moduleId, factory) {
  modules[moduleId] = factory;
}
