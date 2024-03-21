import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import logoPic from "/public/imgs/logo.png"
import Image from "next/image";
import Link from 'next/link';
import {css} from "@kuma-ui/core";


const config: DocsThemeConfig = {
    logo: (
        <>
            <Image src={logoPic} alt="logo" width={20} height={20}/>
            <span style={{marginLeft: '.4em', fontWeight: 800}}>
        NEAUACM Project-Dept
      </span>
        </>
    ),
    head: (
        <link rel="icon" href="/public/imgs/logo.png" type="image/png"></link>
    ),
    footer: {
        text: (
            <div className={css`display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                gap: 1em`
            }>
                <div>
                    Copyright © 2024 NEAU ACM Team
                </div>
                <div>
                    <Link href="https://beian.miit.gov.cn/#/Integrated/index">黑ICP备2023004156号</Link>
                </div>
            </div>

        )
    },
    primaryHue: 213,
    i18n: [
        {locale: 'zh-CN', text: '中文'},
    ],
    docsRepositoryBase: 'https://github.com/Unknowns-Club/projdept_website/tree/master',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – NEAUACM项目部'
        }
    },
    editLink: {
        text: "编辑当前文档"
    },
    feedback: {
        content: "文档反馈",
    }
}

export default config
