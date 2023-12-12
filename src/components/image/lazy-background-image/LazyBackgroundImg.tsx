import React, { useState } from "react";

type Props = {
    img: string;
    compressImg: string;
    children?: JSX.Element[] | JSX.Element;
    style?: React.CSSProperties;
    isDarkened?: boolean;
};

export default function LazyBackgroundImg({
    img,
    compressImg,
    children,
    style,
    isDarkened,
}: Props) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        console.log(`finish load`);
        
        setLoaded(true);
    };

    return (
        <div
            style={{
                backgroundImage: `${isDarkened
                    ? "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),"
                    : ""
                    }url(${loaded ? img : compressImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                filter: loaded ? "none" : "blur(20px)",
                transition: "filter 0.5s",
                ...style,
            }}
        >
            <img src={img} alt="" onLoad={handleLoad} style={{ display: "none" }} />
            {children}
        </div>
    );
}
