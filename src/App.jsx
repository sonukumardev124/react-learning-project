import React from 'react'
import Card from './components/Card.jsx'
function App() {

  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      datePosted: "5 days ago",
      post: "Senior Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      name: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      name: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      name: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      name: "Oracle",
      datePosted: "10 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Bangalore, India",
    },
  ];

  console.log(jobs);
  return (
    <div>
      <div className="parent">
        <Card />
        <Card />
      </div>

    </div>
  )
}
export default App
