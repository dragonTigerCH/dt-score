import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ScoreBoard() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setMatches(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto my-8">
            <table className="table-fixed border-collapse border border-gray-400">
                <thead>
                <tr>
                    <th className="w-1/4 px-4 py-2 text-sm font-bold text-center bg-gray-200 border border-gray-400">시간</th>
                    <th className="w-1/4 px-4 py-2 text-sm font-bold text-center bg-gray-200 border border-gray-400">경기</th>
                    <th className="w-1/4 px-4 py-2 text-sm font-bold text-center bg-gray-200 border border-gray-400">스코어</th>
                    <th className="w-1/4 px-4 py-2 text-sm font-bold text-center bg-gray-200 border border-gray-400">상태</th>
                </tr>
                </thead>
                <tbody>
                {matches.map((match,index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 text-sm text-center border border-gray-400">{match}</td>
                        <td className="px-4 py-2 text-sm text-center border border-gray-400">{match}</td>
                        {/*<td className="px-4 py-2 text-sm text-center border border-gray-400">{match.score}</td>*/}
                        {/*<td className="px-4 py-2 text-sm text-center border border-gray-400">{match.status}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScoreBoard;
