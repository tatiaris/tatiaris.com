import React from 'react';
import { Text, Link, useToasts } from '@geist-ui/react';
import { FileText } from '@geist-ui/react-icons';

/**
 * Homepage component
 */
export const Homepage = (props) => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });

  return (
    <>
      <div className="content-wrapper">
        <div className="profile-intro-container">
          <div className='left-col'>
            <img width={150} src="/img/thumbnail.png" alt="" style={{ borderRadius: '50%' }} />
            <br /><br />
            <Link title='resume' style={{ fontSize: '20px', color: '#333' }} download onClick={(e) => launchToast('Downloading resume...')} href="/docs/Rishabh-Tatia-Resume-01-23.pdf">
              <FileText />
            </Link>
          </div>
          <div>
            <h2>Hi!</h2>
            <div>
              <Text style={{ fontSize: '22px', color: '#111' }}>
                I&apos;m Rishabh, welcome to my corner of the internet :)
              </Text>
              <br />
              <Text style={{ fontSize: '20px', color: '#333' }}>
                Currently at{' '}
                <Link href='https://intuit.com'>Intuit</Link>
                , previously at{' '}
                <Link href='https://tamudatathon.com'>TD</Link>
                {' '}and{' '}
                <Link href='https://acelab.tamu.edu'>Acelab</Link>.
              </Text>
              <Text style={{ fontSize: '20px', color: '#333' }}>
                I built{' '}
                <Link href='https://devpost.com/software/rekkme'>rekkme</Link>
                ,{' '}
                <Link href='https://resuville.com/'>resuville</Link>
                ,{' '}
                <Link href='https://wieat.vercel.app/'>wieat</Link>
                ,{' '}
                <Link href='https://tamudp.vercel.app/'>tamudp</Link>
                {' '}and{' '}
                <Link href='https://github.com/tatiaris?tab=repositories'>more</Link>.
              </Text>
              <Text style={{ fontSize: '20px', color: '#333' }}>
                I enjoy playing badminton, longboarding, rocket league, and <Link href='/rekk'>discovering new music</Link>!
              </Text>
              <br />
              <Text style={{ fontSize: '20px', color: '#333' }}>
                Connect with me on{' '}
                <Link href='https://www.linkedin.com/in/tatiaris/'>linkedin</Link>
                ,{' '}
                <Link href='https://www.instagram.com/tat.ris/'>instagram</Link>
                ,{' '}
                <Link href='https://github.com/tatiaris'>github</Link>
                ,{' '}
                <Link href='https://twitter.com/tatia_ris/'>twitter</Link>
                , or{' '}
                <Link href='mailto:tatiaris2001@gmail.com?Subject=Hello!'>email</Link>.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
