import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Eli</h1>
            <p className={styles.description}>I'm a Frontend developer. I love building cool websites with React. Let's create something awesome together! </p>
            <a href="mailto:elizeneli98@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage3.png")} alt="Hero Image of me :)" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};