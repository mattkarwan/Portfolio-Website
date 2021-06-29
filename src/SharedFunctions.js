import React, { useState } from "react";

// Scroll To Target on Page
export const scrollTo = (target) => {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adjust color brightness
export const adjust = (color, amount) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

// 3D Transform elements on mouseover
export const hoverTransform = (element, innerEl) => {

    let el = document.getElementById(element)
    let inner = document.getElementById(innerEl)

    /* Get the height and width of the element */
    const height = el.clientHeight
    const width = el.clientWidth

    let wait = false;
    let timesPerSecond = 20;

    el.onpointermove = (e) => {

        if (!wait) {

            if (e.pointerType !== 'touch') {
                 // fire the event
                handleMove(e);
                // stop any further events
                wait = true;
                // after a fraction of a second, allow events again
                setTimeout(function () {
                    wait = false;
                }, 1000 / timesPerSecond);
            };
        };
    };

    el.onmouseleave = () => {
        inner.style.transform = 'rotateX(0) rotateY(0)';
    }


    /* Define function a */
    function handleMove(e) {
        // Get position of mouse cursor with respect to the element
        const xVal = e.layerX
        const yVal = e.layerY
        
        // Rotation values
        const yRotation = 5 * ((xVal - width / 2) / width)
        const xRotation = -5 * ((yVal - height / 2) / height)

        /* Apply the calculated transformation */
        inner.style.transform = 'rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
    }

}

// Lazy load images
export const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  
  React.useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};