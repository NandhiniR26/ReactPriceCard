import Card from "./components/Card";
import "./App.css";

const App = () => {
  let cardData = [
    {
      title:  "FREE",
      price: "₹0/month",
      features: [
         
       
        "Single User",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Project",
        "Dedicated Phone Support",
        "free Subdomain" ,
        "Monthly Status Reports",
    ],
    },
    {
      title: "PLUS",
      price: "₹499/month",
      features: [
        "5 Users",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Project",
        "Dedicated Phone Support",
        "free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      title: "PRO",
      price: "₹999/month",
      features: [
        "Unlimited Users",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Project",
        "Dedicated Phone Support",
        "free Subdomain",
        "Monthly Status Reports",
      ],
    },
  ];

  return (
    <div className="container">
      {
        cardData.map((data,index) => (
          <Card 
          key = {index}
          data = {data}
          />
        ))
        
      }
    </div>
  );
};

export default App;
