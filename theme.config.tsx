import React from 'react'
import logoPic from "/public/imgs/logo.png"
import Image from "next/image";
import Link from 'next/link';
import {css} from "@kuma-ui/core";
import {DocsThemeConfig} from "nextra-theme-docs";


const config: DocsThemeConfig = {
    logo: (
        <>
            <Image src={logoPic} alt="logo" width={20} height={20}/>
            <span style={{marginLeft: '.4em', fontWeight: 800}}>
        NEAUACM Project-Dept
      </span>
        </>
    ),
    head: () =>
        <>
            <title>NEAUACM项目部</title>
        </>
    ,
    footer: {
        content: (
            <div className={css`display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-size: small;
                gap: 1em`
            }>
                <div>
                    Copyright © 2024 NEAU ACM Team | <Link
                    href="https://beian.miit.gov.cn/#/Integrated/index">黑ICP备2023004156号</Link>
                </div>
            </div>

        )
    },
    docsRepositoryBase: 'https://github.com/Unknowns-Club/projdept_website/tree/master',
    editLink: {
        component: null
    },
    search: {
        placeholder: '搜索'
    },
    feedback: {
        content: null
    },
    toc: {
        title: "内容",
    }
}

export default config
