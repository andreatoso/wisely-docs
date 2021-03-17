! function(t) {
    var a = {};

    function o(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = a, o.d = function(e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(n, e) {
        if (1 & e && (n = o(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if (o.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var a in n) o.d(t, a, function(e) {
                return n[e]
            }.bind(null, a));
        return t
    }, o.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(n, "a", n), n
    }, o.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, o.p = "/", o(o.s = 1)
}([function(e, n, t) {}, function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, "cache", function() {
        return se
    }), t.d(n, "getCurrentVersion", function() {
        return xe
    }), t.d(n, "bootstrapView", function() {
        return Ce
    }), t.d(n, "fetchAllData", function() {
        return Se
    }), t.d(n, "renderAll", function() {
        return _e
    }), t.d(n, "showError", function() {
        return Ee
    }), t.d(n, "initialUILoad", function() {
        return ke
    }), t.d(n, "updateSelectedLanguageIfRequired", function() {
        return Re
    }), t.d(n, "enforceTableWidth", function() {
        return Le
    }), t.d(n, "populateDataIntoTemplate", function() {
        return Oe
    }), t.d(n, "showLoader", function() {
        return Ae
    }), t.d(n, "prepareView", function() {
        return Ie
    }), t.d(n, "enableTooltip", function() {
        return qe
    }), t.d(n, "enablePopper", function() {
        return Te
    }), t.d(n, "scrollToHash", function() {
        return je
    }), t.d(n, "attachExampleHandlers", function() {
        return He
    }), t.d(n, "fetchSnippetFromCache", function() {
        return Ne
    }), t.d(n, "attachHandlers", function() {
        return Je
    }), t.d(n, "processExpandableElements", function() {
        return Me
    }), t.d(n, "handleExpandableContent", function() {
        return De
    }), t.d(n, "attachExpandableDescriptionHandlers", function() {
        return Pe
    }), t.d(n, "handleExpandableTable", function() {
        return Ue
    }), t.d(n, "attachSidebarHandlers", function() {
        return Be
    }), t.d(n, "updateSettingValue", function() {
        return Fe
    }), t.d(n, "saveSelectedLanguageSettings", function() {
        return Ve
    }), t.d(n, "isPositive", function() {
        return We
    }), t.d(n, "filterLanguagesList", function() {
        return ze
    }), t.d(n, "attachLanguageSettingsHandlers", function() {
        return Ge
    }), t.d(n, "attachLanguageSettingsListHandlers", function() {
        return Ke
    }), t.d(n, "attachLanguageSettingsRetryHandlers", function() {
        return Ze
    }), t.d(n, "handleLanguageSettingsModalClose", function() {
        return Qe
    }), t.d(n, "activateFolder", function() {
        return Xe
    }), t.d(n, "isSnippetHighlightEnabled", function() {
        return Ye
    }), t.d(n, "checkIfPrettifyEnabled", function() {
        return en
    }), t.d(n, "bindScrollHandler", function() {
        return nn
    }), t.d(n, "adjustDocumentPadding", function() {
        return tn
    }), t.d(n, "handleLayoutChange", function() {
        return an
    }), t.d(n, "getUpdatedUrl", function() {
        return on
    }), t.d(n, "setDocumentationConfigCookie", function() {
        return rn
    }), t.d(n, "getExamples", function() {
        return sn
    }), t.d(n, "getInitialJson", function() {
        return ln
    }), t.d(n, "renderExamples", function() {
        return cn
    }), t.d(n, "sanitiseSnippets", function() {
        return un
    }), t.d(n, "renderCollection", function() {
        return dn
    }), t.d(n, "updateAuthInfoAndRequestBodyCacheRecursively", function() {
        return gn
    }), t.d(n, "processAuthData", function() {
        return pn
    }), t.d(n, "processAuthInfoForDisplay", function() {
        return fn
    }), t.d(n, "showInModal", function() {
        return mn
    }), t.d(n, "renderLanguageListInModal", function() {
        return vn
    }), t.d(n, "renderSelectedLanguageSettings", function() {
        return hn
    }), t.d(n, "renderLanguageSettingsModal", function() {
        return yn
    }), t.d(n, "renderLanguageSettingsLoadError", function() {
        return bn
    }), t.d(n, "fetchSelectedLanguageSettings", function() {
        return $n
    }), t.d(n, "showLanguageSettingsModal", function() {
        return wn
    }), t.d(n, "collapseFolder", function() {
        return xn
    }), t.d(n, "expandFolder", function() {
        return Cn
    }), t.d(n, "toggleFolderState", function() {
        return Sn
    }), t.d(n, "changeResponse", function() {
        return _n
    }), t.d(n, "changeAllRequests", function() {
        return En
    }), t.d(n, "buildToC", function() {
        return kn
    }), t.d(n, "updateTOC", function() {
        return In
    }), t.d(n, "highlightVisibleSnippets", function() {
        return Rn
    }), t.d(n, "fetchContentToHighlight", function() {
        return Ln
    }), t.d(n, "elementIsVisible", function() {
        return On
    }), t.d(n, "changeLoadingText", function() {
        return An
    }), t.d(n, "setupAccordionToggleChanges", function() {
        return qn
    });
    t(0);
    var a = {
            inherit: "Inherit auth from parent",
            noauth: "No Auth",
            basic: "Basic Auth",
            bearer: "Bearer Token",
            digest: "Digest Auth",
            oauth1: "OAuth 1.0",
            oauth2: "OAuth 2.0",
            hawk: "Hawk Authentication",
            awsv4: "AWS Signature",
            ntlm: "NTLM Authentication [Beta]",
            apikey: "API Key",
            edgegrid: "Akamai EdgeGrid"
        },
        o = {
            key: "curl",
            label: "cURL",
            variant: "cURL"
        };

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(n, t) {
        var e = window && window.localStorage,
            a = t;
        if (e) {
            if ("object" === r(t)) try {
                a = JSON.stringify(t)
            } catch (e) {
                return void Raven.captureException(new Error("Attempt to stringify an invalid object:"), {
                    extra: {
                        object: t,
                        error: e
                    }
                })
            }
            "string" != typeof n && Raven.captureException(new Error("Attempt to pass in a non-string key value to local storage"), {
                extra: {
                    key: n
                }
            });
            try {
                return void("function" == typeof e.setItem && e.setItem(n, a))
            } catch (e) {
                Raven.captureException(new Error(e), {
                    extra: {
                        key: n,
                        value: t
                    }
                })
            }
        }
    }

    function v(n) {
        var e = window && window.localStorage;
        if (e) {
            "string" != typeof n && Raven.captureException(new Error("Attempt to pass in a non-string key value to local storage"), {
                extra: {
                    key: n
                }
            });
            try {
                return "function" == typeof e.getItem && e.getItem(n) || null
            } catch (e) {
                Raven.captureException(new Error(e), {
                    extra: {
                        key: n
                    }
                })
            }
        }
    }
    var s = /[0-9]+-\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/;

    function l() {
        return !("string" != typeof window.location.pathname || !window.location.pathname.match(/^\/preview\//))
    }

    function d() {
        var e = window && window.location;
        if (e) {
            var n = s.exec(e.pathname);
            if (n && (!n || n.length)) {
                var t = n[0];
                if (t && (!t || t.length)) return t
            }
        }
    }

    function c(n) {
        var e, t, a, o = d(),
            r = $(".active-environment").data("environment-id"),
            i = "curl",
            s = "curl",
            l = "cURL",
            c = xe(),
            u = scope.apiHost + "/api/preview/" + o + "?type=snippet";
        try {
            e = v("lang_label"), t = v("lang_variant"), a = v("lang_preference"), t && a && e && (s = e, i = a, l = t)
        } catch (e) {
            Raven.captureException(e)
        }
        if (r && 0 != r && (u += "&environment=" + r), u += "&lang=" + i, u += "&variant=" + l, c && (u += "&versionTag=" + c), !o) return Raven.captureException(new Error("Attempt to fetch examples without any valid collection UID available"), {
            extra: {
                api: u,
                id: o,
                ownerId: ownerId
            }
        }), n({});
        $.ajax(u).done(function(e) {
            return n(e, i, l, s)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching example JSON"), {
                extra: {
                    api: u,
                    error: e.responseJSON
                }
            }), n({
                data: null
            }, i, l, s)
        })
    }

    function u(t, a) {
        ! function(e, n) {
            var t = {
                url: scope.apiHost + "/settings",
                contentType: "application/json",
                type: "POST"
            };
            try {
                t.data = JSON.stringify({
                    languages: [e]
                })
            } catch (e) {
                return Raven.captureException({
                    error: e,
                    message: "Error string-ifying stored settings"
                }), n(e)
            }
            $.ajax(t).done(function(e) {
                return n(null, e)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching language specific settings"), {
                    extra: {
                        url: t.url,
                        error: e.responseJSON
                    }
                }), n(e)
            })
        }(t, function(e, n) {
            return e ? a(e) : (n && "unauthorized" === n.status && function(e) {
                if (e) {
                    var n = g(),
                        t = e && e.key,
                        a = e && e.variant;
                    n = n || [];
                    for (var o = 0; o < n.length; o++)
                        if (n[o].key === t && n[o].variant === a) return n[o] = e, i("language_settings", n);
                    n && t && a && n.push(e), i("language_settings", n)
                }
            }(t), a(null))
        })
    }

    function g() {
        var e = v("language_settings");
        try {
            e = JSON.parse(e)
        } catch (e) {
            Raven.captureException(e)
        }
        return e
    }

    function h(e, n) {
        var t = g(),
            a = 0;
        if (Array.isArray(t))
            for (a = 0; a < t.length; a++)
                if (t[a].key === e && t[a].variant === n) return t[a];
        return {}
    }

    function p(e, n, t) {
        var a, o, r, i = {};
        try {
            r = h(a = e, o = n)
        } catch (e) {
            return Raven.captureException(e), t(e)
        }
        return function(e, n, t) {
            e = e || "curl", n = n || "cURL";
            var a = scope.apiHost + encodeURI("/settings/" + e + "/" + n + "/"),
                o = {
                    url: a,
                    contentType: "application/json"
                };
            $.ajax(o).done(function(e) {
                return t(null, e)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching language specific settings"), {
                    extra: {
                        url: a,
                        error: e.responseJSON
                    }
                }), t(e, {})
            })
        }(a, o, function(e, n) {
            return e ? t(e) : "success" === (i = n).status ? t(null, i) : r && !_.isEmpty(r) ? t(null, r) : t(null, i)
        })
    }

    function f() {
        var e, n, t;
        try {
            e = v("lang_label"), n = v("lang_preference"), t = v("lang_variant")
        } catch (e) {
            Raven.captureException(e)
        }
        return {
            label: e,
            key: n,
            variant: t
        }
    }

    function m() {
        var e, n = $('meta[name="languages"]').attr("content");
        try {
            e = JSON.parse(n)
        } catch (e) {
            Raven.captureException(e)
        }
        return e
    }

    function y(o) {
        function e(e, n, t, a) {
            return o(e, n, t, a)
        }
        return l() ? c(e) : function(n) {
            var t, e, a, o, r, i = $('meta[name="cmodelID"]').attr("content"),
                s = $('meta[name="ownerId"]').attr("content"),
                l = $('meta[name="publishedId"]').attr("content"),
                c = $(".active-environment").data("environment-id"),
                u = "curl",
                d = "curl",
                g = "cURL",
                p = xe(),
                f = {},
                m = {};
            try {
                e = v("lang_label"), a = v("lang_variant"), o = v("lang_preference"), e && a && o && (d = e, u = o, g = a)
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                f = {
                    codegenSettings: (r = h(u, g)) && r.options
                }
            } catch (e) {
                Raven.captureException({
                    error: e,
                    message: "Error parsing stored language settings."
                })
            }
            if (t = !i && s && l ? scope.apiHost + "/api/examples/" + s + "/" + l : scope.apiHost + "/api/examples/" + i, c && 0 != c ? (t += "?environment=" + c, t += "&lang=" + u) : t += "?lang=" + u, t += "&variant=" + g, p && (t += "&versionTag=" + p), m = {
                    url: t,
                    contentType: "application/json",
                    type: "POST"
                }, f) try {
                m.data = JSON.stringify(f)
            } catch (e) {
                Raven.captureException({
                    error: e,
                    message: "Error string-ifying stored settings"
                })
            }
            if (!(i || s && l)) return Raven.captureException(new Error("Attempt to fetch examples without any valid ID available"), {
                extra: {
                    api: t,
                    id: i,
                    ownerId: s,
                    publishedId: l
                }
            }), n({});
            $.ajax(m).done(function(e) {
                return n(e, u, g, d)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching example JSON"), {
                    extra: {
                        api: t,
                        error: e.responseJSON
                    }
                }), n({
                    data: null
                }, u, g, d)
            })
        }(e)
    }

    function b(e) {
        try {
            if (e.item) return e.item.forEach(function(e) {
                return b(e)
            });
            var n = e && e._postman_id,
                t = e && e.request && e.request.body,
                a = e && e.request && e.request.header,
                o = e && e.request && e.request.urlObject && e.request.urlObject.query,
                r = e && e.request && e.request.urlObject && e.request.urlObject.variable;
            ! function(e, n) {
                if (!n) return;
                var t, a = n.mode,
                    o = n[a];
                "formdata" === a ? t = $("#" + e).find(".request-body-formdata-container") : "urlencoded" === a && (t = $("#" + e).find(".request-body-urlencoded-container"));
                if (!Array.isArray(o)) return;
                var r = {
                        rows: o.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    i = Handlebars.partials._table(r);
                t.html(i)
            }(n, t),
            function(e, n) {
                if (!Array.isArray(n)) return;
                var t = $("#" + e).find(".headers-key-value-table"),
                    a = {
                        rows: n.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                t.html(o)
            }(n, a),
            function(e, n) {
                if (!Array.isArray(n)) return;
                var t = $("#" + e).find(".request-query-params-container"),
                    a = {
                        rows: n.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description && e.description.content,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                t.html(o)
            }(n, o),
            function(e, n) {
                if (!Array.isArray(n)) return;
                var t = $("#" + e).find(".request-path-variable-container"),
                    a = {
                        rows: n.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description && e.description.content,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                t.html(o)
            }(n, r)
        } catch (e) {
            Raven.captureException(e)
        }
    }

    function w() {
        $("body").on("shown.bs.tab", '.example-response__tabs a[data-toggle="tab"]', function(a) {
            Ye(function(e) {
                if (e) {
                    var n = _.get(a, "target.dataset.target"),
                        t = $(n + ' code[class*="language-"]').get(0);
                    Prism.highlightElement(t)
                }
            })
        })
    }

    function x() {
        var e = $(".logo");
        e.css("background-image", 'url("' + e.data("identity-href") + '")').removeData("identity-href")
    }
    $(".top-bar"), $(".layout"), $(".config-bar");
    var C = {
            "classic-double-column": {
                value: "classic-double-column",
                label: "Double Column",
                template: "documenter"
            },
            "classic-single-column": {
                value: "classic-single-column",
                label: "Single Column",
                template: "classic-single-column"
            }
        },
        S = C[$('meta[name="documentationLayout"]').attr("content") || "classic-double-column"],
        E = "#doc-body" + ("classic-single-column" === S.value ? "-" + S.value : "");

    function k(e) {
        return "classic-double-column" === S.value ? $(E).removeClass("is-sidebar-error").addClass("is-sidebar-loading") : $(E).removeClass("is-sidebar-error").addClass("are-examples-loading"), $(".top-bar").addClass("is-loading"), $(".config-bar").addClass("is-loading"), c(e)
    }

    function R(n) {
        var e = d(),
            t = scope.apiHost + "/api/preview/" + e,
            a = window && window.location && window.location.search;
        if (0 < (a += "&type=meta").length && (t += a), !e) return Raven.captureException(new Error("Attempt to fetch Preview meta without any valid collection Id"), {
            extra: {
                api: t,
                uid: e
            }
        }), n({});
        $.ajax(t, {
            dataType: "html"
        }).done(function(e) {
            return n(e)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching collection meta for Preview"), {
                extra: {
                    api: t,
                    error: e && e.statusText
                }
            }), L(e && e.responseText), x()
        })
    }

    function L(e) {
        $(".preview-main-body").replaceWith(e)
    }

    function O(n) {
        var e = d(),
            t = $(".active-environment").data("environment-id"),
            a = xe(),
            o = scope.apiHost + "/api/preview/" + e,
            r = ["type=collection", "segregateAuth=true"];
        if (t && 0 != t && r.push("environment=" + t), a && r.push("versionTag=" + a), 0 < r.length && (o += "?" + r.join("&")), !e) return Raven.captureException(new Error("Attempt to fetch JSON without any valid ID available"), {
            extra: {
                api: o,
                uid: e
            }
        }), n({});
        $.ajax(o).done(function(e) {
            return n(e)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching initial JSON"), {
                extra: {
                    api: o,
                    error: e.responseJSON
                }
            }), e.responseJSON && e.responseJSON.error && e.responseJSON.error.message && (e.responseJSON.error.message += " (Trace: ".concat(e.responseJSON.trace, ")")), Ee(e.responseJSON && e.responseJSON.error)
        })
    }

    function A(e, t, a, o) {
        if (se.exampleResponses = {}, se.exampleRequests = {}, e) {
            var r, n = e && e.data;
            if (!t && !a && !o) try {
                o = getStorageItem("lang_label") || "cURL", t = getStorageItem("lang_preference") || "curl", a = getStorageItem("lang_variant") || "cURL"
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                m()
            } catch (e) {
                Raven.captureException(e)
            }
            if ($("#mobile-controls .language-dropdown .selected-language").text(o + " - " + a), _.isEmpty(n)) return null === n ? "classic-double-column" === S.value ? $(E).removeClass("is-sidebar-loading").addClass("is-sidebar-error") : $(E).removeClass("are-examples-loading").addClass("is-examples-error") : "classic-double-column" === S.value ? $(E).removeClass("is-sidebar-loading") : $(E).removeClass("are-examples-loading"), $(".top-bar").removeClass("is-loading"), $(".config-bar").removeClass("is-loading"), $(".layout").removeClass("is-content-loading"), $(".config-bar").removeClass("is-content-loading"), $(".retryLoadingExamples").on("click", function() {
                k(A)
            }), void $("#language-settings").on("click", function() {
                wn()
            });
            Array.isArray(n) && n.forEach(function(l) {
                var e = $("#" + l.item_id + " .examples"),
                    n = l.example;
                Array.isArray(n) && n.forEach(function(e, n) {
                    var t = _.get(e, "response.body"),
                        a = _.get(e, "response.header"),
                        o = _.get(e, "snippet"),
                        r = o && Object.keys(o)[0],
                        i = r && Object.keys(o[r])[0],
                        s = un(o[r], r, i);
                    if (se.exampleRequests[l.item_id + "_" + n] = s, t) {
                        try {
                            t = JSON.stringify(JSON.parse(t), null, 2), e.response.body = t
                        } catch (e) {}
                        se.exampleResponses[l.item_id + "_" + n] = t, Array.isArray(a) && a.length && (se.exampleHeaders[l.item_id + "_" + n] = a.reduce(function(e, n) {
                            return e + (n.key + ": ") + n.value + "\n"
                        }, ""))
                    }
                }), r = Handlebars.partials["_request-examples"]({
                    sample: n,
                    _postman_id: l.item_id,
                    selectedLang: t,
                    selectedLangVariant: a,
                    selectedLangLabel: o,
                    layout: S.value
                }), e.replaceWith(r)
            }), $(".top-bar").removeClass("is-loading"), $(".config-bar").removeClass("is-loading"), $(".layout").removeClass("is-content-loading"), $(".config-bar").removeClass("is-content-loading"), "classic-double-column" === S.value ? $(E).removeClass("is-sidebar-loading is-sidebar-error") : $(E).removeClass("are-examples-loading is-sidebar-error"), setTimeout(function() {
                Modernizr.csspositionsticky || tn($(".pm-message-persistent")), Rn(), He(), Me(), w()
            })
        }
    }

    function I(e, n) {
        var t = e,
            a = e && e.item,
            o = S && S.label;
        t && $(".active-environment").data("environment-id"), t && t.info.documentationLayout && (o = C[t.info.documentationLayout].label), $(".layout-dropdown .selected-layout").text(o), se.requestBody = {}, a.forEach(function(e) {
            gn(e)
        }), t.documentationLayout = S.value;
        var r = "classic-single-column" === S.value ? "-" + S.value : "";
        pn(t, _.get(t, "info._postman_id")), Oe("doc-sidebar", "#doc-body" + r, t), Oe("nav-sidebar", "#nav-sidebar", t), "classic-double-column" === S.value && ($(".layout").removeClass("is-content-loading"), $(".config-bar").removeClass("is-content-loading")), setTimeout(function() {
            Le()
        }), kn(), b(t), setTimeout(function() {
            Be()
        }, 100), "function" == typeof n && n()
    }

    function q(n) {
        var t = [];
        try {
            n = JSON.parse(n)
        } catch (e) {
            Raven.captureException(e)
        }
        return Object.keys(n).forEach(function(e) {
                t.push(e + "=" + n[e])
            }),
            function(e) {
                window.location = window.location.origin.concat(window.location.pathname, "?", e)
            }(t.join("&"))
    }

    function T() {
        window.addEventListener("message", function(e) {
            ! function(e, n) {
                var t = $('meta[name="allowedDomain"]').attr("content");
                if ("string" == typeof t && 0 !== t.length) {
                    var a = new RegExp(t),
                        o = new RegExp(/^https?:\/\/([^/?#]+)(?:[/?#]|$)$/),
                        r = e.origin,
                        i = "string" == typeof r && (r.match(o)[1] || ""),
                        s = e.data;
                    t && r && "string" == typeof i && a.test(i) && n(s)
                }
            }(e, q)
        })
    }

    function j() {
        $(".toggle-accordion-collapse").off(), $(".toggle-accordion-collapse").on("click", function(e) {
            var n = $(e.target).closest(".accordion"),
                t = n.hasClass("open");
            n.toggleClass("open"), t ? n.trigger("collapse") : n.trigger("open")
        })
    }

    function H() {
        $(".dropdown-selector").each(function(e, n) {
            $(n).chosen({
                disable_search: !0
            })
        }), $(".chosen-search-input").attr("maxlength", 100), $(".chosen-select").on("change", function(e, n) {
            ! function(e, n) {
                $(".".concat(e)).trigger("change", {
                    id: e,
                    selectedValue: n
                })
            }($(this).closest(".dropdown-container").data("dropdown-id"), n.selected), e.stopImmediatePropagation(), e.preventDefault()
        })
    }

    function N(e, n) {
        $("".concat(e, " .dropdown-selector")).chosen("destroy"), $("".concat(e, " .dropdown-selector")).chosen(n)
    }

    function J(e, n) {
        $("".concat(e, " .dropdown-selector")).val(n).trigger("chosen:updated")
    }
    var M = [],
        D = {},
        P = 5e3;

    function U(n) {
        $(".toast").hover(function(e) {
            ! function(e) {
                W(e)
            }("timer" + $(e.target).closest(".toast").data("toast-id"))
        }, function(e) {
            V($(e.target).closest(".toast").data("toast-id"), n)
        }), $(".toast .pm-toast-dismiss").on("click", function(e) {
            F($(e.target).closest(".toast").data("toast-id"))
        })
    }

    function B(e, n, t, a) {
        var o = $("#toast-container"),
            r = M.length + 1;
        M.push({
            id: r,
            type: e && e.toLowerCase(),
            title: n,
            content: t
        });
        var i = Handlebars.templates.toast,
            s = {
                toasts: M
            };
        o.replaceWith(i(s)), U(a), V(r, a)
    }

    function F(n) {
        var e = "timer" + n,
            t = $(".toast[data-id='toast-".concat(n, "']"));
        W(e), M = M.filter(function(e) {
            return e.id !== n
        }), t.remove(), t.off()
    }

    function V(e, n) {
        var t = n && "number" == typeof n ? n : P,
            a = "timer" + e;
        W(a), D[a] = setTimeout(function() {
            F(e)
        }, t)
    }

    function W(e) {
        clearTimeout(D[e]), delete D[e]
    }

    function z(e, n) {
        e && $(e).text(n)
    }

    function G(e) {
        var n = l() ? function(e, n) {
            for (var t = window.location.search.substring(1).split("&"), a = !1, o = 0; o < t.length; o++) {
                if (t[o].split("=")[0] === e) {
                    t[o] = e + "=" + n, a = !0;
                    break
                }
            }
            return a || t.push(e + "=" + selectedLayout.value), t = t.join("&"), window.location.origin + window.location.pathname + "?" + t + window.location.hash
        }("version", e) : "?version=".concat(e);
        window.open(n, "_self")
    }

    function K(e) {
        return function(e) {
            if (Array.isArray(e)) return Z(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, n) {
            if (!e) return;
            if ("string" == typeof e) return Z(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Z(e, n)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Z(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
        return a
    }
    var Q = ".environment-dropdown-selector",
        X = {
            none: [{
                label: "No environment",
                value: 0
            }],
            published: [],
            user: []
        },
        Y = !1;

    function ee(e) {
        return "meta" === (0 < arguments.length && void 0 !== e ? e : "api") ? function() {
            var e = $('meta[name="user:environments"]').attr("content");
            try {
                X.user = JSON.parse(e)
            } catch (e) {
                Raven.captureException(e)
            }
            te()
        }() : function() {
            var n = $('meta[name="ownerId"]').attr("content"),
                t = $('meta[name="publishedId"]').attr("content");
            Y || ne(), $.ajax([scope.apiHost, "api/environments", n, t].join("/")).done(function(e) {
                if (Array.isArray(e.environments)) {
                    if (X.published.length) {
                        var n = X.published.map(function(e) {
                            return e.value
                        });
                        return X.user = e.environments.filter(function(e) {
                            return !n.includes(e.value)
                        })
                    }
                    return X.user = e.environments
                }
            }).fail(function(e) {
                Raven.captureException(new Error("Error fetching user-specific environments"), {
                    extra: {
                        api: ["/api/environments", n, t].join("/"),
                        error: e.responseJSON
                    }
                })
            }).always(te)
        }()
    }

    function ne() {
        var e = $(Q + " select option").get(1),
            n = $(".active-environment").data("environment-id");
        e && e.value === n && (X.published = [{
            label: e.text,
            value: e.value
        }]), Y = !0
    }

    function te() {
        var e = Handlebars.partials["_environment-dropdown-selector"];
        Handlebars.partials["environment-dropdown"];
        Y || ne();
        var n = e({
            environmentOptions: [].concat(K(X.none), K(X.published), K(X.user))
        });
        $(n).replaceAll(Q), N(Q, {
            disable_search: !0
        }), $(Q).on("change", function(e, n) {
            return function(e) {
                var o = !1,
                    r = l();

                function n(e, n, t, a) {
                    o && (r ? A(e, n, t, a) : cn(e, n, t, a))
                }

                function t() {
                    o = !0, r ? k(n) : sn(n)
                }
                $(".active-environment").data("environment-id", e), $(".layout").removeClass("is-error"), Ae(), r ? O(function(e) {
                    In(_.get(e, "info.toc", [])), I(e, t)
                }) : ln(function(e) {
                    In(_.get(e, "info.toc", [])), dn(e, t)
                })
            }(n.selected || n.selectedValue)
        }), J(".environment-dropdown-selector", $(".active-environment").data("environment-id"))
    }
    var ae, oe = {},
        re = !1,
        ie = [],
        se = {
            exampleRequests: {},
            exampleResponses: {},
            exampleHeaders: {},
            requestBody: {}
        },
        le = {
            maxHighlightLength: 5e3
        },
        ce = !1,
        ue = !1,
        de = {},
        ge = !1,
        pe = $(".top-bar"),
        fe = $(".layout"),
        me = $(".config-bar"),
        ve = o,
        he = {
            "classic-double-column": {
                value: "classic-double-column",
                label: "Double Column",
                template: "documenter"
            },
            "classic-single-column": {
                value: "classic-single-column",
                label: "Single Column",
                template: "classic-single-column"
            }
        },
        ye = a,
        be = he[$('meta[name="documentationLayout"]').attr("content") || "classic-double-column"],
        $e = "#doc-body" + ("classic-single-column" === be.value ? "-" + be.value : ""),
        we = "div.documentation-loader > div.loader > div#loader-text";

    function xe() {
        var e = window.location.search,
            n = /[?&]version=([^&#]*)/.exec(e),
            t = $("meta[name='versionTagId']");
        return n ? n[1] : t ? t.attr("content") : ""
    }

    function Ce(n) {
        try {
            return ce ? (Ae(), R(function(e) {
                return L(e), x(), $(fe).addClass("is-content-loading"), $(me).removeClass("is-content-loading"), O(function(e) {
                    return x(), In(_.get(e, "info.toc", [])), I(e, function() {
                        return re = !0
                    }), "function" == typeof n && n()
                })
            })) : (Ae(), x(), $(fe).addClass("is-content-loading"), $(me).removeClass("is-content-loading"), ln(function(e) {
                return In(_.get(e, "info.toc", [])), dn(e), "function" == typeof n && n()
            }))
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function Se(r) {
        try {
            var n = ce ? O : ln,
                t = ce ? k : sn;
            if (Ae(), $(fe).addClass("is-content-loading"), $(me).removeClass("is-content-loading"), z(we, "Loading collection..."), ce) return R(function(e) {
                return L(e), x(), n(function(o) {
                    In(_.get(o, "info.toc", [])), z(we, "Loading snippets..."), t(function(e, n, t, a) {
                        "function" == typeof r && r({
                            collectionJson: o,
                            examples: {
                                data: e,
                                langPreference: n,
                                langVariant: t,
                                langLabel: a
                            }
                        })
                    })
                })
            });
            x(), n(function(o) {
                In(_.get(o, "info.toc", [])), z(we, "Loading snippets..."), t(function(e, n, t, a) {
                    "function" == typeof r && r({
                        collectionJson: o,
                        examples: {
                            data: e,
                            langPreference: n,
                            langVariant: t,
                            langLabel: a
                        }
                    })
                })
            })
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function _e(e, n) {
        try {
            var t = n.data,
                a = n.langPreference,
                o = n.langVariant,
                r = n.langLabel;
            $(fe).addClass("is-content-loading"), $(me).removeClass("is-content-loading"), z(we, "Rendering..."), ce ? I(e, function() {
                return re = !0
            }) : dn(e), re && (ce ? A(t, a, o, r) : cn(t, a, o, r), attachLanguageSelectorDropdownHandlers())
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function Ee(e) {
        e = e || {}, $(".layout").addClass("is-error"), Oe("error", "#error-view", {
            code: e.code,
            message: e.message || "An error occured while fetching data, please try again later"
        })
    }

    function ke() {
        ee(ce ? "meta" : "api"), Ie(), j(), H(), N(".language-selector-dropdown", {
            disable_search: !1
        }), _.isFunction(messenger.bootstrap) && messenger.bootstrap(messenger.showAll), setTimeout(function() {
            Je()
        }, 100), Re(), $(".layout-dropdown-selector").on("change", function(e, n) {
            an(n.selectedValue)
        }), $(".version-dropdown-selector").on("change", function(e, n) {
            G(n.selectedValue)
        }), $(".language-selector-dropdown").on("change", function(e, n) {
            var t = n.selectedValue.split(" - ");
            En(t[0], t[1], t[2])
        }), qn(), _.set(Prism, "languages.pmresponseheaders", {
            kvpair: {
                pattern: /(^|\n)[^\n]*\n/,
                inside: {
                    key: /^([^:\n]+: )/
                }
            }
        })
    }

    function Re() {
        var e, n, t;
        try {
            e = v("lang_label"), n = v("lang_preference"), t = v("lang_variant")
        } catch (e) {
            Raven.captureException(e)
        }
        if (!e || !n || !t) try {
            i("lang_label", ve.label), i("lang_preference", ve.key), i("lang_variant", ve.variant)
        } catch (e) {
            Raven.captureException(e)
        }
        J(".language-selector-dropdown", n && t && e ? "".concat(n, " - ").concat(t, " - ").concat(e) : "".concat(ve.key, " - ").concat(ve.variant, " - ").concat(ve.label))
    }

    function Le() {
        $(".md-table-container").each(function(e, n) {
            var t = n.querySelector("tr").cells.length;
            $(this).css("width", 150 * t)
        })
    }

    function Oe(e, n, t) {
        var a = Handlebars.templates[e];
        $(n).html(a(t)).removeClass("is-loading")
    }

    function Ae() {
        ae = ae || $(".documentation-loader"), $($e).html(ae)
    }

    function Ie() {
        nn(), je(), qe(), Te()
    }

    function qe() {
        $('[data-toggle="tooltip"]').tooltip({
            delay: {
                show: 100
            },
            trigger: "hover"
        })
    }

    function Te() {
        $('[data-toggle="popover"]').popover()
    }

    function je() {
        var e = window.location.hash,
            n = $(e),
            t = $("html, body");
        n.length && t.scrollTop(n.offset().top)
    }

    function He() {
        $(".retryLoadingExamples").on("click", function() {
            ce ? k(A) : sn(cn)
        }), $(".example-name li").click(_n), $("#language-settings").on("click", function() {
            wn()
        })
    }

    function Ne(e, n) {
        if ("example-request" === n) return se.exampleRequests[e]
    }

    function Je() {
        var e = $("body"),
            n = new Clipboard(".copy-request"),
            t = new Clipboard(".copy-snippet", {
                text: function(e) {
                    return Ne($(e).data("id"), $(e).data("content-type"))
                }
            });
        e.on("click", ".is-expandable", mn), $("#mobile-controls .language_dropdown").on("click", ".dropdown-menu-item", function(e) {
            console.log("ssss");
            var n = $(e.target),
                t = n.data("lang-key"),
                a = n.data("lang-variant"),
                o = n.data("lang-label");
            t && a && o && ($("#mobile-controls .language-dropdown .selected-language").text(o + " - " + a), En(t, a, o))
        }), $("#mobile-controls #language-settings-icon").on("click", function(e) {
            wn()
        }), $("body").on("click", "#menu-toggle", function() {
            $("body").toggleClass("nav-open")
        }).on("click", ".nav a", function() {
            setTimeout(function() {
                $("body").removeClass("nav-open"), je()
            }, 0)
        }), new Clipboard(".copy-text"), n.on("success", function(e) {
            e.clearSelection(), $(e.trigger).addClass("copied"), setTimeout(function() {
                $(e.trigger).removeClass("copied")
            }, 1e3)
        }), t.on("success", function(e) {
            e.clearSelection(), $(e.trigger).addClass("copied"), setTimeout(function() {
                $(e.trigger).removeClass("copied")
            }, 1e3)
        }), $(".settings-toggle").on("click", function() {
            $("#mobile-controls").toggleClass("is-visible")
        }), T(), Pe()
    }

    function Me() {
        document.querySelectorAll(".click-to-expand-wrapper").forEach(function(e) {
            De(e)
        })
    }

    function De(e) {
        var n = $(e),
            t = 0 < n.children("code").first().length ? n.children("code").first() : n.children("table").first(),
            a = n.innerHeight(),
            o = t.innerHeight();
        a && a - 2 < o && n.addClass("is-expandable")
    }

    function Pe() {
        $(".collection-description details").one("click", Ue), $(".folder-description details").one("click", Ue), $(".request-description details").one("click", Ue)
    }

    function Ue(n) {
        setTimeout(function() {
            var e = n.target;
            $(e).children(".click-to-expand-wrapper.is-table-wrapper").toArray().forEach(function(e) {
                De(e)
            })
        }, 0)
    }

    function Be() {
        $(".folder .toggle-folder-collapse").on("click", Sn), $(".folder-link>a").on("click", Xe), $(".pm-doc-sprite-folder").on("click", function() {
            $(this).siblings(".folder-link").find("a")[0].click()
        })
    }

    function Fe(e, n, t) {
        for (var a = 0; a < e.options.length; a++)
            if (e.options[a].id === n) {
                e.options[a].value = t;
                break
            } return e
    }

    function Ve() {
        var i, o = $("#languageSettingsForm").data("language-key"),
            r = $("#languageSettingsForm").data("language-label"),
            s = $("#languageSettingsForm ").data("language-variant");
        try {
            m()
        } catch (e) {
            Raven.captureException(e)
        }
        i = JSON.parse(JSON.stringify(de)), $("#languageSettingsForm *").filter(":input").each(function() {
            var e, n = $(this),
                t = n.attr("id"),
                a = n.data("type");
            if ("positiveInteger" === a) {
                e = n.val();
                var o = parseInt(e),
                    r = We(o);
                i = Fe(i, t, r ? o : 0)
            } else "boolean" === a ? (e = n.is(":checked"), i = Fe(i, t, e)) : "enum" === a && (e = $("#" + t + " .title").text(), i = Fe(i, t, e))
        }), u(JSON.parse(JSON.stringify(i)), function(e, n) {
            if (e) {
                var t = "Failed to save settings for " + (r + " - " + s) + ".",
                    a = $("#saveLanguageSettingsBtn button");
                return B("ERROR", "Failed to save settings", t), a.removeClass("saving"), void a.attr("disabled", !1)
            }
            hn(r, o, s, "saveSettings", function() {
                var e = "Settings for " + (r + " - " + s) + " saved successfully",
                    n = o + " - " + s;
                ie.push(n), B("SUCCESS", "Changes Saved!", e)
            })
        })
    }

    function We(e) {
        return 0 <= e
    }

    function ze(e) {
        (e = e.toLowerCase()) ? ($(".languages-list-item").not("[data-lang-name*='" + e + "']").css("display", "none"), $(".languages-list-item[data-lang-name*='" + e + "']").css("display", "block")) : $(".languages-list-item").css("display", "block")
    }

    function Ge() {
        $("#languageSettingsModal .modal-header button.close").off(), $("#saveLanguageSettingsBtn button").off(), $("#languageSettingsModal .dropdown-menu-item").off(), $("#language-search-input").off(), $("#saveLanguageSettingsBtn button").on("click", function() {
            $("#saveLanguageSettingsBtn button").addClass("saving"), $("#saveLanguageSettingsBtn button").attr("disabled", !0), Ve()
        }), $("#languageSettingsModal .dropdown-menu-item").on("click", function() {
            var e = $(this) && $(this).data("item-value"),
                n = $(this).parent().parent().attr("id");
            $("span#" + n).text(e)
        }), $("#language-search-input").on("keyup", function() {
            ze($(this).val())
        }), $(".pm-switch-input input[type='checkbox']").on("click", function() {
            var e = $(this),
                n = e.siblings(".pm-label");
            e.is(":checked") ? (n.text("ON"), n.removeClass("off"), n.addClass("on")) : (n.text("OFF"), n.removeClass("on"), n.addClass("off"))
        })
    }

    function Ke() {
        $(".languages-list-item").off(), $(".languages-list-item").on("click", function() {
            if (!ge) {
                var e = $(this).data("lang-label"),
                    n = $(this).data("lang-key"),
                    t = $(this).data("lang-variant"),
                    a = $(".languages-list-item.selected"),
                    o = $(".language-dropdown-xs .dropdown-toggle .selected-language");
                n === de.key && t === de.variant || ({
                    label: e,
                    key: n,
                    variant: t
                }, a.each(function(e) {
                    $(this).removeClass("selected")
                }), $(this).addClass("selected"), o && o.text(e + " - " + t), hn(e, n, t))
            }
        })
    }

    function Ze() {
        $("#retryGetSettingsBtn button").off(), $(".ls-settings-error-container #retryGetSettingsBtn button").on("click", function() {
            var e = $(".languages-list-item.selected").first(),
                n = e && e.data("lang-label"),
                t = e && e.data("lang-key"),
                a = e && e.data("lang-variant");
            t && a && n && hn(n, t, a)
        })
    }

    function Qe() {
        var e = f(),
            n = e.key + " - " + e.variant;
        if ($("#languageSettingsModal").off(), $("body").removeClass("disableScroll"), $("#language-search-input").val(""), ie && -1 < ie.indexOf(n)) {
            var t = function(e, n, t, a) {
                re && (ce ? A(e, n, t, a) : cn(e, n, t, a))
            };
            ce ? k(t) : sn(t)
        }
    }

    function Xe() {
        var e = $(this),
            n = $(this).closest(".folder"),
            t = $(".folder-link>a");
        n.hasClass("open") ? e.hasClass("active") && xn(n) : (t.removeClass("active-folder"), Cn(n))
    }

    function Ye(t) {
        var a, o = [],
            r = f();
        de && de.options && r.key === de.key && r.variant === de.variant ? t(en(de.options)) : $n(r.key, r.variant, function(e, n) {
            if (e) {
                de = {
                    key: r.key,
                    variant: r.variant,
                    label: r.label,
                    options: [{
                        name: "Prettify",
                        id: "prettify",
                        value: !0,
                        description: "Enabling this will ensure a prettified output for the generated code.",
                        type: "boolean"
                    }]
                };
                B("ERROR", "Failed to fetch settings", "Failed to fetch settings for " + (r.key + " - " + r.variant) + "."), t(!0)
            }
            o = (a = de = n) && a.options, t(en(o))
        })
    }

    function en(e) {
        for (var n = 0; n < e.length; n++)
            if ("prettify" === e[n].id) return e[n].value;
        return !0
    }

    function nn() {
        Modernizr.csspositionsticky || $(window).on("scroll resize pm-notification-closed", tn.bind(this, $(".pm-message-persistent"))), $(window).on("scroll", _.debounce(Rn, 1e3))
    }

    function tn(e) {
        var n = $(window).scrollTop(),
            t = e.parents(".pm-persistent-notification-container"),
            a = 0;
        e && e.length && (a = e.outerHeight()), 70 < n ? (n = 70, t.addClass("is-fixed")) : t.removeClass("is-fixed"), $(".sidebar").css("padding-top", 70 + a - n + "px"), $(".container-fluid").css("padding-top", a + "px")
    }

    function an(e) {
        var n = e,
            t = he[n] && he[n].label,
            a = "";
        be && be.value === n || (be = he[n] ? he[n] : be, t && $(".layout-dropdown .selected-layout").text(t), ce ? (a = on(be), location.href = a) : (rn(n, 31536e4), location.reload(!0)))
    }

    function on(e) {
        for (var n = window.location.search.substring(1).split("&"), t = !1, a = 0; a < n.length; a++) {
            if ("documentationLayout" === n[a].split("=")[0]) {
                n[a] = "documentationLayout=" + e.value, t = !0;
                break
            }
        }
        return t || n.push("documentationLayout=" + e.value), n = n.join("&"), window.location.origin + window.location.pathname + "?" + n + window.location.hash
    }

    function rn(e, n) {
        var t = $('meta[name="ownerId"]').attr("content"),
            a = $('meta[name="publishedId"]').attr("content"),
            o = {
                v: "1.0",
                documentationLayout: he[e] && e || "classic-double-column"
            },
            r = encodeURIComponent("j:" + JSON.stringify(o));
        ue ? document.cookie = "documentationConfig=".concat(r, "; max-age=").concat(n, "; SameSite=Lax") : (document.cookie = "documentationConfig=".concat(r, "; path=").concat("/view", "/").concat(t, "/").concat(a, "; max-age=").concat(n, "; SameSite=Lax"), document.cookie = "documentationConfig=".concat(r, "; path=").concat("/view", "/").concat(a, "; max-age=").concat(n, "; SameSite=Lax"))
    }

    function sn(e) {
        return "classic-double-column" === be.value ? $($e).removeClass("is-sidebar-error").addClass("is-sidebar-loading") : $($e).removeClass("is-examples-error").addClass("are-examples-loading"), $(pe).addClass("is-loading"), $(me).addClass("is-loading"), y(e)
    }

    function ln(n) {
        var t, e = $('meta[name="cmodelID"]').attr("content"),
            a = $('meta[name="ownerId"]').attr("content"),
            o = $('meta[name="publishedId"]').attr("content"),
            r = $(".active-environment").data("environment-id"),
            i = xe(),
            s = ["segregateAuth=true"];
        if (t = !e && a && o ? scope.apiHost + "/api/collections/" + a + "/" + o : scope.apiHost + "/api/collections/" + e, r && 0 != r && s.push("environment=" + r), i && s.push("versionTag=" + i), 0 < s.length && (t += "?" + s.join("&")), !(e || a && o)) return Raven.captureException(new Error("Attempt to fetch JSON without any valid ID available"), {
            extra: {
                api: t,
                id: e,
                ownerId: a,
                publishedId: o
            }
        }), n({});
        $.ajax(t).done(function(e) {
            return n(e)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching initial JSON"), {
                extra: {
                    api: t,
                    error: e.responseJSON
                }
            }), e.responseJSON && e.responseJSON.error && e.responseJSON.error.message && (e.responseJSON.error.message += " (Trace: ".concat(e.responseJSON.trace, ")")), Ee(e.responseJSON && e.responseJSON.error)
        })
    }

    function cn(e, t, a, n) {
        if (se.exampleResponses = {}, se.exampleRequests = {}, e) {
            var o, r = e && e.data;
            if (!t && !a && !n) try {
                n = v("lang_label") || "cURL", t = v("lang_preference") || "curl", a = v("lang_variant") || "cURL"
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                m()
            } catch (e) {
                Raven.captureException(e)
            }
            if ($("#mobile-controls .language-dropdown .selected-language").text(n + " - " + a), _.isEmpty(r)) return null === r ? "classic-double-column" === be.value ? $($e).removeClass("is-sidebar-loading").addClass("is-sidebar-error") : $($e).removeClass("are-examples-loading").addClass("is-examples-error") : "classic-double-column" === be.value ? $($e).removeClass("is-sidebar-loading") : $($e).removeClass("are-examples-loading"), $(pe).removeClass("is-loading"), $(me).removeClass("is-loading"), $(fe).removeClass("is-content-loading"), $(me).removeClass("is-content-loading"), $(".retryLoadingExamples").on("click", function() {
                ce ? k(A) : sn(cn)
            }), void $("#language-settings").on("click", function() {
                wn()
            });
            r.forEach(function(l) {
                var e = $("#" + l.item_id + " .examples"),
                    n = l.example;
                Array.isArray(n) && n.forEach(function(e, n) {
                    var t = _.get(e, "response.body"),
                        a = _.get(e, "response.header"),
                        o = _.get(e, "snippet"),
                        r = o && Object.keys(o)[0],
                        i = r && Object.keys(o[r])[0],
                        s = un(o[r], r, i);
                    se.exampleRequests[l.item_id + "_" + n] = s;
                    try {
                        t && (t = JSON.stringify(JSON.parse(t), null, 2), e.response.body = t)
                    } catch (e) {}
                    se.exampleResponses[l.item_id + "_" + n] = t, Array.isArray(a) && a.length && (se.exampleHeaders[l.item_id + "_" + n] = a.reduce(function(e, n) {
                        return e + (n.key + ": ") + n.value + "\n"
                    }, ""))
                }), o = Handlebars.partials["_request-examples"]({
                    sample: n,
                    _postman_id: l.item_id,
                    selectedLang: t,
                    selectedLangVariant: a,
                    selectedLangLabel: a,
                    layout: be.value
                }), e.replaceWith(o)
            }), !0, "classic-double-column" === be.value ? $($e).removeClass("is-sidebar-loading is-sidebar-error") : $($e).removeClass("are-examples-loading is-examples-error"), $(pe).removeClass("is-loading"), $(me).removeClass("is-loading"), $(fe).removeClass("is-content-loading"), $(me).removeClass("is-content-loading"), setTimeout(function() {
                Modernizr.csspositionsticky || tn($(".pm-message-persistent")), Rn(), He(), Me(), w()
            })
        }
    }

    function un(e, n, t) {
        var a = e[t];
        return "cURL" === n ? a = (a = a.replace(/\\n|\\r/g, "\n")).replace(/\\t/g, "    ") : e[t]
    }

    function dn(e, n) {
        var t = e,
            a = e && e.item,
            o = be && be.label;
        t && t.info.public && (0 == $(".active-environment").data("environment-id") ? "no-env" : "env", t.info.privateUrl), $(".layout-dropdown .selected-layout").text(o), se.requestBody = {}, a.forEach(function(e) {
            gn(e)
        }), t.documentationLayout = be.value;
        var r = "classic-single-column" === be.value ? "-" + be.value : "";
        pn(t, _.get(t, "info._postman_id")), Oe("doc-sidebar", "#doc-body" + r, t), Oe("nav-sidebar", "#nav-sidebar", t), re = !0, "classic-double-column" === be.value && ($(fe).removeClass("is-content-loading"), $(me).removeClass("is-content-loading")), setTimeout(function() {
            Le()
        }), kn(), b(t), setTimeout(function() {
            Be()
        }, 100), "function" == typeof n && n()
    }

    function gn(e) {
        var n = _.get(e, "request.body"),
            t = _.get(e, "_postman_id");
        pn(e, t), n && (se.requestBody[t] = n), e && e.item && e.item.forEach(function(e) {
            gn(e)
        })
    }

    function pn(e, n) {
        var t, a = !!e.item;
        t = fn(a ? _.get(e, "auth") : _.get(e, "request.auth"), n, a ? "folder" : "request"), e.authInfoForDisplay = t
    }

    function fn(e, n, t) {
        if (e && e.type && "noauth" !== e.type) {
            var a = {},
                o = e[e.type],
                r = _.get(o, "basicConfig", []),
                i = [],
                s = e.isInherited,
                l = e.source;
            return a.entityID = n, a.type = e.type, a.label = ye[e.type], s ? (a.isInherited = !0, a.inheritedEntityID = _.get(l, "_postman_id"), a.inheritedEntityType = _.get(l, "type"), a.inheritedEntityName = _.get(l, "name"), a.entityType = t) : r && 0 < r.length && (i = r.map(function(e) {
                return {
                    row: [{
                        value: e.key.replace(/([a-z])([A-Z])/g, "$1 $2"),
                        "cell-class": "col-md-3 col-xs-12 name"
                    }, {
                        value: e.value,
                        "cell-class": "col-md-9 col-xs-12 value"
                    }],
                    "row-class": "param row"
                }
            }), a.basicConfig = i), a
        }
    }

    function mn(e) {
        var n, t, a, o, r, i, s, l, c, u, d, g = $(this),
            p = $("#snippetModal"),
            f = $("#rawBodyModal"),
            m = $("#tableModal"),
            v = $("#snippetModal code"),
            h = $("#rawBodyModal .copy-request-modal"),
            y = $("#rawBodyModal code");
        v = $("#snippetModal code");
        if (e && e.target && "A" === e.target.tagName) {
            if (e.ctrlKey || e.metaKey) {
                var b = window.open();
                b.opener = null, b.location = e.target.href
            } else window.open(e.target.href, "_self");
            return !1
        }
        if (r = 0 !== $(this).parents(".examples").length ? (l = "dark-background", "") : (l = "white-background", "section"), n = g.css("width"), t = g.data("id"), d = g.data("content-type"), a = g.data("title"), o = g.data("clipboard-target"), i = 0 <= ["html", "xml"].indexOf((g.data("lang") || "").toLowerCase()), s = g.clone(), c = se.exampleResponses[t], u = se.exampleHeaders[t], h.attr("data-clipboard-target", ""), this.classList.contains("is-example")) v.empty().text(c), p.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").css("width", n || "auto"), $("#snippetModal .modal-header .title").empty().text(a), c.replace(/\s/gi, "").length <= le.maxHighlightLength && (v.removeClass("language-markup language-javascript language-undefined language-pmresponseheaders").addClass("language-" + (i ? "markup" : "javascript")), Prism.highlightElement(v.get(0)));
        else if (this.classList.contains("is-example-headers")) v.empty().text(u), p.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").css("width", n || "auto"), $("#snippetModal .modal-header .title").empty().text(a), u.replace(/\s/gi, "").length <= le.maxHighlightLength && (v.removeClass("language-markup language-javascript language-undefined language-pmresponseheaders").addClass("language-pmresponseheaders"), Prism.highlightElement(v.get(0)));
        else {
            var w = "",
                x = "";
            if (x = (w = "example-request" === d ? se.exampleRequests[t] : se.requestBody[t]) && w.mode && "graphql" !== w.mode ? w[w.mode] : w && "graphql" === w.mode ? "graphql-variables" === d ? w.graphql.variables : w.graphql.query : w, n = s.css("width"), s.removeClass("is-expandable click-to-expand-wrapper is-snippet-wrapper"), !x) return m.addClass("white-background").modal().find(".modal-body").empty().append(s).css("width", n || "auto"), !1;
            o ? (h.show(), h.attr("data-clipboard-target", "#modal-" + g.data("id"))) : h.hide(), y.empty().text(x), y.attr("id", ""), o && y.attr("id", "modal-" + g.data("id")), f.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").removeClass("section").addClass(r).css("width", n || "auto"), $("#rawBodyModal .modal-header .title").empty().text(a), x && x.replace(/\s/gi, "").length <= le.maxHighlightLength && (y.removeClass("language-markup language-javascript language-undefined").addClass("language-" + (i ? "markup" : "javascript")), Prism.highlightElement(y.get(0)))
        }
    }

    function vn(e, n, t) {
        var a, o, r, i, s, l = $("#languageSettingsModal .languages-list"),
            c = m();
        if (e && n && t) o = e, a = n, r = t;
        else try {
            o = v("lang_label") || "cURL", a = v("lang_preference") || "curl", r = v("lang_variant") || "cURL"
        } catch (e) {
            Raven.captureException(e)
        }
        c = c || [], i = Handlebars.partials["_language-list"]({
            languages: c,
            language: {
                key: a,
                label: o,
                variant: r
            }
        }), l.replaceWith(i), setTimeout(function() {
            (s = $("#languageSettingsModal .language-settings-container .languages-list-item.selected")) && s[0].scrollIntoView({
                block: "nearest"
            })
        }, 100), setTimeout(function() {
            Ke()
        }, 100)
    }

    function hn(e, n, t, a, o) {
        var r, i, s, l = $("#languageSettingsModal .language-settings"),
            c = $("#saveLanguageSettingsBtn button"),
            u = {};
        if (ge = !0, "saveSettings" !== a && (l.addClass("is-loading"), c.removeClass("saving"), c.attr("disabled", !1)), e && n && t) i = e, r = n, s = t;
        else try {
            i = v("lang_label") || "cURL", r = v("lang_preference") || "curl", s = v("lang_variant") || "cURL"
        } catch (e) {
            Raven.captureException(e)
        }
        return $n(r, s, function(e, n) {
            if (e ? bn(r, i, s) : (de = u = n, yn(u)), "saveSettings" === a) return o && o()
        })
    }

    function yn(e) {
        var n, t = $("#languageSettingsModal .language-settings"),
            a = $("#saveLanguageSettingsBtn button");
        t.removeClass("is-loading"), ge = !1, n = Handlebars.partials["_language-settings"]({
            language: e
        }), t.replaceWith(n), setTimeout(function() {
            Ge()
        }, 100), a.removeClass("saving"), a.attr("disabled", !1)
    }

    function bn(e, n, t, a) {
        var o, r = $("#languageSettingsModal .language-settings"),
            i = $("#saveLanguageSettingsBtn button");
        r.removeClass("is-loading"), ge = !1, o = Handlebars.partials["_language-load-error"]({
            language: {
                key: e,
                label: n,
                variant: t
            }
        }), r.replaceWith(o), i.removeClass("saving"), i.attr("disabled", !1), Ze()
    }

    function $n(e, n, t) {
        p(e, n, function(e, n) {
            return e ? t(e) : n && n.languageSettings ? t(null, n.languageSettings) : t(null, n)
        })
    }

    function wn() {
        var e = $("#languageSettingsModal"),
            n = $("#languageSettingsModal .language-settings");
        ie = [], null, e.modal(), n.addClass("is-loading"), ge = !0, $("body").addClass("disableScroll"), $("#languageSettingsModal").on("hidden.bs.modal", Qe), vn(), hn()
    }

    function xn(e) {
        return e.removeClass("user-opened open").find("ul:first").removeClass("display-requests"), !0
    }

    function Cn(e) {
        return e.addClass("open user-opened").find("ul:first").addClass("display-requests user-opened"), !0
    }

    function Sn() {
        var e = $(this).closest(".folder");
        e.hasClass("open") && xn(e) || Cn(e)
    }

    function _n() {
        var e = $(this),
            n = e.data("request-info"),
            t = e.data("request-name");
        $(".formatted-requests[data-id^=" + t + "]").hide(), $(".example-response[data-id^=" + t + "]").hide(), $(".formatted-requests[data-id=" + n + "]").show(), $(".example-response[data-id=" + n + "]").show(), $("#" + t + "_dropdown").attr("title", e.text()), $("#" + t + "_dropdown .example-name__label").text(e.text()), Rn(), Me()
    }

    function En(e, n, t) {
        var a, o, r;
        r = e && n && t ? (a = e, o = t, n) : (a = $(this).attr("data-lang-key") || "curl", o = $(this).attr("data-lang-label") || "cURL", $(this).attr("data-lang-variant") || "cURL");
        try {
            i("lang_label", o), i("lang_preference", a), i("lang_variant", r)
        } catch (e) {
            Raven.captureException(e)
        }
        ce ? k(A) : sn(cn)
    }

    function kn() {
        var a = [];
        oe.forEach(function(e) {
            var n = Handlebars.templates["toc-item"],
                t = {
                    id: e.slug,
                    name: e.content
                };
            a.push(n(t))
        }), a.forEach(function(e) {
            $(e).appendTo($(".toc ul"))
        })
    }

    function Rn() {
        Ye(function(e) {
            if (!e) return !1;
            var n = document.querySelectorAll("pre code"),
                t = [],
                a = document.querySelectorAll("pre code.is-highlighted");
            _.forEach(n, function(e) {
                On(e) && t.push(e)
            }), _.forEach(a, function(e) {
                var n; - 1 === _.indexOf(t, e) && (n = $(e)).text(n.text()).removeClass("is-highlighted")
            }), _.forEach(t, function(e) {
                if (-1 === _.indexOf(a, e)) {
                    $(e).addClass("is-highlighted");
                    var n = Ln(e);
                    Prism.highlightElement(n)
                }
            })
        })
    }

    function Ln(e) {
        var n;
        return "string" != typeof e || (11 < (n = e.split("\n")).length ? e = n.slice(0, 11).join("\n") : 5e3 < e.length && (e = e.slice(0, 5e3))), e
    }

    function On(e) {
        var n, t, a = e.getBoundingClientRect(e),
            o = window.innerHeight;
        window.innerWidth;
        return n = a.top < o && 0 < a.top || a.bottom < o && 0 < a.bottom, t = a.top < 0 && a.bottom > o, n || t
    }

    function An(e, n) {
        if (e) {
            var t = document.getElementById(e);
            e && (t.innerText = n)
        }
    }

    function In(e) {
        oe = e, setTimeout(function() {
            j(), qn()
        }, 100)
    }

    function qn() {
        $(".accordion").on("collapse", function(e) {
            var n = $(e.target).find(".sidebar-icons"),
                t = n.children()[0],
                a = n.children()[1];
            $(t).removeClass("pm-icon-triangle--open").addClass("pm-icon-triangle--closed"), $(a).removeClass("pm-icon-folder--open").addClass("pm-icon-folder--closed")
        }), $(".accordion").on("open", function(e) {
            var n = $(e.target).find(".sidebar-icons"),
                t = n.children()[0],
                a = n.children()[1];
            $(t).removeClass("pm-icon-triangle--").addClass("pm-icon-triangle--open"), $(a).removeClass("pm-icon-folder--").addClass("pm-icon-folder--open")
        })
    }
    // $.ajaxSetup({
    //     dataType: "json",
    //     xhrFields: {
    //         withCredentials: !0
    //     }
    // }), Boolean("window.scope.userId") && $.ajax("".concat("scope.identityPublicApi", "/api/check-backfill-status"), {
    //     dataType: "text"
    // }).catch(function(e) {
    //     if (401 === e.status) return $.ajax("".concat("scope.identityPublicApi", "/api/test-third-party-cookie"), {
    //         dataType: "text"
    //     }).then(function() {
    //         var e = "".concat("scope.identityUi", "/accounts/auth?continue=").concat(encodeURIComponent(window.location.href));
    //         return window.location.assign(e)
    //     })
    // }), $(document).ready(function() {
    //     return ce = l(), ue = function() {
    //         var e = new RegExp("scope.documenterDomainsRegex");
    //         return "string" == typeof window.location.pathname && !e.test(window.location.hostname)
    //     }(), "classic-double-column" === be.value ? Ce(function() {
    //         return ke(), (ce ? k : sn)(function(e, n, t, a) {
    //             re && (ce ? A(e, n, t, a) : cn(e, n, t, a))
    //         })
    //     }) : Se(function(e) {
    //         _e(e.collectionJson, e.examples), ke()
    //     })
    // })
}]);