import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";

import { getRankingList, selectTeam } from '../actions'
import { useNavigate } from "react-router-dom";

const RankingList = props => {
  const [list, setList] = useState([]);
  let navigate = useNavigate();
  const handleClick = (c) => {
    props.selectTeam(c);
    navigate("/about");
  }
  console.log('props........', props)
  useEffect(() => {
    console.log('use effect')
    const jsonData = require('../datasets/epl_ranking.json');
    console.log(jsonData);
    props.getRankingList(jsonData)
    setList(jsonData)
  });
  if (list.length === 0) {
    return <div>로딩중</div>
  } else {
    const renderList = () => {
      return props.list.map((c, i) => {
        return (
          <tr >
            <td data-label="rank">{c.rank}</td>
            <td data-label="teamName">{c.teamName}</td>
            <td data-label="gameCount">{c.gameCount}</td>
            <td data-label="won">{c.won}</td>
            <td data-label="draw">{c.drawn}</td>
            <td data-label="lost">{c.lost}</td>
            <td data-label="detail">
              <button className="ui primary button" onClick={() => { handleClick(c) }}>
                about
              </button>

            </td>

          </tr>
        )
      })
    }
    return <table className="ui celled table">
      <thead>
        <tr>
          <th>순위</th>
          <th>이름</th>
          <th>경기수</th>
          <th>승</th>
          <th>무</th>
          <th>패</th>
          <th>자세히 보기</th>
        </tr>
      </thead>
      <tbody>
        {renderList()}
      </tbody>
    </table>
  }
}


const mapStateToProps = state => {
  console.log('stae....', state)
  return { list: state.list, team: state.selectTeam }
}


export default connect(mapStateToProps, { getRankingList, selectTeam })(RankingList)