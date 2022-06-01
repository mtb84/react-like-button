import { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [likes, setLikes] = useState("Likes")
    
    const clickCounter = function () {
        setCount(count+1)
        if (count === 0) {
            setLikes('Like');
            return;
        }
        else if (count === 1) {
            setLikes('Likes');
        }
    };


    return (
        <button type="button" onClick={clickCounter}>
            <p><h2> Click It! </h2><br />
            <h1>{count} {likes}</h1></p>
        </button>
    );
};  

export default LikeButton