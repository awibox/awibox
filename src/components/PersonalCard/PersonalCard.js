import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './PersonalCard.scss';

const PersonalCard = (props) => {
  const { data } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.avatar} style={{ backgroundImage: `url(${data.get('avatar')})` }}/>
      <div className={styles.profileItems}>
        <div className={styles.profileItem}>
          <div className={styles.icon}><i className='fa fa-user'/></div>
          <div>{data.get('position')}</div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.icon}><i className='fa fa-location-arrow'/></div>
          <div>{data.get('location')}</div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.icon}>
            <i className='fa fa-envelope-open-o'/>
          </div>
          <div>
            <a href={`mailto:${data.get('email')}`}
               target='_blank'
               rel='noopener noreferrer'>{data.get('email')}</a>
          </div>
        </div>
        <div className={styles.profileServices}>
        {data.get('services') && data.get('services').map((item) => (
          <div key={item.name} className={styles.icon}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <i className={`fa fa-${item.icon}`} style={{ color: item.color && item.color }}/>
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

PersonalCard.propTypes = {
  data: PropTypes.any.isRequired,
};

export default PersonalCard;
