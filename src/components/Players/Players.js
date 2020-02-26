import React from "react";

import "./Players.css";

import GetScores from "../../apis/scores";

class Players extends React.Component {
    state = { scores: [] };

    componentDidMount() {
        this.fromMongo();
    }

    async fromMongo() {
        let scores = await GetScores.getScores();
        scores = scores.sort((a, b) => { return a.score < b.score });
        this.setState({ scores: scores });
    }

    render() {
        let pos = 0;

        let players = this.state.scores.map(
            (player) => {
                return (
                    <tr>
                        <td><b>{++pos}</b></td>
                        <td className="name_col"><b>{player.name.toUpperCase()}</b></td>
                        <td><b>{player.score}</b></td>
                    </tr>
                )
            }).slice(0, 10);

        return (

            <div className="central">

                <div className="top"> <h2>TOP 10</h2></div>

                <table className="players">

                    <thead>

                        <tr>
                            <th> POSITION </th>
                            <th className="name_col"> NAME </th>
                            <th> SCORE </th>
                        </tr>

                    </thead>

                    <tbody>

                        {players}

                    </tbody>

                </table>

            </div>

        );
    }
}

export default Players;
