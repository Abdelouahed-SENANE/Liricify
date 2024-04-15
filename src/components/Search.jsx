import React from 'react';
// import { Consumer } from '../../context';

const Search =()=>{
    // state = {
    //     trackTitle: ''
    // };
;
    // onChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // render() {
        // return (
        //     <Consumer>
        //         {value => {
            return (
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <h1 className="text-2xl font-bold mb-2 text-center">
                                <i className="fas fa-music text-blue-500 mr-2" /> Search For A Song
                            </h1>
                            <p className="text-gray-700 text-base text-center mb-4">Get the lyrics for any song</p>
                            <form>
                                <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                                    <input
                                        type="text"
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        placeholder="Enter song title..."
                                        name="trackTitle"
                                      
                                    />
                                    <button
                                        type="submit"
                                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    );
        //         }}
        //     </Consumer>
        // );
    // }
}

export default Search;
