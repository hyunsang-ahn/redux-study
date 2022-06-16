import React from "react";
import RankingList from './RankingList'

const App = () => {

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <RankingList />
        </div>
        <div className="column eight wide">
          {/* <SongDetail /> */}
        </div>
      </div>
    </div>
  )
}

export default App