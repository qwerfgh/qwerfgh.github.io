var affUrl;

var parameters;

function populateCountries(t, e, f) {


    var a = t || "",
        o = e || "",
        n = !1,
        l = $("#country");
    $("#country").empty().append($(document.createElement("option")).html(country).val(0)), $("#city").append($(document.createElement("option")).html(city).val(0)), $("#location").append($(document.createElement("option")).html(loc).val(0)), $.each(droplist.co, function(t, e) {
        var o = $(document.createElement("option")).html(e.n).val(e.n);
        e.n === a && (o.attr("selected", "selected"), n = !0), l.append(o)
    }), l.on("change", function() {
        $("#location").empty().append($(document.createElement("option")).html(loc).val(0)), populateCities(o), $("#dropCountry").val($("#country").val()), l.find("option[value=0]").prop("disabled", !0), updateSpans()
    }), n ? l.trigger("change") : updateSpans()
}

function populateCities(t) {
    var e = t || "",
        a = !1,
        o = $("#city");
    $.each(droplist.co, function(n, l) {
        l.n == $("#country").val() && (o.empty(), l.ci.length >= 1 && (o.append($(document.createElement("option")).html(city).val(0).html(emptySelect)), populateLocations(e)), $.each(l.ci, function(t, n) {
            var i = unmask(n.n, l),
                r = $(document.createElement("option")).html(i).val(i);
            i === e && (r.attr("selected", "selected"), a = !0), o.append(r)
        })), populateLocations(t)
    }), o.on("change", function() {
        populateLocations(e), $("#dropCity").val(o.val()), o.find("option[value=0]").prop("disabled", !0), updateSpans()
    }), a ? o.trigger("change") : updateSpans()
}

function populateLocations(t) {
    var e = $("#city").val() || t || "";
    $.each(droplist.co, function(t, a) {
        a.n == $("#country").val() && $.each(a.ci, function(t, o) {
            var n = unmask(o.n, a);
            n == e && ($("#location").empty(), o.l.length >= 1 && $("#location").append($(document.createElement("option")).html(loc).val(0).html(emptySelect)), $.each(o.l, function(t, e) {
                var a = unmask(e.n, o);
                $("#location").append($(document.createElement("option")).html(a).val(e.i))
            }))
        })
    }), $("#location").on("change", function() {
        $("#location").find("option[value=0]").attr("disabled", !0), $("#dropLocation").val($("#location").val()), updateSpans(), $("#locationName, #dropLocationName").val($("#locationSpan").text())
    })
}

function updateSpans() {
    var t = $(".selectSpan"),
        e = $(".option");
    e.each(function(e) {
        var a = $(this),
            o = a.find("option:selected").text(),
            n = $(t[e]);
        if (a.find('option').length > 1) {
            n.parent().removeClass('empty');
        } else {
            n.parent().addClass('empty');
        }
        o !== n.text() && n.text(o)
    })
}

function setupDefaultDates() {
    var format = parameters.format || "dd/mm/yy";
    format = format.split('+').join(' ');
    $("#pickDate").datepicker({
        dateFormat: format,
        minDate: 0,
        onSelect: function() {
            var pickDate = $("#pickDate").datepicker("getDate");
            updateDates("pu", pickDate);

            var dropDate = $("#dropDate").datepicker("getDate");
            if (pickDate >= dropDate) {
                var newDate = setDate(3, pickDate)
                $("#dropDate").datepicker("setDate", newDate);
                updateDates("do", newDate);
            }

            $("#dropDate").datepicker("option", "minDate", pickDate).trigger("blur");
        }
    }).datepicker("setDate", setDate(3)), $("#dropDate").datepicker({
        dateFormat: format,
        minDate: 0,
        onSelect: function() {
            updateDates("do", $("#dropDate").datepicker("getDate"))
        }
    }).datepicker("setDate", setDate(6))
    updateDates("pu", $("#pickDate").datepicker("getDate"));
    updateDates("do", $("#dropDate").datepicker("getDate"))

    $.datepicker.regional[parameters.preflang];
}

