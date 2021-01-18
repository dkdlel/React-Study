import { createAction, handleActions } from 'redux-actions';

const FIRE = 'map/FIRE';
const BUS = 'map/BUS';

export const fire = createAction(FIRE);
export const bus = createAction(BUS);

const initialState = {
    types: [
        {
            text: 'fire1'
        },
        {
            text: 'bus1'
        },
        {
            text: 'fire2'
        },
        {
            text: 'bus2'
        }
    ]
}

const map = handleActions(
    {

    },
    initialState
)

export default map;