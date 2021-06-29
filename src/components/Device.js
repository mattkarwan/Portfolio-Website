import React from 'react';
import { useProgressiveImg } from '../SharedFunctions';
import styles from './Device.module.scss';

export default function Device(props) {

    const [src, { blur}] = useProgressiveImg(props.desktopImg_Small, props.desktopImg_Large);
    const [mobile, { blurMobile}] = useProgressiveImg(props.mobileImg_Small, props.mobileImg_Large);

    return (
        <div>
            <svg className={styles.svg_devices} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.921 392.237">
                <defs>
                    <pattern id={props.desktopId} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 768 432">
                        <image width="768" height="432" href={src} style={{ filter: blur ? "blur(20px)" : "none" }} />
                    </pattern>

                    <pattern id={props.mobileId} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1242 2208">
                        <image width="1242" height="2208" href={mobile} style={{ filter: blurMobile ? "blur(500px)" : "none" }} />
                    </pattern>
                </defs>

                <g transform="translate(-830.499 -1378.616)">
                    <g transform="translate(830.499 1378.616)">
                        <ellipse className={styles.shadow} cx="266.9" cy="16.187" rx="266.9" ry="16.187" transform="translate(0.121 359.862)"/>
                        <ellipse className={styles.shadow} cx="43.4" cy="8.187" rx="43.4" ry="8.187" transform="translate(426.121 369.862)"/>
                        <g id="desktop" transform="translate(-18 0)">
                            <g id="desktop_frame">
                                <g transform="translate(18)">
                                    <rect style={{fill: `url(#${props.desktopId}`}} className={styles.desktop_screenshot} width="533" height="299.813" rx="8" transform="translate(0.43 0.205)"/>
                                    <rect className={styles.desktop_screenshot_overlay} width="533" height="299.813" rx="8" transform="translate(0.43 0.205)"/>
                                    <g id="frame">
                                        <path className={styles.frame_no_fill} d="M815.878,632h259.034a6.8,6.8,0,0,1,4.726,1.895,6.369,6.369,0,0,1,1.958,4.573V933.831a6.37,6.37,0,0,1-1.958,4.573,6.8,6.8,0,0,1-4.726,1.894H835.928v51.285h97.889l6.481,11.564v4.508h-.54l-.878,5.814H690.715l-.878-5.814h-.54v-4.508l6.481-11.564h97.889V940.3H554.683a6.8,6.8,0,0,1-4.726-1.894A6.371,6.371,0,0,1,548,933.831V638.468a6.37,6.37,0,0,1,1.958-4.573A6.8,6.8,0,0,1,554.683,632Z" transform="translate(-548 -632)"/>
                                        <path className={styles.frame_no_fill} d="M829.644,648h259.975a5.53,5.53,0,0,1,5.669,5.488V948.72a5.571,5.571,0,0,1-5.669,5.488H569.669A5.571,5.571,0,0,1,564,948.72V653.488A5.53,5.53,0,0,1,569.669,648Z" transform="translate(-562.846 -646.955)"/>
                                        <path className={styles.frame_no_fill} d="M1986.333,648h277.75c3.388,0,6.056,2.417,6.056,5.488V948.72a5.782,5.782,0,0,1-6.056,5.488H2109.922L1791,648Z" transform="translate(-1737.697 -646.955)"/>
                                        <path className={styles.device_frame} d="M830.652,634.025H555.138a5.46,5.46,0,0,0-3.461,1.307,4.477,4.477,0,0,0-1.442,3.136V933.831a4.217,4.217,0,0,0,1.442,3.071,5.121,5.121,0,0,0,3.461,1.307H830.652V922.2h2.308v18.1H555.138a7.535,7.535,0,0,1-5.047-1.894A6.184,6.184,0,0,1,548,933.831V638.468a6.183,6.183,0,0,1,2.091-4.573A7.534,7.534,0,0,1,555.138,632H832.96v2.025Z" transform="translate(-548 -632)"/>
                                        <path className={styles.device_frame} d="M4502.308,634.025h275.513a5.461,5.461,0,0,1,3.462,1.307,4.478,4.478,0,0,1,1.441,3.136V933.831a4.218,4.218,0,0,1-1.441,3.071,5.122,5.122,0,0,1-3.462,1.307H4502.308V922.2H4500v18.1h277.822a7.542,7.542,0,0,0,5.05-1.894,6.187,6.187,0,0,0,2.089-4.573V638.468a6.186,6.186,0,0,0-2.089-4.573,7.542,7.542,0,0,0-5.05-1.895H4500v2.025Z" transform="translate(-4251.363 -632)"/>
                                    </g>
                                </g>
                                <g id="bottom_frame" data-name="bottom frame" transform="translate(18)">
                                    <path className={styles.device_frame_2} d="M564,5074v11.63a5.71,5.71,0,0,0,5.985,5.421H846.653V5074Z" transform="translate(-562.846 -4783.799)"/>
                                    <path className={styles.device_frame_2} d="M4798.653,5074v11.63a5.709,5.709,0,0,1-5.984,5.421H4516V5074Z" transform="translate(-4265.057 -4783.799)"/>
                                </g>
                                <g id="base">
                                    <path className={styles.silverBase} d="M2775.044,6136H2647.923L2641,6147.563h134.044Z" transform="translate(-2490.083 -5776.417)"/>
                                    <path className={styles.silverBase_2} d="M4500,6136h127.123l6.921,11.563H4500Z" transform="translate(-4215.039 -5776.417)"/>
                                    <rect className={styles.silverBase_3} width="134.044" height="4.486" transform="translate(150.916 371.147)"/>
                                    <rect className={styles.silverBase_4} width="134.044" height="4.486" transform="translate(284.96 371.147)"/>
                                    <path className={styles.frontOfBase} d="M2649,6382h133.467v5.815h-132.53Z" transform="translate(-2497.507 -6006.345)"/>
                                    <path className={styles.frontOfBase2} d="M4633.467,6382H4500v5.815H4632.53Z" transform="translate(-4215.039 -6006.345)"/>
                                    <rect className={styles.desktop_stand} width="20.72" height="6.475" transform="translate(263.006 364.337)"/>
                                    <rect className={styles.desktop_stand_2} width="23.31" height="6.475" transform="translate(283.726 364.337)"/>
                                    <rect className={styles.desktop_stand_3} width="20.72" height="54.39" transform="translate(263.006 309.947)"/>
                                    <rect className={styles.desktop_stand_4} width="23.31" height="54.39" transform="translate(283.726 309.947)"/>
                                    <rect className={styles.desktop_stand_shadow} width="44.03" height="11.655" transform="translate(263.006 313.832)"/>
                                </g>
                            </g>
                        </g>
                        <g id="mobile" transform="translate(428.43 231.288)">
                            <rect style={{fill: `url(#${props.mobileId}`}} className={styles.mobile_screenshot} width="73.375" height="130" transform="translate(5.087 9.917)"/>
                            <rect className={styles.mobile_screenshot_overlay} width="73.375" height="130" transform="translate(5.087 9.917)"/>
                            <g id="mobile_frame">
                                <path className={styles.mobile_frame_shadow} d="M78.21,30.917c-4.242,1.143-7.278,3.22-7.561,7.427L70.56,171.556c.015,4.176,1.7,7.616,7.739,9.146l67.783-.078c4.813-.99,7.985-3.476,8.006-8.834l.089-132.978c-.563-3.287-1.464-6.448-7.383-7.739Zm70.665,7.523a.536.536,0,0,1,.378.155.527.527,0,0,1,.157.375l.094,134.089a.527.527,0,0,1-.157.375.536.536,0,0,1-.378.155L73.664,173.5a.532.532,0,0,1-.534-.53l.093-133.814a.532.532,0,0,1,.533-.529Z" transform="translate(-69.802 -30.917)"/>
                                <path className={styles.device_frame_2} d="M157.316,44.552c-4.209,1.143-7.222,3.22-7.5,7.427L149.725,185.2c.015,4.176,1.69,7.617,7.68,9.147l67.264-.078c4.776-.991,7.924-3.476,7.944-8.834L232.7,52.448c-.559-3.287-1.453-6.448-7.326-7.74ZM226.391,56.14a.5.5,0,0,1,.355.145.494.494,0,0,1,.147.351l.088,125.621a.494.494,0,0,1-.147.351.5.5,0,0,1-.354.145l-70.535-.086a.5.5,0,0,1-.5-.5l.087-125.364a.5.5,0,0,1,.5-.5Z" transform="translate(-149.725 -44.343)"/>
                                <path d="M-331.882,89.306h15.735a1.418,1.418,0,0,1,0,2.13h-15.735C-332.312,90.841-332.863,90.279-331.882,89.306Z" transform="translate(364.521 -83.997)"/>
                                <ellipse cx="1.473" cy="1.428" rx="1.473" ry="1.428" transform="translate(63.171 4.755)"/>
                                <path d="M-331.882,89.306h15.735a1.418,1.418,0,0,1,0,2.13h-15.735C-332.312,90.841-332.863,90.279-331.882,89.306Z" transform="translate(364.521 53.382)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}
