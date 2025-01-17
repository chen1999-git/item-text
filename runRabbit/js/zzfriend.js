(function () {
  var g = function () { };
  g.prototype = {
    postData: function (a) {
      window.parent.postMessage(a, "*")
    },
    refresh: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "refresh",
          args: []
        }
      })
    },
    goHome: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "go_home",
          args: [{
            url: 'https://gitee.com/chen-1999'
          }]
        }
      })
    },
    setShareInfo: function (a, b, c) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "setShareInfo",
          args: [{
            title: a,
            desc: b,
            showShareTime: c
          }]
        }
      })
    },
    shareFriend: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "share",
          args: []
        }
      })
    },
    setHorizontal: function (a) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "setHorizontal",
          args: [a]
        }
      })
    },
    rankingType: {
      RANKING_TYPE_SCORE_DESC: 1,
      RANKING_TYPE_SCORE_ASC: 2,
      RANKING_TYPE_LEVEL_SCORE_DESC: 3,
      RANKING_TYPE_LEVEL_SCORE_ASC: 4
    },
    rankingShowType: {
      RANKING_SHOW_AUTO: 0,
      RANKING_SHOW: 1,
      RANKING_SHOW_NO: 2
    },
    setRanking: function (a, b, c, f) {
      a = a || this.rankingType.RANKING_TYPE_SCORE_DESC;
      c = c || 0;
      b = parseInt(b || 0);
      c = parseFloat(c);
      f = f || this.rankingShowType.RANKING_SHOW_AUTO;
      this.postData({
        op_type: "fn",
        value: {
          fn: "ranking",
          args: [{
            type: a,
            level: b,
            score: c,
            showRankingType: f
          }]
        }
      })
    },
    setRankingScoreDesc: function (a, b) {
      this.setRanking(this.rankingType.RANKING_TYPE_SCORE_DESC, 0, a, b)
    },
    setRankingScoreAsc: function (a, b) {
      this.setRanking(this.rankingType.RANKING_TYPE_SCORE_ASC, 0, a, b)
    },
    setRankingLevelScoreDesc: function (a, b, c) {
      this.setRanking(this.rankingType.RANKING_TYPE_LEVEL_SCORE_DESC, a, b, c)
    },
    setRankingLevelScoreAsc: function (a, b, c) {
      this.setRanking(this.rankingType.RANKING_TYPE_LEVEL_SCORE_ASC, a, b, c)
    },
    showRanking: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "showRanking",
          args: []
        }
      })
    },
    closeRecommend: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "closeRecommend",
          args: []
        }
      })
    },
    festivalgame: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "festivalgame",
          args: []
        }
      })
    },
    setCrazycaitu: function (a, b) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "setCrazycaitu",
          args: [{
            id: a,
            linkid: b
          }]
        }
      })
    },
    set_share_icon: function (a) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "set_share_icon",
          args: [{
            share_icon: a
          }]
        }
      })
    },
    set_share_url: function (a) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "set_share_url",
          args: [{
            share_url: a
          }]
        }
      })
    },
    getCrazycaitu: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "getCrazycaitu",
          args: []
        }
      })
    },
    resetView: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "resetView",
          args: []
        }
      })
    },
    resetFrame: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "resetFrame",
          args: []
        }
      })
    },
    putLocalStorage: function (a, b) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "putLocalStorage",
          args: [{
            kvVal: a,
            keys: b
          }]
        }
      })
    },
    pay: function (a, b, c, f, e, d) {
      this.postData({
        op_type: "fn",
        value: {
          fn: "pay",
          args: [{
            itemid: a,
            itemname: b,
            price: c,
            count: f,
            spec: e || "",
            skey: d || ""
          }]
        }
      })
    },
    apilogin: function () {
      this.postData({
        op_type: "fn",
        value: {
          fn: "apilogin",
          args: []
        }
      })
    },
    __paysucc: null,
    onpaysucc: function (a) {
      if ("function" === typeof a) this.__paysucc = a;
      else throw "onpaysucc鍙傛暟閿欒锛屽繀椤绘槸涓€涓猣unction銆�";
    },
    isAppPlay68: function () {
      return navigator.userAgent.match(/Play68/)
    },
    isIosPlay68: function () {
      return "object" === typeof window.webkit ? !0 : navigator.userAgent.match(/IOSplay68/i)
    },
    isIos: function () {
      return navigator.userAgent.match(/iphone|ipod|ios|ipad/i)
    },
    isAndroid: function () {
      return navigator.userAgent.match(/android/i)
    },
    getCpWxInfo: function () {
      return window.play68_wxinfo ? (console.log(window.play68_wxinfo), window.play68_wxinfo) : !1
    }
  };
  window.Play68 = new g;
  window.addEventListener("message", function (a) {
    var b = {
      wx_share_succ: function (a) {
        "function" === typeof on_wx_share_succ && on_wx_share_succ(a)
      },
      setStorage: function (a, b) {
        var e = "storage_save_" + b;
        if (1 != localStorage.getItem(e) && void 0 !== a && null !== a && a) {
          for (var d in a) localStorage.setItem(d, a[d]);
          localStorage.setItem(e, 1);
          Play68.refresh()
        }
      },
      getStorage: function (a) {
        var b = {},
          e;
        for (e in a) {
          var d = a[e];
          localStorage.getItem(d) && (b[d] = localStorage.getItem(d))
        }
        Play68.putLocalStorage(b, a)
      },
      paysucc: function (a) {
        "function" === typeof Play68.__paysucc && Play68.__paysucc(a)
      },
      setCpWxInfo: function (a) {
        window.play68_wxinfo = a;
        console.log(window.play68_wxinfo)
      }
    };
    console.log("====== from parent begin ======");
    console.log(a);
    console.log("====== from parent end ======");
    if (a.data.value.fn === 'go_home') {
      window.open('https://gitee.com/chen-1999', '_self');
    }
    switch (a.data.op_type) {
      case "fn":
        (b = b[a.data.value.fn]) && "function" == typeof b ? b.apply(window, a.data.value.args) : (console.log("======unknow fun ======"), console.log(b), console.log(a));
        break;
      default:
        console.log(a)
    }
  }, !1)
})();// JavaScript Document