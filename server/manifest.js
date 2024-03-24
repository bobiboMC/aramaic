const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2XodFa70.js","app":"_app/immutable/entry/app.U4NpldSc.js","imports":["_app/immutable/entry/start.2XodFa70.js","_app/immutable/chunks/entry.g5sORpjq.js","_app/immutable/chunks/scheduler.CgnvES1G.js","_app/immutable/entry/app.U4NpldSc.js","_app/immutable/chunks/scheduler.CgnvES1G.js","_app/immutable/chunks/index.WRhhn_BD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BAQQs4QD.js')),
			__memo(() => import('./chunks/1-C596oxU7.js')),
			__memo(() => import('./chunks/2-CggWGO2S.js'))
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
