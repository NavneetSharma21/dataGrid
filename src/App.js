import './App.css';
import Head from './components/Head';
import Users from './components/userInfo';
import Search from './components/search';
import image1 from "./images/image-1.jpeg";
import image2 from "./images/image-2.png";
import image3 from "./images/image-2.webp";
import image4 from "./images/image-1.jpeg";
import image5 from "./images/image-2.png";
import image6 from "./images/image-2.webp";
import image7 from "./images/image-1.jpeg";
import image8 from "./images/image-2.png";
import image9 from "./images/image-2.webp";
import image10 from "./images/image-1.jpeg";
import right from "./images/right.png";
import wrong from "./images/wrong.png";

import { useState,useEffect } from 'react';

function App() {
  const UserInfo = [
    {
      id: 1,
      image: image1,
      name: "Branson Weimann",
      date: "03/15/2022",
      order: "3",
      spent: "5000 INR",
      purchaseDate: "06/12/2022 10:00 AM",
      news: right,
      segment: "Regular",
    },
    {
      id: 2,
      image: image2,
      name: "Anna Bru",
      date: "01/06/2022",
      order: "5",
      spent: "1000 INR",
      purchaseDate: "12/03/2022 12:00 PM",
      news: right,
      segment: "Premium",
    },
    {
      id: 3,
      image: image3,
      name: "Gudrun Tromp",
      date: "11/03/2022",
      order: "5",
      spent: "7000 INR",
      purchaseDate: "12/01/2022 12:00 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 4,
      image: image4,
      name: "Mad Tarp",
      date: "25/08/2022",
      order: "1",
      spent: "1000 INR",
      purchaseDate: "08/04/2022 1:00 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 5,
      image: image5,
      name: "Rash wood",
      date: "07/01/2022",
      order: "4",
      spent: "9000 INR",
      purchaseDate: "12/11/2022 03:00 PM",
      news: right,
      segment: "Premium",
    },
    {
      id: 6,
      image: image6,
      name: "Beth Hill",
      date: "16/03/2022",
      order: "2",
      spent: "2500 INR",
      purchaseDate: "27/07/2022 8:00 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 7,
      image: image7,
      name: "Brandy Herr",
      date: "04/03/2022",
      order: "5",
      spent: "7000 INR",
      purchaseDate: "11/05/2022 10:00 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 8,
      image: image8,
      name: "Jake Armstrong",
      date: "08/11/2022",
      order: "2",
      spent: "5000 INR",
      purchaseDate: "12/01/2022 05:00 PM",
      news: right,
      segment: "Premium",
    },
    {
      id: 9,
      image: image9,
      name: "Jan Glover",
      date: "10/01/2022",
      order: "5",
      spent: "3500 INR",
      purchaseDate: "22/05/2022 11:00 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 10,
      image: image10,
      name: "Karl Tillman",
      date: "10/01/2022",
      order: "6",
      spent: "7500 INR",
      purchaseDate: "07/06/2022 06:00 PM",
      news: right,
      segment: "Premium",
    }]

  const [users, setUsers] = useState(UserInfo);
  const [search, setSearch]= useState("");

  const handleSearch = (query) => {
    setSearch(query);
    const filterUsers = query
      ? UserInfo.filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.date.toLowerCase().includes(query.toLowerCase()) ||
            user.order.toLowerCase().includes(query.toLowerCase()) ||
            user.purchaseDate.toLowerCase().includes(query.toLowerCase()) ||
            user.spent.toLowerCase().includes(query.toLowerCase()) ||
            user.segment.toLowerCase().includes(query.toLowerCase())
        )
      : UserInfo;
    setUsers(filterUsers);
  };

  const [option, setOption] = useState({
    lastSeen: "ascending",
    orders: "ascending",
    totalSpent: "ascending",
    latestPurchase: "ascending",
  });

  const toggleSortOrder = (key) => {
    setOption((prevState) => ({
      ...prevState,
      [key]: prevState[key] === "ascending" ? "descending" : "ascending",
    }));
  };
 
  const sortByLastSeen = () => {
    const newData = [...users].sort((a, b) => {
      if (option.lastSeen === 'ascending') {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });
    setUsers(newData);
    toggleSortOrder("lastSeen")
  };

  const sortByTotalSpent = () => {
    const newData = [...users].sort((a, b) => {
      if (option.totalSpent === "ascending") {
        return a.spent.localeCompare(b.spent);
      } else {
        return b.spent.localeCompare(a.spent);
      }
    });
    setUsers(newData);
    toggleSortOrder("totalSpent");
  };

  const sortByLatestPurchase = () => {
    const newData = [...users].sort((a, b) => {
      if (option.latestPurchase === "ascending") {
        return a.purchaseDate.localeCompare(b.purchaseDate);
      } else {
        return b.purchaseDate.localeCompare(a.purchaseDate);
      }
    });
    setUsers(newData);
    toggleSortOrder("latestPurchase");
  };

  
  const sortByOrders = () => {
    const newData = [...users].sort((a, b) => {
      if (option.orders === "ascending") {
        return a.order.localeCompare(b.order);
      } else {
        return b.order.localeCompare(a.order);
      }
    });
    setUsers(newData);
    toggleSortOrder("orders");
  };

  useEffect(() => {
    setOption({
      lastSeen: "",
      orders: "",
      totalSpent: "",
      latestPurchase: "",
    });
  }, []);

  return (
    <div className="App">
   <Search handleSearch={handleSearch}></Search>  
     <Head
        Picture ="Picture"
        UserInfo ="Users"
        LastSeen="Last Seen"
        Orders="Order"
        TotalSpent="Total Spent"
        LatestPurchase="Latest Purchase"
        News="News"
        Segments="Segments"
        sortByLastSeen ={sortByLastSeen}
        sortByTotalSpent={sortByTotalSpent}
        sortByLatestPurchase={sortByLatestPurchase}
        sortByOrders={sortByOrders} 
        sortOption={option}  
         />

     {users.map((user)=>(
         <Users
         key={user.id}
         image={user.image}
         name ={user.name}
         date={user.date}
         order={user.order}
         spent={user.spent}
         purchaseDate={user.purchaseDate}
         news={user.news}
         segment={user.segment}
       />       
    ))}
 
    </div>

  );
}
export default App;
