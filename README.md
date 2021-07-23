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

* *black* | ( default - Loop from 1 - 5 )
* *beige* | ( default - Loop from 1 - 5 )
* *blue* | ( default - Loop from 1 - 5 )
* *cyan* | ( default - Loop from 1 - 5 )
* *green* | ( default - Loop from 1 - 5 )
* *red* | ( default - Loop from 1 - 5 )
* *orange* | ( default - Loop from 1 - 5 )
* *purple* | ( default - Loop from 1 - 5 )
* *pink* | ( default - Loop from 1 - 5 )
* *yellow* | ( default - Loop from 1 - 5 )
#
* *black1* - *black5* | ( Color scale from 1 - 5 | STRICT MODE )
* *beige1* - *beige5* | ( Color scale from 1 - 5 | STRICT MODE )
* *blue1* - *blue5* | ( Color scale from 1 - 5 | STRICT MODE )
* *cyan1* - *cyan5* | ( Color scale from 1 - 5 | STRICT MODE )
* *green1* - *green5* | ( Color scale from 1 - 5 | STRICT MODE )
* *red1* - *red5* | ( Color scale from 1 - 5 | STRICT MODE )
* *orange1* - *orange5* | ( Color scale from 1 - 5 | STRICT MODE )
* *purple1* - *purple5* | ( Color scale from 1 - 5 | STRICT MODE )
* *pink1* - *pink5* | ( Color scale from 1 - 5 | STRICT MODE )
* *yellow1* - *yellow5* | ( Color scale from 1 - 5 | STRICT MODE )