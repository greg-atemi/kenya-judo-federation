import '../styles/ClubsList.css';

function ClubsList() {

  return (
    <>
        <div className='ClubsListContainer'>
            <div className='ClubsListSearch'>
                <p>Club Search</p>
                <p>Region</p>
                <select>
                <option value="select">Select Region</option>
                <option value="nairobi">Nairobi</option>
                <option value="central">Central</option>
                <option value="eastern">Eastern</option>
                </select>
            </div>
            <div className='ClubsListTable'>
                <div>
                    <div>Alpha Judo Club</div>
                    <div>Kiambu Region</div>
                    <div>20 Judokas</div>
                </div>
                <div>
                    <div>Gitothua Judo Club</div>
                    <div>Kiambu Region</div>
                    <div>20 Judokas</div>
                </div>
                <div>
                    <div>KDF Judo Club</div>
                    <div>Kiambu Region</div>
                    <div>20 Judokas</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ClubsList;