function updateDates(puDo, date) {
    $("#" + puDo + "Month").val(date.getMonth() + 1)
    $("#" + puDo + "Day").val(date.getDate())
    $("#" + puDo + "Year").val(date.getFullYear())
}

function setDate(offset, date) {
    var newDate = date || new Date;
    newDate.setDate(newDate.getDate() + offset);
    return newDate;
}

function unmask(t, e) {
    return "" == t && (t = e.n + allAreasTranslation),
        t.indexOf("#") >= 0 && (t = t.replace("#", e.n)),
        t.indexOf("!") >= 0 && (t = t.replace("!", airportTranslation)),
        t.indexOf("@") >= 0 && (t = t.replace("@", airportTranslationLANG)),
        t.indexOf("$") >= 0 && (t = t.replace("$", downTownTranslation)),
        t.indexOf("&") >= 0 && (t = t.replace("&", downTownTranslationLANG)),
        t.indexOf("*") >= 0 && (t = t.replace("*", trainStationTranslation)),
        t.indexOf("£") >= 0 && (t = t.replace("£", trainStationTranslationLANG)),
        t.indexOf("~") >= 0 && (t = t.replace("~", terminalTranslation)),
        t.indexOf("^") >= 0 && (t = t.replace("^", terminalTranslationLANG)),
        t.indexOf("¥") >= 0 && (t = t.replace("¥", hotelTranslation)),
        t.indexOf("€") >= 0 && (t = t.replace("€", hotelTranslationLANG)),
        t.indexOf("<") >= 0 && (t = t.replace("<", allAreasTranslation)),
        t.indexOf(">") >= 0 && (t = t.replace(">", allAreasTranslationLANG)), t;

}


// Gets parameters from the URL
function getURL() {
    var t;
    (window.onpopstate = function() {
        var e, a = /\+/g,
            o = /([^&=]+)=?([^&]*)/g,
            n = function(t) {
                return decodeURIComponent(t.replace(a, " "))
            },
            i = window.location.search.substring(1);
        for (t = {}; e = o.exec(i);) t[n(e[1])] = n(e[2])
    })();
    parameters = t;
    var e = t.affiliateCode,
        a = t.preflang,
        w = t.prefcurrency,
        o = t.adplat,
        n = t.adcamp,
        i = t.main,
        l = t.enabler,
        f = t.format,
        m = t.target,
        s = t.affUrl,
        c = t.debug,
        r = t.custom,
        b = t.textColor,
        x = t.country ? replaceAll('\\+', ' ', t.country) : false,
        y = t.city ? replaceAll('\\+', ' ', t.city) : false,
        z = t.location ? replaceAll('\\+', ' ', t.location) : false;
    setLanguage(a, x, y, z, t);
    bodyClass(a, o, n);
    if (s) affUrl = (s);
    if (m) setTarget(m);
    if (i) setColor(i);
    if (b) setTextColor(b);
    "true" == r && void 0 != e && setCustom(e);


    //Sets the Affiliate settings.
    if (e) $("#affiliateCode").val(e);
    if (a) $("#preflang").val(a);
    if (w) $("#prefcurrency").val(w);
    if (o) $("#adplat").val(o);
    if (n) $("#adcamp").val(n);
    if (l) $("#enabler").val(l);

        //Set console messages if debug = true
        "true" == c && (void 0 == e ? console.log("affiliateCode not specified") : console.log("affiliateCode = ", e),
            void 0 == a ? console.log("default language loaded (EN)") : console.log("preflang = ", a),
            void 0 == o ? console.log("adplate not specified") : console.log("adplat = ", o),
            void 0 == n ? console.log("adcamp not specified") : console.log("adcamp = ", n),
            "true" == r && void 0 != e ? console.log("custom css loaded") : console.log("custom css not Set"),
            void 0 == i ? console.log("main colour not specified") : console.log("main colour =", i),
            void 0 == l ? console.log("enabler not set") : console.log("enabler =", l),
            void 0 == m ? console.log("form target (_blank)") : console.log("form target = (_", m, ")"),
            void 0 == s ? console.log("no subdomain set") : console.log("subdomain = http://", s));
}

