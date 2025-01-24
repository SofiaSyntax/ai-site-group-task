export default function Card() {
  return (
    <div className=" flex gap-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Novels</h2>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">YA</h2>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Thriller</h2>
        </div>
      </div>
    </div>
  );
}
