import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {

    onPageChange: null,
}

function Pagination(props) {

    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows} = pagination;   // API Return

    // 51 / 10 = 5.1 up -> 6 
    const totalPages = Math.ceil(_totalRows / _limit);


    function handlePageChange(newPage) {

        if (onPageChange) {

            onPageChange(newPage);
        }
    }

    return (

        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
            Prev
            </button>

            <button
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
            Next
            </button>
        </div>
    );
}

export default Pagination;