"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Cache {
  constructor(compilation) {
    this.cache = compilation.getCache('CompressionWebpackPlugin');
  }

  async get(cacheData) {
    // eslint-disable-next-line no-param-reassign
    cacheData.eTag = cacheData.eTag || this.cache.getLazyHashedEtag(cacheData.source);
    return this.cache.getPromise(cacheData.assetName, cacheData.eTag);
  }

  async store(cacheData) {
    return this.cache.storePromise(cacheData.assetName, cacheData.eTag, cacheData.output);
  }

}

exports.default = Cache;