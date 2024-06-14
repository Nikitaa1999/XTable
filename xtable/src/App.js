import {useState} from 'react'

function App() {
  const data=
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  
  

  const [sortedData,setSortedData]=useState(data);


  const sortByDate=()=>{
    const temp= [...sortedData].sort(function(a,b){
      return  new Date(b.date)- new Date (a.date);
      })
      console.log(temp);
      setSortedData(temp);
  }

  const sortByViews=()=>{
  const temp=  [...sortedData].sort(function(a,b){
      return b.views-a.views;
    })
    console.log(temp);
    setSortedData(temp);
  }
  
  

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        </thead>
        <tbody>
        {sortedData.map((val,idx)=>(
          <tr key={idx}>
            <td>{val.date}</td>
            <td>{val.views}</td>
            <td>{val.article}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
