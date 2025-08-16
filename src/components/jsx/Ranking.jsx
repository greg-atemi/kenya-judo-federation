import '../styles/Ranking.css';

function Ranking() {
    return (
        <section>
            <h1>Ranking</h1>
            <div className='CategoryGroup'>
                <span>Category</span>
                <select>
                    <option value="senior">Senior</option>
                    <option value="junior">Junior</option>
                    <option value="cadet">Cadet</option>
                </select>
            </div>
            <div className="Ranking">
                <table className="RankingTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Club</th>
                            <th>Gold</th>
                            <th>Silver</th>
                            <th>Bronze</th>
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

export default Ranking;