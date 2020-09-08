import React, { Component } from 'react';
import { APICall } from '../util/util';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [],
      show: false,
      customer: {},
      customerInfo: {}
    };
  }

  showModal = (customerList,data) => {
    this.setState({ show: true });
    this.setState({ customer: customerList });
    this.setState({ customerInfo: data });
    console.log(data);
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  componentDidMount() {
    APICall().then((res) => {
      res.sort((a, b) => a.business_name.localeCompare(b.business_name));
      this.setState({ customerList: res });
    })
      .catch((error) => {
        console.error(error.message);
      })
  }
  
  render() {
    return (
      <div className='main'>
        <div className='flex-container-heading'>
          <Header title='MY CUSTOMERS' />
        </div>
        <ul>
          {this.state.customerList.map(customerList => {
            return <li className='flex-container-data' key={customerList.business_name}>
              <div className="displaytext">
                <div>{customerList.business_name}</div>
                <div className='displayLocation'>{customerList.city},{customerList.province}</div>
              </div>
              <button className="displayview" onClick={this.showModal.bind(this, customerList,customerList.customer_info)}>View</button>
              <div className="displayclosebtn">
                <button className="cancelBtn">
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
              </div>
            </li>
          })}
            <Modal show={this.state.show} handleClose={this.hideModal} data={this.state.customer} customerInfo={this.state.customerInfo}>
            </Modal>
        </ul>
        <Footer />
      </div>
    )
  }
}


export default App;
