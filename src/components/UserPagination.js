import { config } from "../config/config";
import "./UserPagination.css";

const UserPagination = (props) => {
    const { usersLength, setCurrentPage, currentPage, deleteSelected } = props;

    const totalNumOfPages = Math.ceil(usersLength / config.page_size);
    const changePage = (idx) => {
        setCurrentPage(idx);
    };

    const naviatePage = (idx) => {
        if (idx < 1) {
            idx = 1;
        } else if (idx > totalNumOfPages) {
            idx = totalNumOfPages;
        }
        setCurrentPage(idx);
    };

    let pages = [];
    pages.push(
        <div
            key={-3}
            className={`paginator-element ${currentPage === 1 ? 'disabled' : ""}`}
            onClick={() => changePage(1)}
        >
            <i className="fas fa-angle-double-left"></i>
        </div>
    );
    pages.push(
        <div
            key={-2}
            className={`paginator-element ${currentPage === 1 ? 'disabled' : ""}`}
            onClick={() =>naviatePage(currentPage - 1)}
        >
            <i className="fas fa-angle-left"></i>
        </div>
    );
    for (let i = 1; i <= totalNumOfPages; i++) {
        pages.push(
            <div
                key={i}
                onClick={() => changePage(i)}
                className={`paginator-element ${currentPage === i ? 'selected' : ""}`}
            >
                {i}
            </div>
        );
    }
    pages.push(
        <div
            key={-1}
            className={`paginator-element ${currentPage === totalNumOfPages ? 'disabled' : ""}`}
            onClick={() => naviatePage(currentPage + 1)}
        >
            <i className="fas fa-angle-right"></i>
        </div>
    );
    pages.push(
        <div
            key={0}
            className={`paginator-element ${currentPage === totalNumOfPages ? 'disabled' : ""}`}
            onClick={() => changePage(totalNumOfPages)}
        >
            <i className="fas fa-angle-double-right"></i>
        </div>
    );

    return (
        <div className='container'>
            <button className='btn-delete' onClick={() => deleteSelected()}>
                Delete Selected
            </button>
            <div className='pagination'>{pages}</div>
        </div>
    );
};


export default UserPagination;