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
          <div className={styles.icon}><i className='fa fa-building'/></div>
          <div className={styles.name}>{data.get('location')}</div>
        </div>
        {data.get('github') && <div className={styles.profileItem}>
          <div className={styles.icon}><i className='fa fa-github'/></div>
          <div className={styles.name}>
            <a href={data.get('github')}
               target='_blank'
               rel='noopener noreferrer'>{data.get('github').split('/').reverse()[0]}</a>
          </div>
        </div>}
        {data.get('linkedIn') && <div className={styles.profileItem}>
          <div className={styles.icon}>
            <i className='fa fa-linkedin-square' style={{ color: '#0077B5' }}/>
          </div>
          <div className={styles.name}>
            <a href={data.get('linkedIn')}
               target='_blank'
               rel='noopener noreferrer'>{data.get('linkedIn').split('/').reverse()[0]}</a>
          </div>
        </div>
        }
        <div className={styles.profileItem}>
          <div className={styles.icon}>
            <i className='fa fa-envelope-open-o'/>
          </div>
          <div className={styles.name}>
          <a href={`mailto:${data.get('email')}`}
             target='_blank'
             rel='noopener noreferrer'>{data.get('email')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

PersonalCard.propTypes = {
  data: PropTypes.any.isRequired,
};

export default PersonalCard;
