import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './features.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

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

export default function Features() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} Feaures`}
            description="Description will go into a meta tag in <head />">
            <main>
                <header className={clsx('hero hero--dark', styles.featuresTitle)}>
                    <h1 className={clsx('hero__title', styles.featuresTitleText)}>What Can Harpocrates Do?</h1>
                </header>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            {FeatureList.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}