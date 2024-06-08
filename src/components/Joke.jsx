import { useState } from "react";
import { Button } from "./Button";

export const Joke = () => {
    const [joke, setJoke] = useState("");

    const fetchAPI = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    
    return (
        <div>
            <h1 className="flex justify-center items-center text-9xl">Joke Generator</h1>
            <div className="flex justify-center items-center w-11/12 mx-auto flex-col">
                <Button callApi={fetchAPI} />
                <p className="text-xl">{joke}</p>
            </div>
        </div>
    )
}
