import React from 'react';

const Price = (props) => {
    const { wristSizes,selectedOption,handleOptionClick } = props;
    return (
        <>
            {wristSizes.map((item) => (
                <div
                    key={item.id}
                    className={`d-flex option ${selectedOption === item.id?'selected':''}
                    `}
                    onClick={() => handleOptionClick(item.id,item.size,item.price)}
                >
                    {item.size}
                    <label>${item.price}</label>
                </div>
            ))}
        </>
    );
};

export default Price;
