import React from "react";
import { connect } from 'react-redux'


const about = (props) => {
  console.log('this page is about.....', props)
  return (
    <div>
      <h3>{props.team.teamName} 상세 성적</h3>
      <h4>{props.team.rank}위</h4>
      <h4>{props.team.won}승 {props.team.drawn}무 {props.team.lost}패</h4>
      <h4>{props.team.gainPoint} 승점</h4>

      <h4>{props.team.gainGoal}득점 {props.team.loseGoal}실점</h4>
      <h4>{props.team.teamRankingGroup}</h4>



    </div>
  )
}

const mapStateToProps = state => {
  console.log('this page is about....mapStateToProps.', state)

  return { team: state.selectTeam }
}

export default connect(mapStateToProps)(about)