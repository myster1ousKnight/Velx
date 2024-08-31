function v(o) {

    if (typeof o == "string") {
        if (document.querySelector(o)) {
            return document.querySelector(o)
        }

        return null
        
    }

}

function vs(o) {

    if (o == "html") {
        return document.querySelector("html")
    }

    if (o == "head") {
        return document.querySelector("head")
    }

    if (o == "title") {
        return document.querySelector("title")
    }

    if (o == "body") {
        return document.querySelector("body")
    }

    return null

}

function vn(o) {

    if (o == "a") {
        return document.createElement("a")
    }

    if (o == "div") {
        return document.createElement("div")
    }

    if (o == "p") {
        return document.createElement("p")
    }

    if (o == "img") {
        return document.createElement("img")
    }

    if (o == "ul") {
        return document.createElement("ul")
    }

    if (o == "ol") {
        return document.createElement("ol")
    }

    if (o == "li") {
        return document.createElement("li")
    }

    if (o == "table") {
        return document.createElement("table")
    }

    if (o == "tr") {
        return document.createElement("tr")
    }
    
    if (o == "th") {
        return document.createElement("th")
    }

    if (o == "td") {
        return document.createElement("td")
    }

    if (o == "form") {
        return document.createElement("form")
    }

    if (o == "input") {
        return document.createElement("input")
    }

    if (o == "span") {
        return document.createElement("span")
    }

    if (o == "button") {
        return document.createElement("button")
    }
            
    if (o == "label") {
        return document.createElement("label")
    }

    if (o == "iframe") {
        return document.createElement("iframe")
    }
                    
    if (o == "h1") {
        return document.createElement("h1")
    }

    if (o == "h2") {
        return document.createElement("h2")
    }

    if (o == "h3") {
        return document.createElement("h3")
    }

    if (o == "h4") {
        return document.createElement("h4")
    }

    if (o == "h5") {
        return document.createElement("h5")
    }

    if (o == "h6") {
        return document.createElement("h6")
    }

    if (o == "br") {
        return document.createElement("br")
    }
    
    if (o == "center") {
        return document.createElement("center")
    }

    return null

}

function va(s, o) {
    
    if (typeof s == "object" && typeof o == "object") {
        s.appendChild(o)
    }
     
    return null

}

function vst(s, t) {

    if (typeof s == "object" && typeof t == "string") {
        s.innerHTML = t
    }

    return null

}

function vid(s, t) {

    if (typeof s == "object" && typeof t == "string") {
        s.id = t
    }

    return null

}

function vc(s, t) {

    if (typeof s == "object" && typeof t == "string") {
        s.className = t
    }

    return null

}

function vae(s, e, f) {

    if (typeof s == "object" && typeof e == "string" && typeof f == "function") {
        s.addEventListener(e, f)
    }

    return null

}

function vow(d) {

    if (typeof d == "string") {
        window.open(d)
    }

    return null

}

function vdl(f) {

    if (typeof f == "string") {
        const link = vn("a")
        link.download = document.location.href
        link.href = f
        link.click()
        link.remove()
    }

    return null

}