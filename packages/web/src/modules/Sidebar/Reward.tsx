import React from 'react';

import AlipayImage from '@fiora/assets/images/alipay.png';
import WxpayImage from '@fiora/assets/images/wxpay.png';
import Dialog from '../../components/Dialog';
import Style from './Reward.less';

interface RewardProps {
    visible: boolean;
    onClose: () => void;
}

function Reward(props: RewardProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.reward}
            visible={visible}
            title="打赏"
            onClose={onClose}
        >
            <div>
                <p className={Style.text}>
                    听说打赏可以让这个在线聊天室走得更远喔~~
                </p>
                <div className={Style.imageContainer}>
                    <img
                        className={Style.image}
                        src={AlipayImage}
                        alt="支付宝二维码"
                    />
                    <img
                        className={Style.image}
                        src={WxpayImage}
                        alt="微信二维码"
                    />
                </div>
            </div>
        </Dialog>
    );
}

export default Reward;
