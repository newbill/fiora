import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './About.less';
import Common from './Common.less';

interface AboutProps {
    visible: boolean;
    onClose: () => void;
}

function About(props: AboutProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.about}
            visible={visible}
            title="关于"
            onClose={onClose}
        >
            <div>
                <div className={Common.block}>
                    <p className={Common.title}>如何搭建</p>
                    <a
                        href="https://yinxin630.github.io/fiora/zh-Hans/"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        点此查看搭建文档
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>隐私条款</p>
                    <a
                        href="/PrivacyPolicy.html"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        点此查看隐私条款
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>输入框快捷键</p>
                    <ul>
                        <li>Alt + S: 发送滑稽</li>
                        <li>Alt + D: 发送表情</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>命令消息</p>
                    <ul>
                        <li>-roll [number]: 掷点</li>
                        <li>-rps: 石头剪刀布</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>友情链接</p>
                    <ul>
                        <li>
                            <a
                                href="https://dai.im"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                在下小弋
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
}

export default About;