//Use preflang to set Language JS and Datepicker JS
function setLanguage(lang, country, city, location) {
    null == lang && (lang = "en"), $.getScript("../languageJS/droplist_" + lang + ".js").done(function() {
        initLoadData(country, city, location);
        $.getScript("../datePicker/datepicker-" + lang + ".js").done(function() {
            setupDefaultDates();
        })
    });

}

// If Custom is true and an Affiliate Code has been set. Apply stylesheet
function setCustom(affiliateCode) {
    $("head").append('<link rel="stylesheet type="text/css" href="/StandAlone/affiliateCSS/' + affiliateCode + '/stylesheet.css"/>')
}


//Assign helper classes to the body
function bodyClass(preflang, adplat, adcamp) {
    //Add the praflang, adplat and adcamp to the body class
    $("body").addClass(preflang);
    $("body").addClass(adplat);
    $("body").addClass(adcamp);

    //add RTL for he or ar. Used for overriding stying. 
    if ((preflang == "he") || (preflang == "ar")) {
        $("body").addClass('rtl');
    }
}

//Set colours if main is set.
function setColor(colour) {
    $('<style type="text/css">.ui-widget-header, .searchBtn, .ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight,.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus  {background: ' + colour + ";} #ui-datepicker-div,.ui-widget-header,.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight,.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus,.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active,.focus, .ageinput:focus, .datePicker:focus {border: 1px solid " + colour + "}.focus, .ageinput:focus, .datePicker:focus{outline " + colour + "}</style>").appendTo("head")
}

function setTextColor(textColor){
$('<style type="text/css">body {color: ' + textColor + "}</style>").appendTo("head")
}


function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}


function initLoadData(argCountry, argCity, argLocation) {
    $(".timePicker").populateTime(),
        populateCountries(argCountry, argCity, argLocation),
        translations(),
        updateTime(),
        validation();
    selectFocus();
    $('body').addClass('loaded');
}

// validation
function validation() {
    $.validator.addMethod("valueNotEquals", function(t, e, a) {
            return a != t
        }),

        $("#SearchResultsForm").validate({
            onkeyup: !1,
            onclick: !1,
            onfocusout: !1,
            highlight: function(t) {
                $(t).parent("div").addClass("error"), $("#countrySpan").html(errorSelectCountry), $("#citySpan").html(errorSelectCity), $("#locationSpan").html(errorSelectLocation)
            },
            unhighlight: function(t) {
                $(t).parent("div").removeClass("error"), updateSpans()
            },
            rules: {
                country: {
                    valueNotEquals: "0"
                },
                city: {
                    valueNotEquals: "0"
                },
                location: {
                    valueNotEquals: "0"
                }
            },
            messages: {
                country: {
                    valueNotEquals: errorSelectCountry
                },
                city: {
                    valueNotEquals: errorSelectCity
                },
                location: {
                    valueNotEquals: errorSelectLocation
                }
            },
            submitHandler: function(form) {
                bypass(form);
            }
        })
}


//Sets the focus on the select boxes.
function selectFocus() {
    $(".option").focus(function() {
        $(this).parent().addClass("focus")
    }), $(".option").blur(function() {
        $(this).parent().removeClass("focus")
    });
}


// Sets the text translations
function translations() {
    $(".countryLbl").html(country),
        $(".cityLbl").html(city),
        $(".locationLbl").html(loc),
        $(".pickUpTitle").html(pickup),
        $(".pickDateLbl").html(pickupDate),
        $(".pickTimLbl").html(pickUpTime),
        $(".dropDateLbl").html(dropoffDate),
        $(".droptimeLbl").html(dropOffTime),
        $(".driversAge").html(driverAge),
        $(".searchBtn").text(search),
        $("#locationSpan").html(loc);
}


