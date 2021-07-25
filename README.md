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

* *black* | ( default - LOOP MODE: from 1 - 10 )
* *beige* | ( default - LOOP MODE: from 1 - 10 )
* *blue* | ( default - LOOP MODE: from 1 - 10 )
* *cyan* | ( default - LOOP MODE: from 1 - 10 )
* *green* | ( default - LOOP MODE: from 1 - 10 )
* *red* | ( default - LOOP MODE: from 1 - 10 )
* *orange* | ( default - LOOP MODE: from 1 - 10 )
* *purple* | ( default - LOOP MODE: from 1 - 10 )
* *pink* | ( default - LOOP MODE: from 1 - 10 )
* *yellow* | ( default - LOOP MODE: from 1 - 10 )

#
* *black1* - *black10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *beige1* - *beige10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *blue1* - *blue10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *cyan1* - *cyan10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *green1* - *green10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *red1* - *red10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *orange1* - *orange10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *purple1* - *purple10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *pink1* - *pink10* | ( STRICT MOODE | Color scale from 1 - 10 )
* *yellow1* - *yellow10* | ( STRICT MOODE | Color scale from 1 - 10 )
![STRICT MODE](https://github.com/Dmitrinilssonbysell/color_engine.github.io/blob/master/image/Color2.jpg?raw=true)

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