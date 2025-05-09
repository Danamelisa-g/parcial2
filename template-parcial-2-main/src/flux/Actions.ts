import { counterActionType } from './Actions';
import { AppDispatcher } from './Dispatcher';

export const addActionType={
    type:'ADD_ITEM',
}
export const Actions = {
    add: (value:number) => {
        AppDispatcher.dispatch({
            type:counterActionType.ADD_ITEM,
            payload:value
        });
    },
};