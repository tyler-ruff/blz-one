"use client"

import HomeMD from '@/src/content/docs/home.mdx';

import styles from "./docs.module.css";

export default function DocsHomeComponent(){
    return (
        <div className="max-w-3xl relative mx-auto mb-5 px-10 py-5 dark:text-white prose">
            <article id="main-article" className={styles.markdown}>
                <HomeMD />
            </article>
        </div>
    )
}