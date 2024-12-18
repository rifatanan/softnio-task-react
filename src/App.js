import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './components/Modals';
import Price from './components/Price';

const imagesList = [
    { src: '/Images/purple.png', alt: 'Purple', color: '#816bff' },
    { src: '/Images/cyan.png', alt: 'Cyan', color: '#1fcec9' },
    { src: '/Images/blue.png', alt: 'Blue', color: '#4b97d3' },
    { src: '/Images/black.png', alt: 'Black', color: '#3b4747' },
];

function App() {
    const [modalShow, setModalShow] = useState(false);
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState(false);
    const [title, setTitle] = useState('Classy Modern Smart watch');
    const [size, setSize] = useState(false);
    const [image, setImage] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [productList, setProductList] = useState();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOptionClick = (option, size, price) => {
        setSelectedOption(option);
        setSize(size);
        setPrice(price);
    };

    const wristSizes = [
        { id: 'option1', size: 'S', price: '69' },
        { id: 'option2', size: 'M', price: '79' },
        { id: 'option3', size: 'L', price: '89' },
        { id: 'option4', size: 'XL', price: '99' },
    ];

    const plus = () => {
        setQuantity(quantity + 1);
    };

    const minus = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const colorClick = value => {
        setCurrentIndex(value);
        setColor(imagesList[value].alt);
        setImage(imagesList[value].src);
    };

    const addUniqueProduct = product => {
        setProductList(prevList => {
            const list = prevList || [];
            const exists = list.some(
                item =>
                    item.title === product.title &&
                    item.size === product.size &&
                    item.color === product.color,
            );

            if (!exists) {
                return [...list, product];
            }
            return list;
        });
    };

    const handleSubmit = () => {
        console.log('click', color, price);
        if (color && price)
            addUniqueProduct({
                title: title,
                size: size,
                price: price,
                color: color,
                quantity: quantity,
                image: image,
            });
    };

    return (
        <div className="main">
            <div className="ImageContainer">
                <img
                    className="mainImage"
                    src={imagesList[currentIndex].src}
                    alt={imagesList[currentIndex].alt}
                />
                <div className="header">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                        <h5
                            className="card-title"
                            id="header-title"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            {title}
                        </h5>
                        <div className="review d-flex">
                            <img
                                src="/Images/SVG/star-fill.svg"
                                alt="star-full"
                            />
                            <img
                                src="/Images/SVG/star-fill.svg"
                                alt="star-full"
                            />
                            <img
                                src="/Images/SVG/star-half.svg"
                                alt="star-half"
                            />
                            <img
                                src="/Images/SVG/star-blank.svg"
                                alt="star-blank"
                            />
                            <img
                                src="/Images/SVG/star-blank.svg"
                                alt="star-blank"
                            />
                            <span>(2 Review)</span>
                        </div>
                        <div className="titile-price">
                            <del>$99.00</del>
                            <span id="changeable-price">${price}</span>
                            <label>.00</label>
                        </div>
                        <p className="card-text">
                            I must explain to you how all this mistaken idea of
                            denoun cing ple praising pain was born and I will
                            give you a complete account of the system, and
                            expound the actual teaching.
                        </p>

                        <div className="d-flex" style={{ gap: '43px' }}>
                            <div className="d-flex flex-column">
                                <span style={{ color: '#8091a7' }}>Type</span>
                                <span className="type">Watch</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span style={{ color: '#8091a7' }}>
                                    Model Number
                                </span>
                                <span className="type">Forerunner 290XT</span>
                            </div>
                        </div>
                        <div className="band-color">
                            <span>Band Color</span>
                            <div className="radio-button">
                                {imagesList.map((item, index) => {
                                    return (
                                        <input
                                            key={index}
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios"
                                            value="1"
                                            onClick={() => colorClick(index)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="wrist-color">
                            <span>Wrist Size</span>
                            <div className="wristDiv">
                                <div className="d-flex gap-3">
                                    <Price
                                        wristSizes={wristSizes}
                                        selectedOption={selectedOption}
                                        handleOptionClick={handleOptionClick}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="quantity-add d-flex">
                            <div className="group-check-btn">
                                <button
                                    className="minus"
                                    id="minus"
                                    type="button"
                                    onClick={minus}
                                >
                                    <img
                                        src="/Images/SVG/minus.svg"
                                        alt="minus"
                                    />
                                </button>
                                <input
                                    id="quantity"
                                    max="10"
                                    min="0"
                                    value={quantity}
                                />
                                <button
                                    className="plus"
                                    id="plus"
                                    type="button"
                                    onClick={plus}
                                >
                                    <img
                                        src="/Images/SVG/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Add to Cart
                            </button>
                            <button className="heart">
                                <img src="/Images/SVG/heart.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* modals */}
            <div className="checkoutButton">
                <button
                    onClick={() => setModalShow(true)}
                    style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        lineHeight: '20px',
                        letterSpacing: '0.26px',
                    }}
                >
                    Checkout
                    <span
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '0 5px',
                            borderRadius: '5px',
                        }}
                    >
                        {productList && productList.length
                            ? productList.length
                            : '0'}
                    </span>
                </button>
                <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    productList={productList}
                />
            </div>
        </div>
    );
}

export default App;
