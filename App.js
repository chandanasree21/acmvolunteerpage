import './App.css';
import { useTable } from 'react-table';
function App() {
  const data=[
    {Name:'srinibha srikanth',Mail:'srinibha.srikanth@gmail.com',Team:'Social media'},
    {Name:'Aashritha Bibireddy',Mail:'aashrithabibireddy@gmail.com',Team:'Social media'},
    {Name:'L.varunesh',Mail:'lvarunesh26@gmail.com',Team:'Social media'},
    {Name:'S.Rishikesh',Mail:'rishikeshsara03@gmail.com',Team:'Social media'},
    {Name:'R.Sai Adithya',Mail:'aditxyaa@gmail.com',Team:'Social media'},
    {Name:'Neela Varun Gopal',Mail:'varunvr2203@gmail.com',Team:'Social media'},
    {Name:'Kambhampati Sai Harsha Vardhan',Mail:'harshaspartax18@gmail.com',Team:'Technical '},
    {Name:'Kodaru Jayanth',Mail:'jayanthroy555@gmail.com',Team:'Technical '},
    {Name:'Suryateja Chittiprolu',Mail:'suryatejach04@gmail.com',Team:'Technical '},
    {Name:'Imadabathuni Suhrutha',Mail:'suhrutha2004@gmail.com',Team:'Technical '},
    {Name:'Shanmukhi',Mail:'shanmukhikurapati2425@gmail.com',Team:'Technical '},
    {Name:'Chandrakethan Sivarsthri',Mail:'s.chandrakethan9@gmail.com',Team:'Technical '},
    {Name:'N Sravya Reddy',Mail:'Sravyareddy.n06@gmail.com',Team:'Events and PR'},
    {Name:'BIllakanti Krishna sai',Mail:'krishnasaibillakanti08@gmail.com',Team:'Events and PR'},
    {Name:'Sri Swapnika Dodla',Mail:'sriswapnikad@gmail.com',Team:'Events and PR'},
    {Name:'N.Siddharth Reddy',Mail:'siddharthreddy210603@gmail.com',Team:'Events and PR'},
    {Name:'Sai Meghana Maradana',Mail:'saimeghanait@gmail.com',Team:'Events and PR'},
    {Name:'Chilla Srivaibhav',Mail:'srivaibhavchilla2923@gmail.com',Team:'Design'},
    {Name:'J.Vinish Reddy',Mail:'vinishreddy1604@gmail.com',Team:'Design'},
    {Name:'Lalitha Bhavana M',Mail:'lalithabhavana9@gmail.com',Team:'Design'},
    {Name:'Praneetha Madala',Mail:'praneetha.Madala@gmail.com',Team:'Design'},
    {Name:'Komma vishal',Mail:'kommavishal@gmail.com',Team:'Design'},
    {Name:'Potluri Srinija',Mail:'srinijapotluri@gmail.com',Team:'Design'},
    

  ]
  return (
    <div className="container">
      <h1><center>VOLUNTEERS</center>
      
      </h1>
      <p><i>
      Volunteers here at ACM are friendly and ready to help any of the member at any instant. Volunteers literally shoulder all the events conducted by ACM and that too with a lot of determination.
      </i>
      
      </p>
      <p><i>
      <b>Technical Team:</b> Tech team deals with all the technical functionalities of ACM. Be it creating barcodes for the id cards and an app for its scanning, which is first ever in VNRVJIET, creating this website or creating simple excel sheets, itâ€™s all taken care by the tech team.
      </i>
      
      </p>
      <p><i> <b>Events and PR Team:</b> Events and PR team deals with all the events ACM conducts. They plan various events which would be helpful to all the students out there and also might enhance in boosting their confidence in technologies. They even handle PR for all the events making sure that the word reaches out to everyone.</i>
       
      </p>
      <p><i>
      <b>Social Media Team:</b> Social Media Team handles all the ACM accounts in various social media platforms. They conduct interesting and simple week contests to magnify the interest in technologies for all the followers. They even give many latest technical developments info. They combine fun and knowledge together to give the best.
      </i>
       
      </p>
      <p>
       <i> <b>Design Team:</b>Design Team adds color to ACM. They deal with designing things for ACM and how to make them look beautiful. They design all the posters, our templates and even our id cards. They fill everyone with their creative and colorful ideas.</i>
      </p>
     <p><i><b>Coding Team:</b>Coding Team imparts knowledge into the coding enthusiasts out there. Its motive is to spread the knowledge about the role of coding in one's life. It conducts upto 4 sessions in a month and coding contests will be held to better understand the willigness and interest of students and how far they are able to implement their logical thinking into the tests.
      </i>

      </p> 
      <p>
        <i>
        Whichever team the volunteers are in at the end of the day they help each other support each other and share their workload. Volunteers of ACM are versatile, whatever is the work they do it with utmost dedication. They always look out to each other and are there for each other.
        </i>
     
      </p>
      
        <table>
          <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Team</th>
          </tr>
          {data.map((val,key)=>{
            return (
              <tr key={key}>
              <td>{val.Name}</td>
              <td>{val.Mail}</td>
              <td>{val.Team}</td>
              </tr>
            )
          })}
        </table>
      
    </div>
  );
}

export default App;