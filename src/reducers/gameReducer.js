const initState = {
    block: [
        { position: "1x1", value: 1, id: 101 },
        { position: "1x2", value: 2, id: 102 },
        { position: "1x3", value: 3, id: 103 },
        { position: "1x3", value: 4, id: 104 },
        { position: "1x3", value: 5, id: 105 },
        { position: "1x3", value: 6, id: 106 },
        { position: "1x3", value: 7, id: 107 },
        { position: "1x3", value: 8, id: 108 },
        { position: "1x3", value: 999, id: 109 }
    ]
};

const gameReducer = (state = initState, action) => { 
    return state; 
}

export default gameReducer;