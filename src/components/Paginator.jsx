import { Link, useLocation } from "react-router-dom";

const Paginator = ({ pageCount, currentPage, justify = "center" }) => {
    const location = useLocation();
    let currentLoc
    const loc = location.pathname.lastIndexOf("/")
    currentLoc = location.pathname.slice(0,loc+1);
  const page = Number(currentPage);

  const renderPages = () => {
    let li = [];
    li.push(
      <li
        key={"page/prev"}
        className={page > 1 ? "page-item" : "page-item disabled"}
      >
        <Link className="page-link" to={`${currentLoc}${page - 1}`}>
          Ant.
        </Link>
      </li>
    );
    for (let i = 0; i < pageCount; i++) {
      li.push(
        <li
          key={`page${i + 1}`}
          className={i + 1 === page ? "page-item active" : "page-item"}
        >
          <Link className="page-link" to={`${currentLoc}${i + 1}`}>
            {i + 1}
          </Link>
        </li>
      );
    }

    li.push(
      <li
        key={"page/next"}
        className={page < pageCount ? "page-item" : "page-item disabled"}
      >
        <Link className="page-link" to={`${currentLoc}${page + 1}`}>
          Sig.
        </Link>
      </li>
    );

    return li;
  };

  return (
    pageCount > 0 && (
      <div className={`  overflow-hidden  d-flex justify-content-${justify}`} style={{width:'100%', height:'fit-content'}}>
        <nav className="m-0 p-0" aria-label="Page navigation example">
          <ul className="pagination pagination-lg d-flex flex-wrap m-0 p-0 ">
            {renderPages()}
          </ul>
        </nav>
      </div>
    )
  );
};

export default Paginator;
