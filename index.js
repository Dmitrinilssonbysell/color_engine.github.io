function ColorEngine(color, selector) {
    const doc = document.querySelectorAll(selector)

    for (let i = 0; i < doc.length; i++) {
        if (color === "black") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(77, 77, 77)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(51, 51, 51)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(25, 25, 25)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(0, 0, 0)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(102, 102, 102)"
        }
        if (color === "black1") {
            return doc[i].style.background = "rgb(102, 102, 102)"
        } 
        else if (color === "black2") {
            doc[i].style.backgroundColor = "rgb(77, 77, 77)"
        }
        else if (color === "black3") {
            doc[i].style.backgroundColor = "rgb(51, 51, 51)"
        }
        else if (color === "black4") {
            doc[i].style.backgroundColor = "rgb(25, 25, 25)"
        }
        else if (color === "black5") {
            doc[i].style.backgroundColor = "rgb(0, 0, 0)"
        }
    }






    
    for (let i = 0; i < doc.length; i++) {
        if (color === "blue") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(70, 155, 235)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(50, 125, 235)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(20, 95, 235)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(20, 75, 205)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(70, 175, 255)"
        }
        if (color === "blue1") {
            return doc[i].style.background = "rgb(70, 175, 255)"
        } 
        else if (color === "blue2") {
            return doc[i].style.background = "rgb(70, 155, 235)"
        }
        else if (color === "blue3") {
            return doc[i].style.background = "rgb(50, 125, 235)"
        }
        else if (color === "blue4") {
            return doc[i].style.background = "rgb(20, 95, 235)"
        }
        else if (color === "blue5") {
            return doc[i].style.background = "rgb(20, 75, 205)"
        }
    }
    
    
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "yellow") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(252, 235, 81)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(252, 232, 56)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(251, 229, 31)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(251, 226, 6)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(253, 238, 106)"
        }
        if (color === "yellow1") {
            return doc[i].style.background = "rgb(253, 238, 106)"
        } 
        else if (color === "yellow2") {
            doc[i].style.backgroundColor = "rgb(252, 235, 81)"
        }
        else if (color === "yellow3") {
            doc[i].style.backgroundColor = "rgb(252, 232, 56)"
        }
        else if (color === "yellow4") {
            doc[i].style.backgroundColor = "rgb(251, 229, 31)"
        }
        else if (color === "yellow5") {
            doc[i].style.backgroundColor = "rgb(251, 226, 6)"
        }
    }
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "red") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(187, 81, 82)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(176, 56, 57)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(160, 31, 33)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(144, 6, 8)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(198, 106, 107)"
        }
        if (color === "red1") {
            return doc[i].style.background = "rgb(198, 106, 107)"
        } 
        else if (color === "red2") {
            doc[i].style.backgroundColor = "rgb(187, 81, 82)"
        }
        else if (color === "red3") {
            doc[i].style.backgroundColor = "rgb(176, 56, 57)"
        }
        else if (color === "red4") {
            doc[i].style.backgroundColor = "rgb(160, 31, 33)"
        }
        else if (color === "red5") {
            doc[i].style.backgroundColor = "rgb(144, 6, 8)"
        }
    }
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "orange") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(254, 150, 102)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(254, 133, 77)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(254, 115, 51)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(254, 98, 25)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(255, 168, 128)"
        }
        if (color === "orange1") {
            return doc[i].style.background = "rgb(255, 168, 128)"
        } 
        else if (color === "orange2") {
            doc[i].style.backgroundColor = "rgb(254, 150, 102)"
        }
        else if (color === "orange3") {
            doc[i].style.backgroundColor = "rgb(254, 133, 77)"
        }
        else if (color === "orange4") {
            doc[i].style.backgroundColor = "rgb(254, 115, 51)"
        }
        else if (color === "orange5") {
            doc[i].style.backgroundColor = "rgb(254, 98, 25)"
        }
    }
    
    
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "pink") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(240, 98, 146)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(236, 64, 122)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(233, 30, 99)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(216, 27, 96)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(244, 143, 177)"
        }
        if (color === "pink1") {
            return doc[i].style.background = "rgb(244, 143, 177)"
        } 
        else if (color === "pink2") {
            doc[i].style.backgroundColor = "rgb(240, 98, 146)"
        }
        else if (color === "pink3") {
            doc[i].style.backgroundColor = "rgb(236, 64, 122)"
        }
        else if (color === "pink4") {
            doc[i].style.backgroundColor = "rgb(233, 30, 99)"
        }
        else if (color === "pink5") {
            doc[i].style.backgroundColor = "rgb(216, 27, 96)"
        }
    }
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "beige") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(196, 196, 176)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(172, 172, 154)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(147, 147, 132)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(123, 123, 110)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(221, 221, 198)"
        }
        if (color === "beige1") {
            return doc[i].style.background = "rgb(221, 221, 198)"
        } 
        else if (color === "beige2") {
            doc[i].style.backgroundColor = "rgb(196, 196, 176)"
        }
        else if (color === "beige3") {
            doc[i].style.backgroundColor = "rgb(172, 172, 154)"
        }
        else if (color === "beige4") {
            doc[i].style.backgroundColor = "rgb(147, 147, 132)"
        }
        else if (color === "beige5") {
            doc[i].style.backgroundColor = "rgb(123, 123, 110)"
        }
    }
    
    
    
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "purple") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(202, 141, 253)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(193, 117, 255)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(176, 66, 255)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(147, 0, 255)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(225, 175, 253)"
        }
        if (color === "purple1") {
            return doc[i].style.background = "rgb(225, 175, 253)"
        } 
        else if (color === "purple2") {
            doc[i].style.backgroundColor = "rgb(202, 141, 253)"
        }
        else if (color === "purple3") {
            doc[i].style.backgroundColor = "rgb(193, 117, 255)"
        }
        else if (color === "purple4") {
            doc[i].style.backgroundColor = "rgb(176, 66, 255)"
        }
        else if (color === "purple5") {
            doc[i].style.backgroundColor = "rgb(147, 0, 255)"
        }
    }
    
    
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "green") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(61, 174, 80)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(53, 152, 70)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(46, 130, 60)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(38, 109, 50)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(68, 195, 90)"
        }
        if (color === "green1") {
            return doc[i].style.background = "rgb(68, 195, 90)"
        } 
        else if (color === "green2") {
            doc[i].style.backgroundColor = "rgb(61, 174, 80)"
        }
        else if (color === "green3") {
            doc[i].style.backgroundColor = "rgb(53, 152, 70)"
        }
        else if (color === "green4") {
            doc[i].style.backgroundColor = "rgb(46, 130, 60)"
        }
        else if (color === "green5") {
            doc[i].style.backgroundColor = "rgb(38, 109, 50)"
        }
    }
    
    
    
    
    for (let i = 0; i < doc.length; i++) {
        if (color === "cyan") {
            let timer = 0;
            const interval1 = setInterval(() => {
            timer++
            doc[i].style.backgroundColor = "rgb(128, 222, 234)"
            if (interval1 > 1) {
                clearInterval(interval1)
                let timer = 0;
                const interval2 = setInterval(() => {
                timer++
                doc[i].style.backgroundColor = "rgb(77, 208, 225)"
                if (timer > 1) {
                    clearInterval(interval2)
                    let timer = 0;
                    const interval3 = setInterval(() => {
                    timer++
                    doc[i].style.backgroundColor = "rgb(38, 198, 218)"
                    if (timer > 1) {
                        clearInterval(interval3)
                        let timer = 0;
                        const interval4 = setInterval(() => {
                        timer++
                        doc[i].style.backgroundColor = "rgb(0, 188, 212)"
                        if (timer > 1) {
                            clearInterval(interval4)
                        }
                        }, 500)
                    }
                    }, 500)
                }
                }, 500)
            }
            }, 500)
            return doc[i].style.background = "rgb(178, 235, 242)"
        }
        if (color === "cyan1") {
            return doc[i].style.background = "rgb(178, 235, 242)"
        } 
        else if (color === "cyan2") {
            doc[i].style.backgroundColor = "rgb(128, 222, 234)"
        }
        else if (color === "cyan3") {
            doc[i].style.backgroundColor = "rgb(77, 208, 225)"
        }
        else if (color === "cyan4") {
            doc[i].style.backgroundColor = "rgb(38, 198, 218)"
        }
        else if (color === "cyan5") {
            doc[i].style.backgroundColor = "rgb(0, 188, 212)"
        }
    }
}

module.exports.ColorEngine = ColorEngine