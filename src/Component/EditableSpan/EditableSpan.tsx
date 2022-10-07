import React, {FC, memo} from 'react';

interface IEditableSpan {
    titleTask?: string
    titleTodolists?: string
}

export const EditableSpan: FC<IEditableSpan> = memo(({
                                                         titleTask,
                                                         titleTodolists
                                                     }) => {
    return (
        <>
            <span>{titleTask}{titleTodolists}</span>
        </>
    );
});
