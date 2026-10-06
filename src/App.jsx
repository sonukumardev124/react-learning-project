import Card from './components/Card.jsx'
function App() {

  const jobs = [
    {
      brandLogo: "https://i.pinimg.com/736x/80/31/ff/8031ff8e9a84f1b4268db95b85b5305b.jpg",
      name: "Google",
      datePosted: "5 days ago",
      post: "Senior Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/97/04/87/97048706c33b708f10c643127e6014f7.jpg",
      name: "Microsoft",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/a7/8c/40/a78c406e4ad95f68bd8b014582ef3ece.jpg",
      name: "Apple",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg",
      name: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://i.pinimg.com/236x/13/85/13/1385132fe1b6ef45750b63a14fda2d37.jpg",
      name: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/a8/f0/bb/a8f0bbc68935b8a8628b5aa349a77069.jpg",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/89/d6/73/89d67396bf82115f7b14483bc7415673.jpg",
      name: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/5f/52/9b/5f529b3d59805725edfee286b9dcd359.jpg",
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
        {jobs.map(function (elem) {
          return <div key={elem.idx}>
            <Card brandLogo={elem.brandLogo} company={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
        })}
      </div>

    </div>
  )
}
export default App
