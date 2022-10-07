import React, {FC, memo} from 'react';

interface IAddItemForm {

}

export const AddItemForm: FC<IAddItemForm> = memo(({}) => {
    return (
        <div>
            <input/>
            <button>+</button>
        </div>
    );
});
