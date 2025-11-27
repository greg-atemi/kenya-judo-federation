import '../styles/EventDetail.css';

function EventDetail() {

  return (
    <>
      <div className='EventDetailContainer'>
        <div className='EventDetailSummary'>
          <div>
            <p>Kiambu National Championships 2025</p>
            <p>Kiambu - Kenya</p>
          </div>
          <div>
            <p>90</p>
            <p>Days to go</p>
          </div>
        </div>
        <div className='EventCards'>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FROM</td>
                <td>05 August 2025</td>
              </tr>
              <tr>
                <td>TO</td>
                <td>05 August 2025</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colSpan="2">Numbers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CLUBS</td>
                <td>20</td>
              </tr>
              <tr>
                <td>JUDOKAS</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
        
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
        <div className="EventGallery">
          <h2>Event Gallery</h2>
          <div className="GalleryGrid">
            <div className="GalleryItem-landscape">
              <img src="/event1.jpg" alt="Gallery Item" />
            </div>
            <div className="GalleryItem-landscape">
              <img src="/event2.jpg" alt="Gallery Item" />
            </div>
            <div className="GalleryItem-landscape">
              <img src="/event1.jpg" alt="Gallery Item" />
            </div>
            <div className="GalleryItem-landscape">
              <img src="/event2.jpg" alt="Gallery Item" />
            </div>
            <div className="GalleryItem-landscape">
              <img src="/event1.jpg" alt="Gallery Item" />
            </div>
            <div className="GalleryItem-landscape">
              <img src="/event2.jpg" alt="Gallery Item" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetail;