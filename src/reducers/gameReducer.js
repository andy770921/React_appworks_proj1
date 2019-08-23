const initState = {
    block: [
        { position: "1x1", value: 1, isAdjacent: true, id: 101 },
        { position: "1x2", value: 2, isAdjacent: false, id: 102 },
        { position: "1x3", value: 3, isAdjacent: false, id: 103 },
        { position: "2x1", value: 4, isAdjacent: false, id: 104 },
        { position: "2x2", value: 5, isAdjacent: false, id: 105 },
        { position: "2x3", value: 6, isAdjacent: false, id: 106 },
        { position: "3x1", value: 7, isAdjacent: false, id: 107 },
        { position: "3x2", value: 8, isAdjacent: false, id: 108 },
        { position: "3x3", value: 99, isAdjacent: false, id: 109 }
    ],
    rankList: [
        { name: "Teresa", times: 9, id: 1001 },
        { name: "Josh", times: 11, id: 1002 },
        { name: "Rita", times: 10, id: 1003 },
        { name: "Crystal", times: 2, id: 1004 }
    ],
    user: { name: "unknown", times: null, id: 10001 }
};

const gameReducer = (state = initState, action) => {
    let finalState = {};
    let newBlockArray = [];
    switch (action.type) {
        case "ADD_USER":
            const newObj = { name: action.newUser, times: null, id: parseInt(Math.random() * 10000000) };
            finalState = {
                ...state,
                user: newObj
            }
            break;
        case "SET_ADJ":
            state.block.forEach(element => (element.isAdjacent = false));
            for (let i = 0; i < action.adjPositionArray.length; i++) {
                newBlockArray = state.block.map(element => {
                    if (action.adjPositionArray[i] === element.position) {
                        element.isAdjacent = true;
                        return element;
                    } else { return element; }
                });
            }
            finalState = {
                ...state,
                block: newBlockArray
            }
            break;
        case "SHUFFLE":
            console.log(action);
                const emptyValueArray = state.block.filter(element => (element.position === action.emptyPosition));
                const emptyValue = emptyValueArray[0].value;
                const targetValueArray = state.block.filter(element => (element.position === action.targetPosition));
                const targetValue = targetValueArray[0].value;
                let copiedState = Object.assign({}, state);
                newBlockArray = copiedState.block.map(element => {
                    if (element.position === action.emptyPosition) {
                        element.value = targetValue;
                        return element;
                    } else if (element.position === action.targetPosition) {
                        element.value = emptyValue;
                        return element;
                    } else { return element; }
                });

            finalState = {
                ...state,
                block: newBlockArray
            }
            console.log(finalState);
            break;
        default:
            return state;
    }

    return finalState;
}

export default gameReducer;