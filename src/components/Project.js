import React, { useEffect } from 'react';
import styles from './Project.module.scss';
import Device from './Device';
import { adjust, hoverTransform } from '../SharedFunctions';

export default function Project(props) {

    let darkerColor = adjust(props.color, -20);
    
    useEffect(() => {
        hoverTransform(props.containerId, props.innerId);
    }, [props.containerId, props.innerId]);

    return (
        <div className={styles.projectContainer}>
            <a href={props.url} target="_blank" rel="noreferrer" className={styles.link}>
                <div className={styles.hoverContainer} id={props.containerId} />
                <div id={props.innerId} className={styles.inner}>
                    <div className={styles.background} style={{ background: `linear-gradient(to bottom, ${props.color}, ${darkerColor})`}}>
                        <div className={styles.grid}>
                            <div className={styles.title}>
                                <h3>{props.name}</h3>
                                <h4>{props.description}</h4>
                            </div>

                            <div className={styles.devices}>
                                <Device
                                    desktopId={props.desktopId}
                                    desktopImg_Large={props.desktopImg_Large}
                                    desktopImg_Small={props.desktopImg_Small}
                                    mobileId={props.mobileId}
                                    mobileImg_Large={props.mobileImg_Large}
                                    mobileImg_Small={props.mobileImg_Small}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
