import React from 'react'
import { connect } from 'react-redux'

const teamDetail = (props) => {
  console.log('teamDetail is...', props.team)
  return (
    <>
      { !props.team ? (
        // 선택한 곡이 없을 때 화면
        <div>Please select a team!</div>
      ) : (
        // 선택한 곡이 있을 때 화면
        <div>
          <h3>{props.team.teamName} 상세 성적</h3>
          <h4>{props.team.rank}위</h4>
          <h4>{props.team.won}승 {props.team.drawn}무 {props.team.lost}패</h4>
          <h4>{props.team.gainPoint} 승점</h4>

          <h4>{props.team.gainGoal}득점 {props.team.loseGoal}실점</h4>
          <h4>{props.team.teamRankingGroup}</h4>



        </div>
      )}
    </>
  )
}


const mapStateToProps = state => {
  return { team: state.selectTeam }
}


export default connect(mapStateToProps)(teamDetail)