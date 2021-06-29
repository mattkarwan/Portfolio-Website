import React, { useState } from 'react';
import styles from './Avatar.module.scss';

export default function Avatar() {

    const [avatarClicked, setAvatarClicked] = useState(false);

    function handleClick () {
        let mouth = document.getElementById('mouth');
        let eyebrows = document.getElementById('eyebrows');

        if (!avatarClicked) {
            mouth.classList.remove(styles.mouth_close);
            mouth.classList.add(styles.mouth_open);
            eyebrows.classList.remove(styles.eyebrows_down);
            eyebrows.classList.add(styles.eyebrows_up);
        } else {
            mouth.classList.remove(styles.mouth_open);
            mouth.classList.add(styles.mouth_close);
            eyebrows.classList.remove(styles.eyebrows_up);
            eyebrows.classList.add(styles.eyebrows_down);
        }

        setAvatarClicked((prev) => !prev);
    }

    return (
        <div className={styles.avatarHolder} onClick={handleClick}>
            <div className={styles.avatarBg}></div>
            
            <svg id="svgAvatar" className={styles.avatar} viewBox="0 0 201.108 292.722" aria-labelledby="avatarTitle avatarDesc" role="img">
                <title id="avatarTitle">Matt</title>
                <desc id="avatarDesc">A person with glasses holding a cup of coffee</desc>

                <g id="avatar" transform="translate(-15.644 -0.409)" className={styles.dropShadow}>
                <g id="clothes" transform="translate(52.736 174.284)">
                    <path id="shirt" className={styles.shirt} d="M-184.123,295.6v61.38a128.7,128.7,0,0,1-63.689,16.755c-22.451.034-60.893-4.355-80.386-15.492l16.373-62.643A21.793,21.793,0,0,1-290.1,273.87h84.228A21.8,21.8,0,0,1-184.123,295.6Z" transform="translate(328.198 -273.87)"/>
                </g>

                <g id="head" >
                    <g id="neck" transform="translate(115.058 150.714)">
                    <path className={styles.skin} d="M-213.855,244.16v29.226a17.929,17.929,0,0,1-17.882,17.882,17.929,17.929,0,0,1-17.874-17.882V244.16Z" transform="translate(249.634 -244.16)"/>
                    <path className={styles.transparent} d="M-213.861,245.16v5.99a38.2,38.2,0,0,1-13.145,2.261h-9.147a38.08,38.08,0,0,1-13.487-2.38V245.16Z" transform="translate(249.64 -244.367)"/>
                    </g>
                    <g id="face" transform="translate(65.707 38.339)">
                    <path className={styles.skin} d="M-186.519,170.873v9.694q0,2.317-.19,4.593a54.954,54.954,0,0,1-54.74,50.361A55.534,55.534,0,0,1-296.76,185q-.221-2.484-.23-5.017V170.77a57.489,57.489,0,0,0,6.537,4.982c23.213,15.272,58.564,16.1,86.925,3.5,1.3-.571,5.434-2.086,9.988-4.332A60.3,60.3,0,0,0-186.519,170.873Z" transform="translate(308.777 -116.617)"/>
                    <path className={styles.skin} d="M-148.189,168.074c0,7.751-4.189,14.034-9.353,14.034a6.228,6.228,0,0,1-2.221-.4c-3.364-1.222-6.013-5.188-6.846-10.242a60.3,60.3,0,0,0,7.037-4.046V154.373a6.268,6.268,0,0,1,2.031-.333,7.759,7.759,0,0,1,6,3.261h0A17.345,17.345,0,0,1-148.189,168.074Z" transform="translate(281.831 -113.16)"/>
                    <path className={styles.skin} d="M-293.539,172.3c-.936,4.458-3.308,7.933-6.347,9.25a6.346,6.346,0,0,1-2.61.563c-5.165,0-9.345-6.283-9.345-14.034a17.508,17.508,0,0,1,3.284-10.67h0a7.73,7.73,0,0,1,6.061-3.356,6.268,6.268,0,0,1,2.38.468v12.8a57.5,57.5,0,0,0,6.577,4.974Z" transform="translate(311.847 -113.162)"/>
                    <path className={styles.skin} d="M-186.521,138.305v18.54a60.3,60.3,0,0,1-7.037,4.046c-4.554,2.245-8.687,3.76-9.988,4.332-28.362,12.6-63.712,11.773-86.925-3.5A57.489,57.489,0,0,1-297,156.766V138.289a35.788,35.788,0,0,1,21.423-32.782,35.644,35.644,0,0,1,14.348-3h38.873a35.977,35.977,0,0,1,9.885,1.38,35.811,35.811,0,0,1,25.95,34.415Z" transform="translate(308.779 -102.51)"/>
                    <path className={styles.transparent} d="M-222.013,197.59a3.316,3.316,0,0,1-.976,2.38,3.316,3.316,0,0,1-2.38.976h-6.5a3.34,3.34,0,0,1-3.324-3.324Z" transform="translate(296.005 -122.16)"/>
                    </g>
                    <g id="hair" transform="translate(68.366 0.409)">
                    <path className={styles.hair} d="M-192.992-158.783a8.3,8.3,0,0,1-.457-2.808,34.88,34.88,0,0,1-.079-5.553c.072-.794.254-1.587.254-2.38a8.693,8.693,0,0,0-.373-2.157,21.593,21.593,0,0,1-.666-4.625c-.1-3.023-.151-6.22.841-9.116l.119-.332a16.162,16.162,0,0,1,.809-3.095l.064-.161a5.583,5.583,0,0,1,.425-3.8,37.228,37.228,0,0,1,1.385-5.521l.032-.093a9.456,9.456,0,0,1,.111-1.327,5.833,5.833,0,0,1,.3-1.105,1.361,1.361,0,0,1,0-.465l.008-.049-.024-.007q.031-.118.064-.236a15.274,15.274,0,0,1,3.07-7.642,7.781,7.781,0,0,1,2.972-2.224c.144-.4.283-.791.416-1.176a1.2,1.2,0,0,1-.279-1.13,39.664,39.664,0,0,1,1.73-3.967c.152-.3.31-.589.469-.883,1.585-5.231,2.656-9.06,5.369-12.556,3.7-4.8,9.525-7.765,16.288-9.254a.966.966,0,0,1-.262-.139.326.326,0,0,1-.1-.238.328.328,0,0,1,.1-.238,34.041,34.041,0,0,1,7.72-.426,71.72,71.72,0,0,1,30.019,4.742c.936.371,2.3.9,3.944,1.609q1.538.031,3.069.192a6.8,6.8,0,0,1,3.055,1.689l6.3,4.887h-.006c5.584,3.945,10.624,9.256,11.842,16.08a15.534,15.534,0,0,1,8.513-.9A13.188,13.188,0,0,1-79-209.643q.226.225.436.46a6.049,6.049,0,0,1,2.024,2.134,1.213,1.213,0,0,1,.094.953c.785,1.431,1.45,2.943,2.207,4.387,1.507,2.911,3.911,5.006,5.72,7.671a19.177,19.177,0,0,1,3.173,9.123.958.958,0,0,1-.637,1.061,13.107,13.107,0,0,1,.106,7.373c-.4,1.712-1.036,3.439-1.5,5.186a25.026,25.026,0,0,0,.216,4.039c.508,3.729,1.356,4.808,1.094,7.085a5.845,5.845,0,0,1-.119.682c-.872,4.141-5,6.672-6.545,8.171-.619.595-1.254,1.182-1.9,1.737v-18.437A35.787,35.787,0,0,0-96.048-200.8l-.03-.013-.006.014a35.658,35.658,0,0,0-14.3-3h-38.931a35.99,35.99,0,0,0-9.875,1.381q-.24.069-.479.141c-.5.422-1.016.826-1.536,1.223a61.806,61.806,0,0,1-6.513,4.228c-2.254,1.309-4.554,2.547-6.807,3.856-.324.189-.653.378-.981.572A35.781,35.781,0,0,0-185.1-168v18.563C-188.97-152.09-192.165-155.239-192.992-158.783Z" transform="translate(194.366 241.623)"/>
                    </g>
                    <g id="eyebrows" className={styles.eyebrows} transform="translate(68.366 0.409)">
                    <path id="left-eyebrow" className={styles.hair} d="M-279.361,153.386a98.865,98.865,0,0,1,13.82-.984,100.663,100.663,0,0,1,16.922,1.38,4.046,4.046,0,0,0,2.269-.658,2.055,2.055,0,0,0,.96-1.634v-.714c0-1.317-1.436-2.38-3.245-2.428,0,0-23.308-1.833-26.767-.349s-5.093,2.562-5.728,4.062h0C-281.13,152.775-280.345,153.37-279.361,153.386Z" transform="translate(302.84 -73.861)"/>
                    <path id="right-eyebrow" className={styles.hair} d="M-183,153.689a100.679,100.679,0,0,0-13.8-1.158,101.063,101.063,0,0,0-16.938,1.158,4.069,4.069,0,0,1-2.269-.682,2.071,2.071,0,0,1-.936-1.65v-.714c0-1.317,1.468-2.38,3.276-2.38,0,0,23.332-1.531,26.767,0s5.061,2.634,5.68,4.141h0C-181.216,153.11-182.018,153.689-183,153.689Z" transform="translate(289.574 -73.895)"/>
                    </g>
                    <g id="mouth" className={styles.mouth} transform="translate(114.772 127.557)">
                    <path id="background" className={styles.black} d="M-214.086,216.057v.254a6.458,6.458,0,0,1-2.729,5.061,7.142,7.142,0,0,1-1.008.666,11.368,11.368,0,0,1-5.791,1.507h-16.811a11.67,11.67,0,0,1-5.855-1.507,11.4,11.4,0,0,1-.992-.674,6.513,6.513,0,0,1-2.729-5.1v-.206c0-.6.643-1.087,1.436-1.087h33.058C-214.729,214.994-214.086,215.454-214.086,216.057Z" transform="translate(250 -214.97)"/>
                    <path id="tongue-left" className={styles.tongue} d="M-226.274,223.781v.04h-8.386v-.04c0-1.483,1.88-2.681,4.2-2.681a6.259,6.259,0,0,1,1.983.317C-227.171,221.87-226.274,222.758-226.274,223.781Z" transform="translate(246.83 -216.237)"/>
                    <path id="tongue-right" className={styles.tongue} d="M-221.275,223.777v.04h-8.385v-.04c0-1.023.9-1.912,2.213-2.38a6.259,6.259,0,0,1,1.983-.317C-223.155,221.1-221.275,222.294-221.275,223.777Z" transform="translate(245.796 -216.233)"/>
                    <path id="teeth-bot" className={styles.teeth} d="M-216.853,223.816a11.368,11.368,0,0,1-5.791,1.507h-16.811a11.67,11.67,0,0,1-5.855-1.507,2.38,2.38,0,0,1,1.047-.246H-217.9A2.38,2.38,0,0,1-216.853,223.816Z" transform="translate(249.031 -216.747)"/>
                    <path id="teeth-top" className={styles.teeth} d="M-218.044,218.6H-244.93a2.38,2.38,0,0,1-2.38-2.38V215h31.638v1.23A2.38,2.38,0,0,1-218.044,218.6Z" transform="translate(249.444 -214.976)"/>
                    </g>
                    <g id="glasses" className={styles.glassesShadow} transform="translate(86.895 83.066)">
                    <path className={styles.glass} d="M-284.88,165.2c0-3.062,3.173-5.1,7.013-5.553a129,129,0,0,1,31.828.508,7.259,7.259,0,0,1,3.514,2.023c1.587,1.856.889,4.117.111,7.029-2.039,7.664-3.062,11.5-6.386,13.209-1.658.849-2.689.754-12.654.611-14.129-.214-14.74-.063-16.414-.793C-284.182,179.342-284.88,171.972-284.88,165.2Zm49.94-.738h-6.624m49.924.738c0-3.062-3.173-5.1-7.013-5.553a128.938,128.938,0,0,0-31.82.508,7.259,7.259,0,0,0-3.514,2.023c-1.587,1.856-.9,4.117-.119,7.029,2.047,7.664,3.07,11.5,6.347,13.209,1.658.849,2.7.754,12.693.611,14.129-.214,14.748-.063,16.414-.793C-192.314,179.342-191.64,171.972-191.64,165.2Z" transform="translate(285.086 -158.89)"/>
                    <path className={styles.frame} d="M-285.14,165.2c0-3.062,3.173-5.1,7.013-5.553a129,129,0,0,1,31.828.508,7.259,7.259,0,0,1,3.514,2.023c1.587,1.856.889,4.117.111,7.029-2.039,7.664-3.062,11.5-6.347,13.209-1.666.849-2.7.754-12.654.611-14.137-.214-14.748-.063-16.422-.793C-284.458,179.342-285.14,171.972-285.14,165.2Zm49.98-.738h-6.632m49.924.738c0-3.062-3.173-5.1-7.005-5.553a129,129,0,0,0-31.828.508,7.259,7.259,0,0,0-3.554,1.991c-1.587,1.856-.889,4.117-.119,7.029,2.047,7.664,3.07,11.5,6.347,13.209,1.658.849,2.7.754,12.693.611,14.129-.214,14.748-.063,16.422-.793,6.339-2.864,7.013-10.234,7.013-17Z" transform="translate(285.14 -158.89)"/>
                    </g>
                </g>

                    
                <g id="arm" className={styles.arm} transform="translate(22.023 168.87) rotate(3)">
                    <g id="steam" className={`${styles.transparent} ${styles.steam1}`} transform="translate(-0.756 76.03)">
                    <path d="M-327.481,331.043c-.318,0,2.028-3.477,10.839-4.661,7.922-.978,9.909-1.081,5.112-2.191-8.359-2.255-19.578-4.561-18.024-7.747h17.433c-4.405,2.184,15.575,5.284,21.843,7.313,3.759,1.052,3.082,2.179-1.92,3.194-5.647,1.141-17.98,1.488-17.98,4.066C-311.883,331.018-327.163,331.043-327.481,331.043Z" transform="translate(333.215 -327.647)"/>
                    <path d="M-327.955,331.338c-.318,0,2.5-3.772,11.313-4.956,7.922-.978,9.909-1.081,5.112-2.191-8.359-2.255-19.578-4.561-18.024-7.747h17.433c0,1.577,15.575,5.284,21.843,7.313,3.759,1.052,3.082,2.179-1.92,3.194-5.647,1.141-21.665,3.043-16.808,4.386Z" transform="translate(335.215 -313.084)"/>
                    </g>

                    <g id="steam2" className={`${styles.transparent} ${styles.steam2}`} transform="translate(-0.756 76.03)">
                    <path d="M-327.481,331.043c-.318,0,2.028-3.477,10.839-4.661,7.922-.978,9.909-1.081,5.112-2.191-8.359-2.255-19.578-4.561-18.024-7.747h17.433c-4.405,2.184,15.575,5.284,21.843,7.313,3.759,1.052,3.082,2.179-1.92,3.194-5.647,1.141-17.98,1.488-17.98,4.066C-311.883,331.018-327.163,331.043-327.481,331.043Z" transform="translate(333.215 -327.647)"/>
                    <path d="M-327.955,331.338c-.318,0,2.5-3.772,11.313-4.956,7.922-.978,9.909-1.081,5.112-2.191-8.359-2.255-19.578-4.561-18.024-7.747h17.433c0,1.577,15.575,5.284,21.843,7.313,3.759,1.052,3.082,2.179-1.92,3.194-5.647,1.141-21.665,3.043-16.808,4.386Z" transform="translate(335.215 -313.084)"/>
                    </g>

                    <g className={styles.darkerDropShadow}>
                        <path id="mug" className={styles.mug} d="M21.08,301.45H65.062a2.38,2.38,0,0,1,2.38,2.38v47.933a6.22,6.22,0,0,1-6.22,6.22H24.92a6.22,6.22,0,0,1-6.22-6.22V303.83A2.38,2.38,0,0,1,21.08,301.45Z" transform="translate(-18.7 -236.105)"/>
                        <path id="handle" className={styles.mug_handle} d="M-292.139,385.5c-.944,7.061-1.991,14.915-8.766,18.358a17.907,17.907,0,0,1-9.766,1.491c-10.829-.912-23.7-10.52-22.713-19.833.793-7.211,9.52-10.916,22.507-16.438a18.151,18.151,0,0,1,9.123-1.587c1.491.151,5.252.627,7.886,3.173C-290.37,373.982-291.417,380.035-292.139,385.5Z" transform="translate(363.316 -292.81)"/>
                        <path id="hand" className={styles.skin} d="M-274.039,404.014h-24.1a9.52,9.52,0,0,1-9.52-9.52V382.11a9.52,9.52,0,0,1,9.52-9.52h24.1a9.52,9.52,0,0,1,9.52,9.52l1.38,12.59a12.694,12.694,0,0,1-4.173,6.513,12.733,12.733,0,0,1-6.727,2.8Z" transform="translate(357.989 -293.877)"/>
                        <path id="forearm-sleeve" className={styles.shirt} d="M-179.031,388.507l-73.6,9.932-4.062-30.067,80.126-10.813c6.156-.793,11.955,4.474,12.947,11.844l.587,4.379c.468,5.458-.651,7.933-1.841,9.139-1.745,1.793-3.673,2.086-7.418,3.173A61.343,61.343,0,0,0-179.031,388.507Z" transform="translate(347.455 -290.755)"/>
                    </g>
                    <path id="bicep-sleeve" className={styles.shirt} d="M-145.813,367.229a11.879,11.879,0,0,1-1.333.421l-16.112,3.475-.143-.563-7.354-29.044-.143-.555-9.472-37.413a19.833,19.833,0,0,0,10.02-11.638c2.919-9.623-3.276-17.382-3.784-17.993a23.934,23.934,0,0,1,4.72-.532c2.7-.04,6.2-.135,9.425,1.912a13.621,13.621,0,0,1,5.7,7.648l17.184,67.877A13.844,13.844,0,0,1-145.813,367.229Z" transform="translate(331.682 -273.372)"/>
                </g>
                </g>
            </svg>
        </div>
    )
}