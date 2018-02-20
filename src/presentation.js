// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from 'spectacle';

import preloader from './assets/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// import Interactive from './assets/interactive';

// Require CSS
require('normalize.css');

const images = {
  city: require('./assets/city.jpg'),
  kat: require('./assets/kat.png'),
  logo: require('./assets/formidable-logo.svg'),
  markdown: require('./assets/markdown.png'),
  productivity: require('./assets/agent_productivity_1.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Training Coordinater Assessment
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Use the arrow or space key to get started!
          </Text>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Productivity Training
            </Heading>
          </Appear>
          {/* <Appear fid="2">
            <Heading size={2} caps fit textColor="tertiary">
              
            </Heading>
          </Appear> */}
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Common Reasons for Low Productivity
          </Heading>
          <List>
            <ListItem>High Amount of Idle Time</ListItem>
            <ListItem>Not Understanding Performance Stats</ListItem>
            <ListItem>Inadequate Training</ListItem>
            <ListItem>Lack of Feedback on Performance</ListItem>
          </List>
        </Slide>
        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="idle-time"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Image src={images.productivity.replace('/', '')} margin="0px auto 40px" />
          <Heading size={1} caps fit textColor="primary" textFont="primary">
            Leveraging Idle Time
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How to Leverage Idle Time
          </Heading>
          <List>
            <Image src="https://www.lessonly.com/wp-content/uploads/2017/11/Lessonly-November_3WaysToImproveAtTheTerminalTime_BlogImage.jpg" height="100px" widht="100px" />
            <ListItem>Use time to go over performance</ListItem>
            <ListItem>Use time for coaching and mentoring</ListItem>
            <ListItem>Tageted Training during idle time</ListItem>
            <ListItem>Break down larger tasks into       smaller pieces</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Effective performance is preceeded by painstaking preparation</Quote>
            <Cite>Brian Tracy</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Understanding Performance
          </Heading>
          <List>
            <Image src="http://www.cornucopia-web.com/wp-content/uploads/2014/01/performance.jpg" height="100px" widht="100px" />
            <ListItem>Real Time Metrics for Comparison</ListItem>
            <ListItem>Mentoring around specific KPI's</ListItem>
            <ListItem>How do these effect the End User?</ListItem>
            <ListItem>Providing Adequate Training on Key Metrics</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Improving Training
          </Heading>
          <Image src="https://www.ptrace-security.com/wp-content/uploads/2016/10/ttt.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Understanding Performance
          </Heading>
          <List>
              <Image src="https://www.brainyquote.com/photos_tr/en/r/robertkiyosaki/450847/robertkiyosaki1.jpg" height="200px" widht="300px" />
              <ListItem>Targeted Training based on KPI Trends</ListItem>
              <ListItem>Provide Agents with Relevant Data</ListItem>
              <ListItem>Increase Agent Participation</ListItem>
              <ListItem>Allow Agents to be Flexible in response style while conforming to protocols</ListItem>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Continuous improvement is better than delayed perfection.</Quote>
            <Cite>Mark Twain</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why Feedback is Important
          </Heading>
          <List>
              <Image src="https://www.brainyquote.com/photos_tr/en/r/robertkiyosaki/450847/robertkiyosaki1.jpg" height="200px" widht="300px" />
              <ListItem>Specific actions that can be improved</ListItem>
              <ListItem>Praise for what is working well</ListItem>
              <ListItem>Understanding Agent Goals and Weaknesses</ListItem>
              <ListItem>Not only focusing on Results but on Personal Growth as well</ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={3} textColor="secondary">
              Questions?
            </Heading>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Thank You!
          </Heading>
          <Link href="http://www.formidable.com">Patrick Sandoval</Link>
        </Slide>
      </Deck>
    );
  }
}
