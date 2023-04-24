import React from 'react';

export const Images = (props) => {
    const {id, productName, productImage} = props.data;

    return (
        <div>

            <div className="pictures">
                <img src={productImage} alt={"field"}/>
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                </div>
            </div>

        </div>
)

}

