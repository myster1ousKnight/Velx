const title = vn("h1")
vc(title, "title")
vst(title, "Velx")

const it = vn("p")
vc(it, "it")
vst(it, "")

const p1 = vn("p")
vc(p1, "p1s")
vst(p1, "Velx is a JavaScript library that is use to make scripting easier.")

const img = vn("img")
vc(img, "img")
img.src = "velx.png"

const br = vn("br")

const center = vn("center")

const center2 = vn("center")

const download = vn("button")
vc(download, "download")
vst(download, "Download")
vae(download, "click", ()=> {
    vdl("velx.js")
})

const p2 = vn("p")
vc(p2, "p2")
vst(p2, "Look in the documentations to understand how to use Velx in your HTML website and you can support me too!")

const docs = vn("button")
vc(docs, "docs")
vst(docs, "Open Velx's documentations")
vae(docs, "click", ()=> {
    vow("docs")
})

const support = vn("button")
vc(support, "support")
vst(support, "Support Me!")
vae(support, "click", ()=> {
    vow("https://buymeacoffee.com/imsorealpl4")
})

va(vs("body"), title)
va(vs("body"), p1)
va(vs("body"), img)
va(vs("body"), it)
va(vs("body"), br)
va(vs("body"), center)
va(center, download)
va(vs("body"), p2)
va(vs("body"), center2)
va(center2, docs)
va(center2, br)
va(center2, it)
va(center2, support)