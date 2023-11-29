const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.53523f5f.js",
  a + "/_app/immutable/assets/0.24c5d758.css",
  a + "/_app/immutable/nodes/0.1203e27f.js",
  a + "/_app/immutable/assets/montserrat-cyrillic-ext-wght-normal.a0c152a7.woff2",
  a + "/_app/immutable/assets/montserrat-cyrillic-wght-normal.637f5453.woff2",
  a + "/_app/immutable/assets/montserrat-vietnamese-wght-normal.26a448d7.woff2",
  a + "/_app/immutable/assets/montserrat-latin-ext-wght-normal.6e1f71b0.woff2",
  a + "/_app/immutable/assets/montserrat-latin-wght-normal.bb2f9008.woff2",
  a + "/_app/immutable/nodes/1.3b252451.js",
  a + "/_app/immutable/nodes/10.4307c6fa.js",
  a + "/_app/immutable/nodes/2.6d4be31f.js",
  a + "/_app/immutable/assets/hero_main.c98bf1c1.svg",
  a + "/_app/immutable/assets/3.984e8fd2.css",
  a + "/_app/immutable/nodes/3.5b001ce5.js",
  a + "/_app/immutable/nodes/4.152cac4c.js",
  a + "/_app/immutable/assets/reset.c8e5a335.svg",
  a + "/_app/immutable/nodes/5.5fbb175f.js",
  a + "/_app/immutable/assets/update.fe7268aa.svg",
  a + "/_app/immutable/nodes/6.102e7f63.js",
  a + "/_app/immutable/assets/crud_present.7ccf8790.svg",
  a + "/_app/immutable/nodes/7.4bab177b.js",
  a + "/_app/immutable/assets/insert.0a832cd4.svg",
  a + "/_app/immutable/nodes/8.16d93b00.js",
  a + "/_app/immutable/assets/del.114ac96c.svg",
  a + "/_app/immutable/nodes/9.3bccaeef.js",
  a + "/_app/immutable/assets/upd.b1c275b7.svg",
  a + "/_app/immutable/assets/ProgressBar.4f1e9ba5.css",
  a + "/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7d286a49.js",
  a + "/_app/immutable/chunks/crud_absent.a5698afc.js",
  a + "/_app/immutable/assets/crud_absent.7c3ad8ef.svg",
  a + "/_app/immutable/chunks/each.e7406bfc.js",
  a + "/_app/immutable/chunks/index.3d272ea1.js",
  a + "/_app/immutable/chunks/index.e80e6527.js",
  a + "/_app/immutable/chunks/index.f5c5a73b.js",
  a + "/_app/immutable/chunks/navigation.35389e46.js",
  a + "/_app/immutable/chunks/parse.7d180a0f.js",
  a + "/_app/immutable/chunks/preload-helper.a4192956.js",
  a + "/_app/immutable/chunks/scheduler.81ced4c7.js",
  a + "/_app/immutable/chunks/singletons.5a393c81.js",
  a + "/_app/immutable/chunks/stores.6d42c9a7.js",
  a + "/_app/immutable/chunks/stores.c4ddaa53.js",
  a + "/_app/immutable/entry/start.7e9c5940.js"
], l = [
  a + "/favicon.png",
  a + "/fonts/Quicksand.ttf"
], u = "1701268521496", m = `cache-${u}`, n = [
  ...i,
  // the app itself.
  ...l
  //everything else in your static dir
];
self.addEventListener("install", (s) => {
  async function e() {
    await (await caches.open(m)).addAll(n);
  }
  s.waitUntil(e());
});
self.addEventListener("activate", (s) => {
  async function e() {
    for (const t of await caches.keys())
      t !== m && await caches.delete(t);
  }
  s.waitUntil(e());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function e() {
    const t = new URL(s.request.url), c = await caches.open(m);
    if (n.includes(t.pathname))
      return c.match(s.request);
    try {
      const p = await fetch(s.request);
      return p.status === 200 && c.put(s.request, p.clone()), p;
    } catch {
      return c.match(s.request);
    }
  }
  s.respondWith(e());
});
