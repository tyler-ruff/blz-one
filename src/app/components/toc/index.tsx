'use client'
import Script from 'next/script';

import { ITableOfContents } from "./data";
import LoadingPage from '@/src/app/components/loading';

import styles from "./toc.module.css";

export default function TableOfContents(props: ITableOfContents){
    return (
        <div id="toc-root">
            <div id="toc-container" className={styles.toc}>
                <LoadingPage />
            </div>
            <Script src="/js/toc.js"></Script>
        </div>
    );
}