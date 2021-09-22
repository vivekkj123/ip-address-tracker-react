export const initialState = {
    data: {
        data: {
            ip: '192.212.174.101',
            location: {
                city: 'Brooklyn',
                country: 'NY',
                postalCode: '10001',
                timezone: '-05:00'
            },
            isp: 'SpaceX Starlink'
        }
    }
};

export const getBasketTotal = (basket) => basket ?. reduce((amount, item) => (item.price) + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return({
                ...state,
                data: action.data
            })
        default:
            return state;
    }
};

export default reducer;
