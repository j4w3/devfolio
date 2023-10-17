import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionActivities = ({ activities }) => {
  if (!activities.length) return null;

  return (
    <Section title="Stuff I'm Doing">
      {activities.map((activity) => (
        <SummaryItem
          key={activity.name}
          name={activity.name}
          description={activity.description}
          link={activity.link}
        />
      ))}
    </Section>
  );
};

export default SectionActivities;
