# Background Color Engine

Quick and easy way to get background color!

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

* *black* | ( default )
* *beige* | ( default )
* *blue* | ( default )
* *cyan* | ( default )
* *green* | ( default )
* *red* | ( default )
* *orange* | ( default )
* *purple* | ( default )
* *pink* | ( default )
* *yellow* | ( default )

* *black1* - *black5* | ( Color scale from 1 - 5 )
* *beige1* - *beige5* | ( Color scale from 1 - 5 )
* *blue1* - *blue5* | ( Color scale from 1 - 5 )
* *cyan1* - *cyan5* | ( Color scale from 1 - 5 )
* *green1* - *green5* | ( Color scale from 1 - 5 )
* *red1* - *red5* | ( Color scale from 1 - 5 )
* *orange1* - *orange5* | ( Color scale from 1 - 5 )
* *purple1* - *purple5* | ( Color scale from 1 - 5 )
* *pink1* - *pink5* | ( Color scale from 1 - 5 )
* *yellow1* - *yellow5* | ( Color scale from 1 - 5 )