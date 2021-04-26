import User from "../auth/models";


export const USER_SET = 'USER/SET';

export interface USER_SET_ACTION {
    type: typeof USER_SET;
    user: User | null;
}

export type USER_ACTIONS =
    | USER_SET_ACTION

export function setUser(user: User | null): USER_SET_ACTION {
    console.log("user", user);
    return {
        type: USER_SET,
        user,
    };
}

export const user = (state: User | null = null, action: USER_ACTIONS): User | null => {
    switch (action.type) {
        case USER_SET: {
            return action.user;
        }
        default:
            return state;
    }
};
