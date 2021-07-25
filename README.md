# Background Color Engine

Quick and easy way to get background color!
![Demo](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/snippet1.jpg?raw=true)

# Installation

`npm i background-color`

Then...

```
import React, { useEffect } from "react"
import { ColorEngine } from "background-color"

const MyApplication = () => {
    
    useEffect(() => {
      ColorEngine("blue", ".my-class-selector")
      ColorEngine("orange", "#my-id-selector")
    }, [])
    
    return(
        <div>
        
            <div className="my-class-selector">
                example
            </div>
        
            <div id="my-id-selector">
                example
            </div>
        
        </div>
    )
}

export default MyApplication

```

## Options

* *black* | ( default - LOOP MODE: from 1 - 5 )
* *beige* | ( default - LOOP MODE: from 1 - 5 )
* *blue* | ( default - LOOP MODE: from 1 - 5 )
* *cyan* | ( default - LOOP MODE: from 1 - 5 )
* *green* | ( default - LOOP MODE: from 1 - 5 )
* *red* | ( default - LOOP MODE: from 1 - 5 )
* *orange* | ( default - LOOP MODE: from 1 - 5 )
* *purple* | ( default - LOOP MODE: from 1 - 5 )
* *pink* | ( default - LOOP MODE: from 1 - 5 )
* *yellow* | ( default - LOOP MODE: from 1 - 5 )
![default - LOOP MODE](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/Color1.jpg?raw=true)

#
* *black1* - *black5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *beige1* - *beige5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *blue1* - *blue5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *cyan1* - *cyan5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *green1* - *green5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *red1* - *red5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *orange1* - *orange5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *purple1* - *purple5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *pink1* - *pink5* | ( STRICT MOODE | Color scale from 1 - 5 )
* *yellow1* - *yellow5* | ( STRICT MOODE | Color scale from 1 - 5 )
![STRICT MODE](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/Color2.jpg?raw=true)
![STRICT MODE](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/Color3.jpg?raw=true)

#
* *split selector* | ( className & id ) | ( Split selector receives a maximum of 10 parameters & 1 Color )
```
import React, { useEffect } from "react"
import { ColorEngineSplit } from "background-color"

const MyApplication = () => {
    

    useEffect(() => {
        ColorEngineSplit("blue1", ".my-class-selector", "#my-id-selector") // Max 10 parameters
    }, [])
    
    return(
        <div>
        
            <div>
                <p className="my-class-selector">Box1</p>
                <p id="my-id-selector">Box2</p>
            </div>
        
        </div>
    )
}

export default MyApplication
```
![SPLIT SELECTOR](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/Option3.jpg?raw=true)