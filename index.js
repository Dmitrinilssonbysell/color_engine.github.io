function ColorEngine(color, selector) {
    const doc = document.querySelector(selector)

    if (color === "black") {
        return doc.style.background = "rgb(45,45,45)"
    }
    else if (color === "blue") {
        return doc.style.background = "rgb(20,120,255)"
    }
}

module.exports.ColorEngine = ColorEngine