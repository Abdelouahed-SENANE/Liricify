import React from "react";

const Lyrics = () => {
 
    return (
        <div className="container  mt-2 mx-auto w-[75%] h-screen">
            <header  className="text-4xl font-medium text-center">Detaills track</header>
            <div className="flex justify-center  mt-10">
                       <p className="mr-20">Anneé publie:	18 janvier 2010</p>
                       <p className="mr-20">Genre:Synthpop, RnB, hip-hop</p>
                       <p className="mr-20">Durée	3:36</p>
                       <p className="mr-20">autre</p>
                    </div>
            <p className="text-xl font-medium text-center pt-5"><strong>Baby</strong> by : justin bieber</p>
            <div className="container shadow-2xl flex justify-center  w-full h-3/4 bg-gray-300 overflow-hidden">
                <div className=" w-80 h-[75%]  absolute left-[12.5%] ">
                    <img src="/src/assets/image/music.jpg" alt="" className="h-full" />
                </div>
                <div className="bg-gray-300 w-96 h-h-full  ">
                    <p className="text-black text-center font-serif font-bold pt-5">
                    Oh-ooh-whoa-oh-oh-oh-oh
                    Oh-ooh-whoa-oh-oh-oh-oh
                    Oh-ooh-whoa-oh, oh-oh-oh-oh

                    You know you love me (yo), I know you care (uh-huh)
                    Just shout whenever (yo), and I'll be there (uh-huh)
                    You are my love (yo), you are my heart (uh-huh)
                    And we will never, ever, ever be apart (yo, uh-huh)
                    Are we an item? (Yo) girl, quit playin' (uh-huh)
                    "We're just friends" (yo), what are you sayin'? (Uh-huh)
                    Said, "There's another" (yo), and looked right in my eyes (uh-huh)
                    My first love broke my heart for the first time, and I was like (yo, uh-huh)

                    "Baby, baby, baby, oh"
                    Like, "Baby, baby, baby, no"
                    Like, "Baby, baby, baby, oh"
                    I thought you'd always be mine, mine
                    </p>
                   
                </div>
                <div className="bg-white w-80 h-[75%]  absolute  left-[68%] ">
                <img src="/src/assets/image/heade-phone.jpg" alt="" className="h-full" />
                </div>
            </div>
        </div>
    );
};

export default Lyrics;