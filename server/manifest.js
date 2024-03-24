const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"app/immutable/entry/start.C5fn_6pF.js","app":"app/immutable/entry/app.CJ6zTGAS.js","imports":["app/immutable/entry/start.C5fn_6pF.js","app/immutable/chunks/entry.DdYthldI.js","app/immutable/chunks/scheduler.CgnvES1G.js","app/immutable/entry/app.CJ6zTGAS.js","app/immutable/chunks/scheduler.CgnvES1G.js","app/immutable/chunks/index.WRhhn_BD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B3j9Cb2s.js')),
			__memo(() => import('./chunks/1-DiwLS6oG.js')),
			__memo(() => import('./chunks/2-B0mtLYwq.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
