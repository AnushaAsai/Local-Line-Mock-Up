import React from 'react';
import Moment from 'moment';

const Modal = ({ handleClose, show, data, customerInfo }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    var date;
    var ISOdate = new Date(customerInfo.last_delivery_date);
    if(customerInfo.last_delivery_date===null){
        date = 'N/A';
    }else{
        date = Moment(ISOdate).format('MMMM Do, YYYY').toString();
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="titlebar">
                    <div className="titledisplay">{data.business_name}</div>
                    <button className="closebtnmodal" onClick={handleClose}>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </div>

                <div className="row">
                    <div className="colleft">
                        <div className='rowfields'>
                            <div className='modalheading'>LOCATION</div>
                            <div className='modaldata'>{data.city},{data.province}</div>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>PRODUCT CATALOG</div>
                            <select id="dropdown" className='modaldata'>
                                <option value="select">Select a catalog</option>
                            </select>
                        </div>
                        <div className='rowfields'>
                            <button id='btncolorleft'>SEND CATALOG</button>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>AVERAGE ORDER</div>
                            <div className='modaldata'>${customerInfo.buyer_average_order}</div>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>MAY SALES</div>
                            <div className='modaldata'>${customerInfo.orders_this_month}</div>
                        </div>
                    </div>
                    <div className="colright">
                        <div className='rowfields'>
                            <div className='modalheading'>PHONE</div>
                            <div className='modaldata'>(123) 456-7890</div>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>LAST DELIVERY</div>
                            <div className='modaldata'>{date}</div>
                        </div>
                        <div className='rowfields'>
                            <button id='btncolorright'>ADD NOTE</button>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>MAY ORDER</div>
                            <div className='modaldata'>0</div>
                        </div>
                        <div className='rowfields'>
                            <div className='modalheading'>TOTAL SALES</div>
                            <div className='modaldata'>$0.0</div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div>When someone, interacts with your localline store, we'll track it here. To get started,
                    send your product calalog to one </div>
                    <div>of your customers or log an order on their behalf.</div>
                </div>
            </section>
        </div>
    );
};

export default Modal;