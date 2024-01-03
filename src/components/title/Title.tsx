
import { CSSProperties } from "react";
import style from "./Title.module.css"

export interface MyCustomCSS extends CSSProperties {
    '--i': number;
}

export default function Title() {
    return (
        <div className={style["waviy"]}>
            <span style={{ '--i': 1 } as MyCustomCSS}>ע</span>
            <span style={{ '--i': 2 } as MyCustomCSS}>ל</span>
            <span style={{ '--i': 3 } as MyCustomCSS}>&nbsp;</span>
            <span style={{ '--i': 4 } as MyCustomCSS}>ה</span>
            <span style={{ '--i': 5 } as MyCustomCSS}>ח</span>
            <span style={{ '--i': 6 } as MyCustomCSS}>ט</span>
            <span style={{ '--i': 7 } as MyCustomCSS}>י</span>
            <span style={{ '--i': 8 } as MyCustomCSS}>ב</span>
            <span style={{ '--i': 9 } as MyCustomCSS}>ה</span>
            {/* <span style={{ '--i': 9 } as MyCustomCSS}>I</span> */}
            {/* <span style={{ '--i': 10 } as MyCustomCSS}>N</span> */}
        </div>
    )
}