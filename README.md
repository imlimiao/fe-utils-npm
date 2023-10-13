# fe-utils-npm
简单的工具库

# 构建过程中rollup报错处理问题
- https://blog.csdn.net/u014158954/article/details/129520420

# 更新npm包
更新npm包两步走：

第一步：执行npm version minor
第二步：执行 npm run build

第3步：执行 git push 等提交变更操作
第4步：npm publish


# 可针对方法适当添加注释，这样在开发者调用的时候，就能更好的理解 demo
/**
 * 
 * @param arr  需要操作的数组
 * @param n   开始指定的索引
 * @returns 
 */