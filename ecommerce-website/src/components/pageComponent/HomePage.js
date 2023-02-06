import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div>
        <section className="container">
          <h2>Tours</h2>
          <div className="tour-detail">
            <span className="tour-date">JUL 16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-stadium">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
          <div className="tour-detail">
            <span className="tour-date">JUL 19</span>
            <span className="tour-place"> TORONTO,ON</span>
            <span className="tour-stadium">BUDWEISER STAGE</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
          <div className="tour-detail">
            <span className="tour-date">JUL 22</span>
            <span className="tour-place">BRISTOW, VA</span>
            <span className="tour-stadium"> JIGGY LUBE LIVE</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
          <div className="tour-detail">
            <span className="tour-date">JUL 29</span>
            <span className="tour-place"> PHOENIX, AZ</span>
            <span className="tour-stadium"> AK-CHIN PAVILION</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
          <div className="tour-detail">
            <span className="tour-date">AUG 2</span>
            <span className="tour-place">LAS VEGAS, NV</span>
            <span className="tour-stadium"> T-MOBILE ARENA</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
          <div className="tour-detail">
            <span className="tour-date">AUG 7</span>
            <span className="tour-place"> CONCORD, CA</span>
            <span className="tour-stadium"> CONCORD PAVILION</span>
            <button className="buy-tickets-btn">Buy Tickets</button>
          </div>
        </section>
      </div>
    </>
  );
};
export default HomePage;
