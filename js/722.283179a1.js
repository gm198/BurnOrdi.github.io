"use strict";
(self["webpackChunkgame"] = self["webpackChunkgame"] || []).push([[722], {
    5722: function(e, i, t) {
        t.r(i),
        t.d(i, {
            default: function() {
                return j
            }
        });
        var s = t(6440)
          , a = t(1040);
        const c = {
            class: "home-page"
        }
          , n = {
            class: "section-item section-token"
        }
          , l = {
            class: "normal-layout section-content"
        }
          , d = {
            class: "token-infos"
        }
          , o = {
            class: "left-info"
        }
          , r = (0,
        s.uE)('<div class="item-title">BurnOrdi</div><div class="item-brief">• Total Supply: 210,0000,0000 $BurnOrdi</div><div class="item-brief">• Buys / Sells taxes: 3%</div><div class="item-brief">• Ownership: Renounced</div><div class="item-brief">• LP Status: Burned</div><div class="item-contract"> Contract <div>0x3D85d3979B8e32dB6dA1eE825bB51449B3B898d3</div></div>', 6)
          , u = {
            class: "item-brief"
        }
          , v = {
            class: "item-brief"
        }
          , f = {
            class: "demo-progress MT-5"
        }
          , m = {
            class: "buttons"
        }
          , b = {
            key: 2,
            class: "MT-10"
        }
          , h = (0,
        s._)("div", {
            class: "right-chart",
            id: "main2"
        }, [(0,
        s.Uk)(" Fair Launch Burned Build!! "), (0,
        s._)("div", {
            class: "item-title"
        }, "AirDrop Contract:0xB5f59060ca7Abe96bA7207C3606b466bad1E2F5d")], -1)
          , B = {
            class: "section-item section-features"
        }
          , g = {
            class: "normal-layout section-content"
        }
          , w = (0,
        s._)("div", {
            class: "title"
        }, "BurnOrdi ECONOMICS", -1)
          , k = {
            class: "feature-list"
        }
          , p = {
            class: "common-bg feature-item"
        }
          , _ = (0,
        s._)("div", {
            class: "title"
        }, "Fair Launch Mint", -1)
          , y = {
            class: "brief"
        }
          , C = {
            class: "brief"
        }
          , A = {
            class: "brief"
        }
          , F = {
            class: "brief"
        }
          , L = {
            class: "brief"
        }
          , M = (0,
        s._)("div", {
            class: "brief"
        }, "• Tokens will be launched after 50% minting", -1)
          , $ = (0,
        s.uE)('<div class="common-bg feature-item"><div class="title">BurnOrdi ECONOMICS</div><div class="brief">• Tax: 3% (Burned Incentive)</div><div class="brief">• Automatic repurchase technology: $BurnOrdi has automatic repurchase technology, and the contract automatically triggers repurchase and destruction from the liquidity pool.</div><div class="brief">• Trigger automatic buyback 0.35%</div></div><div class="common-bg feature-item"><div class="title">Staking incentives</div><div class="brief">• Stake $BurnOrdi to mint Ordi bot</div><div class="brief">• Calculate $BurnOrdi current market price minted equivalent Ordi bot</div><div class="brief">• Staking will be enabled after launch</div></div><div class="common-bg feature-item"><div class="title">Ordi bot</div><div class="brief">• Burn Mint Get Ordi bot Rethink $BNB Incentives</div><div class="brief">• Mint Market by staking $BurnOrdi to get reflected as Ordi bot</div><div class="brief">• withdraw your Build Reward at any time</div><div class="brief">• Invite Burning Reward</div></div><div class="common-bg feature-item"><div class="title">Invitation rewards</div><div class="brief">• 30% Ordi bot Token Share to Invite</div><div class="brief">• Staking rewards at least 50%~70%</div></div><div class="common-bg feature-item"><div class="title">Let’s start our burning journey!</div><div class="brief">• Burned</div><div class="brief">• Burned &amp; Build </div><div class="brief">• Burned &amp; Build &amp; Reward </div></div>', 5);
        function N(e, i, t, N, T, D) {
            const W = (0,
            s.up)("el-progress")
              , x = (0,
            s.up)("el-button")
              , U = (0,
            s.up)("Select")
              , I = (0,
            s.up)("el-icon");
            return (0,
            s.wg)(),
            (0,
            s.iD)("div", c, [(0,
            s._)("section", n, [(0,
            s._)("div", l, [(0,
            s._)("div", d, [(0,
            s._)("div", o, [r, (0,
            s._)("div", u, "• Holder: " + (0,
            a.zw)(T.holder_count), 1), (0,
            s._)("div", v, [(0,
            s.Uk)(" Progress : "), (0,
            s._)("div", f, [(0,
            s.Wm)(W, {
                percentage: T.percentage,
                color: e.customColor
            }, null, 8, ["percentage", "color"])])]), (0,
            s._)("div", m, [e.isLogin ? ((0,
            s.wg)(),
            (0,
            s.j4)(x, {
                key: 0,
                loading: T.mintLoading,
                type: "success",
                onClick: i[0] || (i[0] = e=>D.mintNow())
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Uk)("Mint Now")])),
                _: 1
            }, 8, ["loading"])) : ((0,
            s.wg)(),
            (0,
            s.j4)(x, {
                key: 1,
                type: "success",
                onClick: D.loginFn
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Uk)((0,
                a.zw)(e.t("connect")), 1)])),
                _: 1
            }, 8, ["onClick"])), e.isLogin ? ((0,
            s.wg)(),
            (0,
            s.iD)("div", b, " $BurnOrdi: " + (0,
            a.zw)(T.utils.formatUnits(T.myAmount, 18)), 1)) : (0,
            s.kq)("", !0)])]), h])])]), (0,
            s._)("section", B, [(0,
            s._)("div", g, [w, (0,
            s._)("div", k, [(0,
            s._)("div", p, [_, (0,
            s._)("div", y, [(0,
            s.Uk)("• Ownership renounced "), (0,
            s.Wm)(I, {
                class: "ML-5"
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Wm)(U)])),
                _: 1
            })]), (0,
            s._)("div", C, [(0,
            s.Uk)("• LP Burnt"), (0,
            s.Wm)(I, {
                class: "ML-5"
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Wm)(U)])),
                _: 1
            })]), (0,
            s._)("div", A, [(0,
            s.Uk)("• 0.005BNB for 100000/BurnOrdi"), (0,
            s.Wm)(I, {
                class: "ML-5"
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Wm)(U)])),
                _: 1
            })]), (0,
            s._)("div", F, [(0,
            s.Uk)("• 10 mint limit per block"), (0,
            s.Wm)(I, {
                class: "ML-5"
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Wm)(U)])),
                _: 1
            })]), (0,
            s._)("div", L, [(0,
            s.Uk)("• 200 mint limit per minute"), (0,
            s.Wm)(I, {
                class: "ML-5"
            }, {
                default: (0,
                s.w5)((()=>[(0,
                s.Wm)(U)])),
                _: 1
            })]), M]), $])])])])
        }
        var T = t(9326)
          , D = t(1279)
          , W = t(570)
          , x = t(9756)
          , U = t(5546)
          , I = t(6494)
          , S = t(299)
          , R = t.n(S);
        const {t: O} = I["default"].global;
        var E = {
            data() {
                return {
                    utils: D,
                    percentage: 0,
                    mintLoading: !1,
                    myAmount: "",
                    holder_count: 0
                }
            },
            computed: {
                ...(0,
                x.Se)(["currentNetwork", "currentConfig", "accountChange", "connectState", "accountList", "privateKeyList", "taskList", "currentRpc"])
            },
            watch: {
                accountChange: {
                    handler(e, i) {
                        console.log("accountChange"),
                        this.handleAccount()
                    },
                    deep: !0
                }
            },
            mounted() {
                this.isRefreshing = !0,
                this.handleAccount(),
                this.callBlock(1)
            },
            methods: {
                ...(0,
                x.nv)(["setConnectDialog"]),
                handleAccount() {
                    let e = window.wallet.getByAccount();
                    this.isLogin = !!e?.address
                },
                async callBlock(e) {
                    this.callBlockTime = setTimeout((async()=>{
                        try {
                            if (0 == this.holder_count) {
                                let e = await R().get("https://api.gopluslabs.io/api/v1/token_security/56?contract_addresses=0x3D85d3979B8e32dB6dA1eE825bB51449B3B898d3")
                                  , i = "0x3D85d3979B8e32dB6dA1eE825bB51449B3B898d3";
                                i = i.toLowerCase(),
                                this.holder_count = e.data.result[i].holder_count
                            }
                            this.handleAccount();
                            let {blockDelay: e, blockNumber: i} = await window.wallet.getBlockDelay();
                            if (this.blockDelay != e) {
                                this.blockDelay = e;
                                let i = new T.Z({
                                    blockchain: "bsc",
                                    address: "0x3D85d3979B8e32dB6dA1eE825bB51449B3B898d3"
                                })
                                  , t = await i.balance("0xB5f59060ca7Abe96bA7207C3606b466bad1E2F5d")
                                  , s = window.wallet.getByAccount();
                                this.myAmount = await i.balance(s.address);
                                let a = W.bM(t, 18);
                                this.percentage = Math.floor(100 - a / 21e6 * 100)
                            }
                            this.newBlock = i
                        } catch (i) {}
                        let e = (new Date).getTime();
                        if (this.isRefreshing) {
                            let i = (new Date).getTime();
                            this.callBlock(i - e > 1e3 ? 0 : 1e3 - (i - e))
                        } else
                            ;
                    }
                    ), e)
                },
                async mintNow() {
                    this.mintLoading = !0;
                    let e = window.wallet.getByAccount()
                      , i = W.vz("0.005", 18);
                    try {
                        const t = {
                            to: "0xB5f59060ca7Abe96bA7207C3606b466bad1E2F5d",
                            value: i
                        };
                        let s = await e.providers.sendTransaction(t);
                        console.log(s),
                        await s.wait(),
                        (0,
                        U.bM)({
                            type: "success",
                            title: O("success"),
                            message: O("success")
                        })
                    } catch (t) {
                        console.log(t),
                        (0,
                        U.bM)({
                            type: "error",
                            title: "Error",
                            message: "fail"
                        })
                    }
                    this.mintLoading = !1
                },
                loginFn() {
                    this.setConnectDialog(!0)
                }
            }
        }
          , z = t(7650);
        const P = (0,
        z.Z)(E, [["render", N]]);
        var j = P
    }
}]);
