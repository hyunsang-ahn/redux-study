import React from "react";
import RankingList from './RankingList'
import TeamDetail from './TeamDetail'

const App = () => {

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <RankingList />
        </div>
        {/* <div className="column eight wide">
          <TeamDetail />
        </div> */}
      </div>
    </div>
  )
}

export default App