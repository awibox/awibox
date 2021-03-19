import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Styles
import styles from './Certificates.scss';

const Certificates = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.id} className="col-md-6">
          <div className={cn(styles.certificateItem, 'clearfix')}>
            <div className={styles.certiLogo}>
              <img src={item.logo} alt={item.company} />
            </div>
            <div className={styles.certiContent}>
              <div className={styles.certiTitle}>
                <h4>{item.name}</h4>
              </div>
              <div className={styles.certiId}>
                <span>Credential ID: <a href={item.link + item.id}>{item.id}</a></span>
              </div>
              <div className={styles.certiDate}>
                <span>{item.date}</span>
              </div>
              {/* <div className={styles.certiCompany}> */}
              {/*  <span>{item.company}</span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Certificates.propTypes = {
  data: ImmutablePropTypes.list,
  className: PropTypes.string,
};

export default Certificates;
