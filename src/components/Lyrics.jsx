import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getLyrics } from "../api/services";

const Lyrics = () => {
    const {id} = useParams();
    const [lyrics, setLyrics] = useState({});
    const fetchLyrics = async () => {
        const lyricsData = await getLyrics(id);
        setLyrics(lyricsData.lyrics);
    };
    useEffect(() => {
        fetchLyrics();
    }, []);
    return (
        <div className="container   mt-2 mx-auto w-[75%] h-screen">
            <header className="text-4xl my-10 font-medium text-center">
                Detaills track
            </header>
            <div className="container relative shadow-2xl flex justify-center  w-full h-[80vh] bg-gray-300 overflow-hidden">
                <div className=" w-80 h-full  absolute left-0 ">
                    <img
                        src="/src/assets/image/music.jpg"
                        alt=""
                        className="h-full"
                    />
                </div>
                <div className="bg-gray-300  max-w-[650px] h-full  ">
                    <p className="text-black text-center font-serif font-bold pt-5 text-2xl tracking-widest leading-relaxed ">
                        {lyrics.lyrics_body}
                    </p>
                </div>
                <div className="bg-white w-80 h-full  absolute  right-0 ">
                    <img
                        src="/src/assets/image/heade-phone.jpg"
                        alt=""
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Lyrics;
