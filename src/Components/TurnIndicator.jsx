function Turn () {
    return (
        <div className="turn-indicator" style={
            {
                backgroundColor: "#1b1a1aff",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                marginTop: "20px"
            }
        }>
            <h2>Current Turn</h2>
            <p>It's Player 1's turn</p>
            <button>End Turn</button>
            <button>Reset Game</button>
            <button>Undo Move</button>
            <button>Redo Move</button>
            <button>Save Game</button>     
        </div>
    )
}
export default Turn;