const initState = {
    block: [
        { position: "1x1", value: 1, id: 101 },
        { position: "1x2", value: 2, id: 102 },
        { position: "1x3", value: 3, id: 103 },
        { position: "2x1", value: 4, id: 104 },
        { position: "2x2", value: 5, id: 105 },
        { position: "2x3", value: 6, id: 106 },
        { position: "3x1", value: 7, id: 107 },
        { position: "3x2", value: 8, id: 108 },
        { position: "3x3", value: 99, id: 109 }
    ],
    rankList: [
        { name: "Teresa", times: 9, id: 1001 },
        { name: "Josh", times: 11, id: 1002 },
        { name: "Rita", times: 10, id: 1003 },
        { name: "Crystal", times: 1, id: 1004 }
    ],
    user: { name: "unknown", times: 9999, id: 10001 }
};

const gameReducer = (state = initState, action) => { 
    return state; 
}

export default gameReducer;