// updates the time fields on change.
function updateTime() {
    $("#pickTime").on("change", function() {
            $("#puHour").val($("#pickTime").val().split(":")[0]), $("#puMinute").val($("#pickTime").val().split(":")[1])
        }),
        $("#dropTime").on("change", function() {
            $("#doHour").val($("#dropTime").val().split(":")[0]), $("#doMinute").val($("#dropTime").val().split(":")[1])
        })
}

// Time Setup
$.fn.populateTime = function() {
    return this.each(function() {
        for (var t = $(this), e = t.nextAll(".timeHidden"), a = 0; 24 > a; a++)
            for (var o = 10 > a ? "0" + (a + "") : a + "", n = 0; 2 > n; n++) {
                var i = 0 === n ? "00" : 30 * n + "",
                    l = a + ":" + 30 * n,
                    c = o + ":" + i,
                    u = {
                        value: l,
                        text: c
                    };
                "11:30" == c && (u.selected = "selected"), t.append($("<option>", u))
            }
        t.on("change", function(a) {
            var o = a.target.value;
            $(this).prev("span").html(t.find("option:selected").text());
            o = o.split(":"), e.eq(0).val(o[0]), e.eq(1).val(o[1])
        })
    })
}

//Call function if a cookie is needed. Not used by defult
function setCookie() {
    var exp = new Date(),
        expString,
        form = document.SearchResultsForm,
        trackAdcamp = form.adcamp.value ? 'adcamp:' + form.adcamp.value + '|' : '';
    trackAdplat = form.adplat.value ? 'adplat:' + form.adplat.value + '|' : '';
    trackAffiliate = form.affiliateCode.value ? 'affiliateCode:' + form.affiliateCode.value + '|' : '';
    exp.setDate(exp.getDate() + 15);
    expString = exp.toUTCString();
    document.cookie = 'tj_track="' + trackAdcamp + trackAdplat + trackAffiliate + '"; expires=' + expString + '; path=/; domain=.rentalcars.com';
}

// Sets the target of the form if 'target' has been set in the URL
function setTarget(target) {
    document.SearchResultsForm.target = "_" + target
}

function bypass(form) {
    if (window.location.protocol === 'https:') {
        var arguments = getArguments(document.SearchResultsForm);
        window.open(
            'http://' +
            (affUrl || 'www.rentalcars.com') +
            '/SearchResults.do?' +
            arguments,
            document.SearchResultsForm.target);
    } else {
        if (form.location.value === "-1") {
            form.searchType.value = 'allareasgeosearch';
        }

        if (affUrl) {
            document.SearchResultsForm.action = 'http://' + affUrl + '/SearchResults.do?';
        }
        form.submit();
    }
}

function getArguments(searchForm) {
    var par = '',
        fields = [
            'fromLocChoose',
            'enabler',
            'preflang',
            'adcamp',
            'adplat',
            'puSameAsDo',
            'emptySearchResults',
            'affiliateCode',
            'country',
            'city',
            'location',
            'locationName',
            'dropCountry',
            'dropCity',
            'dropLocation',
            'dropLocationName',
            'puYear',
            'puMonth',
            'puDay',
            'puHour',
            'puMinute',
            'doYear',
            'doMonth',
            'doDay',
            'doHour',
            'doMinute',
            'driversAge'
        ];
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (searchForm[field] === undefined || searchForm[field].value === undefined) {
            par += '&' + field + '=' + setValue(field);
        } else {
            par += '&' + field + '=' + searchForm[field].value.split(' ').join('+');
        }
    };
    if (searchForm.location.value === "-1")
        par += '&searchType=allareasgeosearch';
    return par;
}

function setValue(field) {
    switch (field) {
        case 'puSameAsDo':
            return 'false';
        case 'emptySearchResults':
            return 'true';
        default:
            return '';
    }
}



// Document Ready function
$(document).ready(function() {
    getURL();
});
