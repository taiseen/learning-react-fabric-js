import { toast } from 'react-hot-toast';

const capsLockKeyEvent = (e) => {

    const uiStyle = {
        duration: 3000,
        style: {
            background: '#90EE90',
        },
    }

    if (e.getModifierState('CapsLock')) {
        toast.success(`CapsLock is on.`, { ...uiStyle, style: { ...uiStyle.style, background: '#ff7f8a' } });
    }
    if (!e.getModifierState('CapsLock')) {
        toast.success(`CapsLock is off.`, uiStyle);
    }
}

export default capsLockKeyEvent;