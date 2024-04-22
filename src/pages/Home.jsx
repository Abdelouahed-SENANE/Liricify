import React, { useEffect, useState } from "react";
import WrapperMusic from "../components/WrapperMusic";
import CardMusic from "../components/CardMusic";
import Search from "../components/Search";
import { getLyrics, search } from "../api/services";

const Home = () => {
    const [inputValue, setInputValue] = useState("animals");
    const [results, setResults] = useState([]);
    const [isLoading, setIsloading] = useState(true);


    const query = async (query = inputValue) => {
        try {
            const response = await search(query);
            setResults(response);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsloading(false);
            }, 1000);
        }
    };
    const handleChange = (e) => {
        setInputValue(e.target.value);
        query(inputValue);
    };

    useEffect(() => {
        query();
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="w-full flex items-center justify-center h-screen">Loading...</div>
            ) : (
                <>
                    <Search onChange={handleChange}/>
                    <WrapperMusic>
                        {results && results.length > 0 ? (
                            results.map((music, index) => (
                                <CardMusic key={index} object={music} />
                            ))
                        ) : (
                            <div>Not Found</div>
                        )}
                    </WrapperMusic>
                </>
            )}
        </>
    );
};

export default Home;
