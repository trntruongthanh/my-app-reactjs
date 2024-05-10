import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {

    onSubmit: null,
}

function PostFiltersForm(props) {

    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');

    // xử lý debounce
    const typingTimeoutRef = useRef(null);


    function handleSearchTermChange(event) {

        const value = event.target.value;

        setSearchTerm(value);

        if (!onSubmit) {
            return;
        }
        
        if (typingTimeoutRef.current) {

            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {

            const formValue = {

                searchTerm: value,
            };
            
            onSubmit(formValue);

        }, 300);
    }

    return (

        <form>
            <input 
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearchTermChange}
            >

            </input>
        </form>
    );
}

export default PostFiltersForm;