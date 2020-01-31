import React from 'react';
import Card from 'components/Card/Card';
import Title from '../../components/Title/Title';

const CookiePolicy = () => (
  <div>
    <Title>
      <div style={{ textAlign: 'center' }}>Cookie Policy</div>
    </Title>
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <div style={{ padding: '20px', maxWidth: '500px' }}>
        <Card title={'Why we use cookies?'}>
          <p>
            We use cookies and other similar technologies for only analytical purposes that
            will help us distinguish you from other users of our site.
            This allows you to provide a convenient view of our site,
            and also gives you the opportunity to improve it.
          </p>

          <p>
            We use web analytics tool for the purpose of general analysis of site usage.
            The information obtained in this case can be transmitted in an anonymous form
            to the server of the web Analytics service, stored and processed there.
          </p>
          <p>
            We use Google Analytics and related cookies:&nbsp;
            <a href={'https://policies.google.com/privacy?hl=en'} target='_blank' rel='noopener noreferrer'>Google
              Privacy Policy</a>
          </p>
        </Card>
        <Card title={'How can I deny the use of cookies?'}>
          <p>
            Most browsers automatically accept cookies.
            You can delete saved cookies on your device at any time.
            How this is done in more detail, you can find in the instructions
            for using your browser or the your device.
          </p>
          <p>
            You can also disable any or only certain cookies in your browser settings.
            However, all browsers differ from each other, so for more information about
            cookie settings, see the Help section of your browser.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

export default CookiePolicy;
