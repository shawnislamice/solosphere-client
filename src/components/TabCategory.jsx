import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/alljobs`,
        { withCredentials: true }
      );
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div className="container  mx-auto max-w-screen-xl my-5 md:my-10">
      <div>
        <h1 className="text-center font-bold text-4xl">
          Browse Job By Categories
        </h1>
        <p className="max-w-2xl mx-auto text-center opacity-90 md:my-5">
          Efficiently restore diverse action items for cost effective
          web-readiness. Quickly syndicate one-to-one synergy via error-free
          total linkage. Collaboratively reconceptualize quality strategic
          theme.
        </p>
      </div>
      <Tabs>
        <div className="flex justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 place-items-center mt-3 xl:grid-cols-4 xl:gap-6 xl:mt-8">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 place-items-center mt-3 xl:grid-cols-4 xl:gap-6 xl:mt-8">
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 place-items-center mt-3 xl:grid-cols-4 xl:gap-6 xl:mt-8">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
