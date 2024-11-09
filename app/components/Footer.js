import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                Designed and Maintained By&nbsp;
                <a href="https://tassawarhasib.online" target="_blank">Tassawar Hasib ♥</a>
            </p>
        </div>
    )
}

export default Footer;