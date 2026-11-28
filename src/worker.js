import { onRequestGet as health } from "../functions/api/health.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health" && request.method === "GET") {
      return health();
    }
    return env.ASSETS.fetch(request);
  },
};
