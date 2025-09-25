var r = {};
function i(t) {
  var e = r[t];
  if (undefined !== e) {
    return e.exports;
  }
  var o = (r[t] = {
    id: t,
    loaded: false,
    exports: {},
  });
  n[t](o, o.exports, i);
  o.loaded = true;
  return o.exports;
}

i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t);
t = {};
e = (t, e, n) => {
  t.exports = function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: true,
    });
    e.default = undefined;
    var i = u(n(3127));
    var o = u(r("@app-module/system.shortcut"));
    var s = u(r("@app-module/service.push"));
    var a = u(r("@app-module/system.device"));
    var c = u(n(8140));
    function u(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    u(r("@app-module/system.sensor"));
    const h = n(1012).Z;
    const l = n.g.__proto__ || n.g;
    l.$api = h;
    l.$config = i.default;
    l.$sdk = c.default;
    const p = {};
    let f = [];
    e.default = {
      onCreate() {
        c.default.appCreate(this);
        h.device.init();
        this.$def.init();
      },
      onHide() {
        c.default.appHide(this);
      },
      onShow() {
        c.default.appShow(this);
      },
      getCache: (t) => p[t],
      setCache(t, e) {
        p[t] = e;
      },
      ready(t) {
        console.log("ready:", p.user);
        if (p.user && p.user.id) {
          t();
        } else {
          f.push(t);
        }
      },
      readied() {
        for (let t = 0; t < f.length; t++) {
          f[t]();
        }
        f = [];
        this.$def.pushInit();
      },
      async pushInit() {
        let t = await a.default.getInfo();
        let e = (t.data.brand + t.data.manufacturer).toLowerCase();
        s.default.subscribe({
          success: function (t) {
            if (t && t.regId) {
              h.net.post(
                "/user/setPushRegId",
                {
                  regId: t.regId,
                  brand: e,
                },
                {
                  loading: false,
                }
              );
            }
          },
          fail: function (t, e) {},
          complete: function () {},
        });
        s.default.on({
          callback: function (t) {
            let e = JSON.stringify(t);
            if (e.includes("id=")) {
              let t = e.indexOf("id=") + 3;
              let n = e.indexOf("&", t);
              let r = e.substring(t, n);
              if (r > 1) {
                if (e.includes("sort=")) {
                  t = e.indexOf("sort=") + 5;
                  n = e.indexOf("&", t);
                  let i = e.substring(t, n);
                  $api.page.go(`/pages/novel/read?id=${r}&sort=${i}`);
                } else {
                  $api.page.go("/pages/novel/detail?id=" + r);
                }
              }
            }
          },
        });
      },
      async init() {
        console.log("appInit");
        f = [];
        let t = await h.db.get(i.default.userKey);
        let e = await h.db.get(i.default.authToken);
        console.log("user:", e, t);
        if (t && e) {
          p.user = t;
          this.readied();
        }
      },
      checkLogin(t) {
        if (!p.user) {
          this.login(t);
        }
      },
      async login(t) {
        let [e, n, r] = await Promise.all([
          h.device.deviceId(),
          h.device.getOAID(),
          h.device.getUserId(),
        ]);
        let o = await h.net.post("/user/login", {
          oaid: n,
          deviceId: e,
          androidId: r,
          linkId: t.linkId,
          query: t,
        });
        h.db.set(i.default.userKey, o.data);
        p.user = o.data;
        console.log("login:", p.user);
        this.readied();
      },
      onLogin(t) {
        h.db.set(i.default.userKey, t);
        p.user = t;
      },
      hasShortcut(t) {
        o.default.hasInstalled({
          success: function (e) {
            if (e) {
              h.net.get("/user/quickAddIcon");
            }
            t(e);
          },
        });
      },
      addShortcut(t) {
        o.default.install({
          message: "亲爱的,创建桌面图标后，下次找我就方便了哦！",
          success: function () {
            h.net.get("/user/quickAddIcon");
            t(true);
          },
          fail: function (e, n) {
            t(false);
          },
        });
      },
      eU() {
        h.page.go(
          "/pages/home/web?url=" +
            encodeURIComponent(
              "https://privacy.shunshiwl.top/service_agreement109.html"
            )
        );
      },
      eUy() {
        h.page.go(
          "/pages/home/web?url=" +
            encodeURIComponent(
              "https://privacy.shunshiwl.top/privacy_agreement109.html"
            )
        );
      },
    };
  };
};

console.log(i(7841));
