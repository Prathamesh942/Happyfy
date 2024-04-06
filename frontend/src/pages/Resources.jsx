/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const resources = [
  {
    title: 'Resources for Depression',
    content: [
      {
        url: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356997',
        text: 'Mayo Clinic: Symptoms and causes of Depression',
      },
      // ... other resources
    ],
  },
  {
    title: 'Resources for Stress',
    content: [
      {
        url: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20044445',
        text: 'Mayo Clinic: Stress Symptoms and Causes',
      },
      // ... other resources
    ],
  },
  {
    title: 'Resources for Anxiety',
    content: [
      {
        url: 'https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961',
        text: 'Mayo Clinic: Anxiety Symptoms and Causes',
      },
      // ... other resources
    ],
  },
];

const ResourcesPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);

  const handleNextSection = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % resources.length);
    setCurrentResourceIndex(0); // Reset resource index when switching sections
  };

  const handlePrevSection = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex - 1 + resources.length) % resources.length);
    setCurrentResourceIndex(0); // Reset resource index when switching sections
  };

  const handleNextResource = () => {
    setCurrentResourceIndex((prevIndex) => (prevIndex + 1) % resources[currentSectionIndex].content.length);
  };

  const handlePrevResource = () => {
    setCurrentResourceIndex((prevIndex) => (prevIndex - 1 + resources[currentSectionIndex].content.length) % resources[currentSectionIndex].content.length);
  };

  return (
    <div className="resources-page">
      <h1>Mental Health Resources</h1>

      <div className="resources-carousel">
        {resources.map((resourceSection, sectionIndex) => (
          <div
            key={resourceSection.title}
            className={`resource-section ${sectionIndex === currentSectionIndex ? 'active' : ''}`}
          >
            <h2>{resourceSection.title}</h2>

            <div className="resource-slider">
              {/* Individual resource carousels */}
              {resourceSection.content.map((resource, resourceIndex) => (
                <div
                  key={resource.text}
                  className={`resource-item ${resourceIndex === currentResourceIndex ? 'active' : ''}`}
                >
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.text}
                  </a>
                </div>
              ))}

              <button className="carousel-button prev" onClick={handlePrevResource} disabled={currentResourceIndex === 0}>
                Previous
              </button>
              <button className="carousel-button next" onClick={handleNextResource} disabled={currentResourceIndex === resources[sectionIndex].content.length - 1}>
                Next
              </button>
            </div>
          </div>
        ))}

        <button className="carousel-button prev" onClick={handlePrevSection} disabled={currentSectionIndex === 0}>
          Previous Section
        </button>
        <button className="carousel-button next" onClick={handleNextSection} disabled={currentSectionIndex === resources.length - 1}>
          Next Section
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
