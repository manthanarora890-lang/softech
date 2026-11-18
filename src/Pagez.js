import "./ziva.css";
    
function Pagez() {
  return (
    <div className="z-pagination">
      <button className="z-page-arrow">‹</button>

      <button className="z-page-number active">1</button>
      <button className="z-page-number">2</button>
      <button className="z-page-number">3</button>

      <button className="z-page-arrow">›</button>
    </div>
  );
}

export default Pagez;