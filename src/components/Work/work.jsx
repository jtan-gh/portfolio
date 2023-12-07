import React from 'react';
import { Heading } from 'components/Heading/Heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './work.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHourglass as solidHourglass, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

let workExperiences = [
  {
    "id": 1,
    "title": "Full Stack Developer",
    "company": "Geocomply",
    "date" : "Jan 2023 - Aug 2023",
    "description": "Significantly contributed throughout the entire development lifecycle of a web application, playing a key role in its creation. The application was purposefully designed to empower companies in monitoring and effectively managing their userbase.",
  },
  {
    "id": 2,
    "title": "Agile Developer Internship",
    "company": "SAP",
    "date" : "Jan 2019 - Sept 2019",
    "description": "Actively contributed to the development of the SAP HANA Cloud tool, a widely recognized solution in the industry. Played a key role in enhancing the tool's capabilities for cutting-edge cloud computing analysis.",
  },
]

const WorkExperienceTimeline = () => {
  return (
    <section className='work'>
      <Heading text="Work Experience" style={{ padding: "0 3rem 3rem" }} />
      <VerticalTimeline>
        {workExperiences.map((workExperience) =>         
          <VerticalTimelineElement
            // data-aos="zoom-in-up"
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--primary-color)' }}
            date={workExperience.date}
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{workExperience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{workExperience.company}</h4>
            <p>
              {workExperience.description}
            </p>
          </VerticalTimelineElement>
        )}
        <VerticalTimelineElement
          iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={solidHourglass} />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperienceTimeline;
