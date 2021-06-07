import React from 'react';

import cn from 'classnames';
import s from './Popup.module.scss';

interface IPopupProps {
    show: boolean;
}

const Popup: React.FC<IPopupProps> = ({ children, show }) => {
    return (
        <>
            <div className={cn(s.popupOverlay, show ? '' : s.hide)}>
                <div className={s.popup}>{children}</div>
            </div>
        </>
    );
};

export default Popup;