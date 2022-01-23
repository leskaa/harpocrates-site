import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Validate Links',
    Svg: require('../../static/img/undraw_startled.svg').default,
    description: (
      <>
        Harpocrates monitors links sent on your discord server. The bot references these
        links with Google's Safe Browsing API to inform users of unsafe clicks.
      </>
    ),
  },
  {
    title: 'Prevent Personal Info Leaks',
    Svg: require('../../static/img/undraw_personal_data.svg').default,
    description: (
      <>
        Harpocrates screens new posts from your users. A variety of natural language
        processing strategies are utilized to prevent users from leaking personal info.
      </>
    ),
  },
  {
    title: 'Alert Users About Scams',
    Svg: require('../../static/img/undraw_alert.svg').default,
    description: (
      <>
        Harpocrates alerts users of new scams on discord. The bot monitors FTC
        Consumer Information Scam Alerts and can notify your users.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={styles.buttons} style={{ margin: 'auto' }}>
            <Link
              className="button button--primary button--lg"
              to="/features">
              More Features ...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
