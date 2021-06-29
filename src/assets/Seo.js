import styles from './SVG.module.scss';

export default function Seo () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 40 56">
            <g transform="translate(-1221 -432)">
                <rect className={styles.seoFill} width="12" height="23" rx="6" transform="translate(1221 465)" />
                <rect className={styles.seoFill} width="12" height="38" rx="6" transform="translate(1235 450)" />
                <rect className={styles.seoFill} width="12" height="56" rx="6" transform="translate(1249 432)" />
            </g>
        </svg>
    )
}