import { useState } from "react";

export default function GifSearch({ handleSubmit }) {
    const [inputTerm, setInputTerm] = useState("");

    const handleChange = (event) => {
        setInputTerm(event.target.value);
    }
    
    const handleFocus = () => setInputTerm("");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search" >Enter a Search Term:</label><br />
                <input type="text" name="search" onFocus={handleFocus} onChange={handleChange} value={inputTerm} /><br />
                <input type="submit" value="Find Gifs" />
            </form>
        </div>
    )
}