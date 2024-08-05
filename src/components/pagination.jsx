import _ from "lodash"

const Pagination = ({ pages, setPage, activePage }) => {
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 1) {
                prevPage = pages
            }
            return prevPage
        })
    }


    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage < 1) {
                nextPage = pages
            }
            return nextPage
        })
    }

    return (
        <nav>
            <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
                <li className="page-item" onClick={prevPage}>
                    <a href="#" className="page-link">
                        قبلی
                    </a>
                </li>
                {
                    _.times(pages, (index) => (
                        <li key={`pagination-` + index} className={`page-item ${activePage === index + 1 ? "active" : ""}`} onClick={() => setPage(index + 1)}>
                            <a className="page-link" href="#">
                                {index + 1}
                            </a>
                        </li>
                    ))
                }
                <li className="page-item" onClick={nextPage}>
                    <a href="#" className="page-link">
                        بعدی
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Pagination