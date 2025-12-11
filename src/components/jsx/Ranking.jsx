import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useState } from 'react';
import '../styles/Ranking.css';
import rankingData from '../../../data/ranking.json'; // Import the JSON file

function RankingPage() {
    const [selectedCategory, setSelectedCategory] = useState('Cadet'); // Default category

    // Get the filtered data based on the selected category
    const filteredRanking = Array.isArray(rankingData[selectedCategory]) ? rankingData[selectedCategory] : [];

    return (
        <div className='RankingContainer'>
            <h2>Club Ranking</h2>
            <div className='RankingSearchContainer'>
                <div className='RankingSearch'>
                    <p style={{ fontSize: '20px', marginTop: '0px' }}>Select Category</p>
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
                    <p style={{ fontSize: '20px', marginTop: '0px' }}>Search by Year</p>
                    <select>
                        <option value="select">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
            </div>
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
                        <AnimatePresence>
                        {filteredRanking.length > 0 ? (
                            filteredRanking.map((rank, index) => (
                                <motion.tr
                                    key={rank.id || index}
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25 }}
                                    layout
                                >
                                    <td>{rank.position || '-'}</td>
                                    <td>
                                        <Link to={`/club/${rank.id}`} className="ClubLink">
                                            {rank.club}
                                        </Link>
                                    </td>
                                    <td>{rank.Gold || '-'}</td>
                                    <td>{rank.Silver || '-'}</td>
                                    <td>{rank.Bronze || '-'}</td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available for {selectedCategory} category</td>
                            </tr>
                        )}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RankingPage;