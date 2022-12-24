import { toast } from 'react-hot-toast';

export const capsLockKeyEvent = (event) => {

    const uiStyle = {
        duration: 3000,
        style: {
            background: '#90EE90',
        },
    }

    // By default, the keydown event is triggered whenever any key is pressed on the keyboard, including the caps lock key.
    // If you want to check the caps lock state and only fire an event when the caps lock key is pressed, 
    // you can use the key property of the KeyboardEvent object to check the key that was pressed.

    if (event.key === 'CapsLock') {
        event.getModifierState('CapsLock')
            ? toast.success(`CapsLock is on.`, { ...uiStyle, style: { ...uiStyle.style, background: '#ff7f8a' } })
            : toast.success(`CapsLock is off.`, uiStyle);
    }
}