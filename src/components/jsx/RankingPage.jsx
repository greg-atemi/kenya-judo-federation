import '../styles/RankingPage.css';

function RankingPage() {
    return (
        <section className='Section'>
            <div className='RankingSearchContainer'>
                <div className='RankingSearch'>
                    <p>Select Category</p>
                    <select>
                    <option value="select">Select Category</option>
                    <option value="nairobi">Senior</option>
                    <option value="central">Junior</option>
                    <option value="eastern">Cadet</option>
                    </select>
                </div>
                <div className='RankingSearch'>
                    <p>Search by Year</p>
                    <select>
                    <option value="select">Select Year</option>
                    <option value="nairobi">2025</option>
                    <option value="central">2024</option>
                    <option value="eastern">2023</option>
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
                            <th className="Gold"></th>
                            <th className="Silver"></th>
                            <th className="Bronze"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gitothua Judo Club</td>
                            <td>7</td>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Gitothua Judo Club</td>
                            <td>7</td>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Gitothua Judo Club</td>
                            <td>7</td>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Gitothua Judo Club</td>
                            <td>7</td>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Gitothua Judo Club</td>
                            <td>7</td>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default RankingPage;