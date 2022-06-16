import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";

import { getRankingList } from '../actions'

const RankingList = props => {
  const [list, setList] = useState([]);

  console.log('props.......', props)
  useEffect(() => {
    console.log('use effect')
    const jsonData = require('../datasets/epl_ranking.json');
    console.log(jsonData);
    setTimeout(() => {
      props.getRankingList(jsonData)
      setList(jsonData)
    }, 1000);
  }, [list]);
  if (list.length === 0) {
    return <div>로딩중</div>
  } else {
    const renderList = () => {
      return props.list.map(c => {
        return (
          <div className="item" key={c.rank}>
            <div className="right floated content">
            </div>

            <div className="content">{c.rank}{c.teamName}</div>
          </div>
        )
      })
    }
    return <div className="ui divided list">{renderList()}</div>
  }
}


const mapStateToProps = state => {
  console.log(state)
  return { list: state.list }
}


export default connect(mapStateToProps, { getRankingList })(RankingList)