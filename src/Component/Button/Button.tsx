import React, {FC, memo} from 'react';

interface IButton {
    name: string
    callback?: () => void
}

export const Button: FC<IButton> = memo(({
                                            name,
                                            callback
                                         }) => {
    return (
        <>
            <button onClick={callback}>{name}</button>
        </>
    );
});
