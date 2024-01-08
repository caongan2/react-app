import { Link } from "react-router-dom";
import '../Pagination.css';

const Paginator = (props) => {
    const pages = props.pageInfo
    const lastPage = pages?.last_page
    const current_page = pages?.current_page ?? 1;
    const pageNumbers = Array.from({ length: lastPage }, (_, index) => index + 1);
    const handleClick = (page) => {
        props.handleClick(page)
    }

    const prevPage = (cur) => {
        const page = cur === 1 ? 1 : cur - 1;
        handleClick(page)
    }

    const nextPage = (cur) => {
        const page = cur === lastPage ? lastPage : cur + 1;
        handleClick(page)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button onClick={() => prevPage(current_page)} className="page-link">{ "<<" }</button></li>
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber} className="page-item">
                        <button onClick={() => handleClick(pageNumber)} className="page-link">{pageNumber}</button>
                    </li>
                ))}
                <li className="page-item"><button onClick={() => nextPage(current_page)} className="page-link">{">>"}</button></li>
            </ul>
        </nav>
    );
}

export default Paginator;