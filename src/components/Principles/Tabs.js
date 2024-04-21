import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const ProductsDetailsTabs = () => {
  return (
    <div className="products-details-tabs">
      <Tabs>
        <TabList>
          <Tab>Our Mission</Tab>
          <Tab>Our Vision</Tab>
          <Tab>Our Values</Tab>
        </TabList>

        <TabPanel>
          <div className="products-description">
            <h3>Our Mission</h3>
            <p>To be the partner creating innovative investment solutions of enduring value. At AG Capital we strive to master change, to be at the forefront of how businesses and financial markets are evolving and identify both the financial challenges and opportunities.</p>
            <p>We grow capital and build value with world-class expertise and best practices to generate sustainable superior performance for all stakeholders.</p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="products-description">
            <h3>Our Vision</h3>
            <p>To be the company of choice that high achievers want to work for and that every investor desires to invest with.</p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="products-reviews">
            <h3>Our Values</h3>
            <p>
              At AG Capital, our values run deep, determining how we work, who we hire, how we interact with others and how we define and reward success. We gather exceptional individuals all sharing a similar quality, regardless of their cultural, educational or diverse background. The character trait we all share that gathers us and empowers us and takes us is our dedication to do better.
            </p>
            <p>
              We are both ambitious and passionate. We understand creating exceptional results requires a balanced approach, utilizing our philosophy we explore the way in which the world works. It is only by continuously striving together we may succeed to overcome any obstacle.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ProductsDetailsTabs;  