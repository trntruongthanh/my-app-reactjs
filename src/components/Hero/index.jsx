import React from 'react';
import PropTypes from 'prop-types';

/*
    memoization = trả về kết quả đã từng làm, không cần phải đi tính toán lại
    Dùng cho các xử lý, tính toán nặng, tốn thời gian, tài nguyên
    
    React.memo() là một HOC, chứ không phải hooks
*/

Hero.propTypes = {
    
    name:  PropTypes.string,
};

Hero.defaultProps = {

    name: '',
}

function Hero(props) {

    const { name } = props;

    console.log('hero render: ', name);

    return (
        <div>
            Hero name: {name}
        </div>
    );
}

export default React.memo(Hero);
