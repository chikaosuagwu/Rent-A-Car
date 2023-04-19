import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/services-list.css';
import serviceData from '../../assets/data/serviceData';

const ServicesList = () => {
  return (
      <>
          {
              serviceData.map(item => (
                  <ServiceItem item={item} key={item.id} />
              ))
          }
      </>
  )
}

const ServiceItem = ({ item }) => (
    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className="service_item">
            <span className='mb-3'>
                <i class={item.icon} />
            </span>

            <h6>{item.title}</h6>
            <p className="section_description">{item.description}</p>
        </div>
    </Col>
)

export default ServicesList
