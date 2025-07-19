function ScoreBoard () {
    return (
        <div className="scoreboard" style={{
            backgroundColor: "#141414ff",
            padding:"15px",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "20px"   
        }}>

            <h2>Scoreboard</h2>
            <p>Player 1: 0</p>
            <p>Player 2: 0</p>
        </div>
    )
}
export default ScoreBoard;