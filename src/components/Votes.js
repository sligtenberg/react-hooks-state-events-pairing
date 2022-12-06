import React, {useState} from "react";

function Votes({ upVotesInitial, downVotesInitial }) {
    const [upVotes, setUpVotes] = useState(upVotesInitial)
    const [downVotes, setDownVotes] = useState(downVotesInitial)

    return (
        <div className="Votes">
            <button onClick={() => setUpVotes(upVotes+1)}>{upVotes} 👍</button>
            <button onClick={() => setDownVotes(downVotes+1)}>{downVotes} 👎</button>
        </div>
    )
}

export default Votes