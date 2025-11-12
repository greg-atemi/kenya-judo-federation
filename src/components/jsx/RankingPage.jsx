import { useState } from 'react';
import '../styles/RankingPage.css';
import rankingData from '../../../data/ranking.json'; // Import the JSON file

function RankingPage() {
    const [selectedCategory, setSelectedCategory] = useState('Cadet'); // Default category

    // Get the filtered data based on the selected category
    const filteredRanking = Array.isArray(rankingData[selectedCategory]) ? rankingData[selectedCategory] : [];

    return (
        <section className='Section'>
            <div className='RankingSearchContainer'>
                <div className='RankingSearch'>
                    <p>Select Category</p>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)} // Update state on selection
                    >
                        <option value="Senior">Senior</option>
                        <option value="Junior">Junior</option>
                        <option value="Cadet">Cadet</option>
                    </select>
                </div>
                <div className='RankingSearch'>
                    <p>Search by Year</p>
                    <select>
                        <option value="select">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
            </div>
            <h1>Club Ranking</h1>
            <div className="Ranking">
                <table className="RankingTable">
                    <thead>
                        <tr>
                            <th className="Neutral">#</th>
                            <th className="Neutral">Club</th>
                            <th className="Gold">Gold</th>
                            <th className="Silver">Silver</th>
                            <th className="Bronze">Bronze</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRanking.length > 0 ? (
                            filteredRanking.map((rank, index) => (
                                <tr key={index}>
                                    <td>{rank.position || '-'}</td>
                                    <td>{rank.club || '-'}</td>
                                    <td>{rank.Gold || '-'}</td>
                                    <td>{rank.Silver || '-'}</td>
                                    <td>{rank.Bronze || '-'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available for {selectedCategory} category</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default RankingPage;