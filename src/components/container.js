import React from 'react'
import PropTypes from "prop-types"
import styled from '@emotion/styled'

const Flex = styled('div')`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin-top:100px;
margin-left:20px;
margin-right:20px;
max-width:1500px;
.row {
  background-color:lightblue;
  &[data-flex]{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    border:2px solid purple;
    min-height:500px;
  }
  &[data-flex='1']{
    display:flex;
    flex-wrap:wrap;
    >div {
      flex:1 1 100%;
    }
  
  }
  &[data-flex='2']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      ${'' /* flex: 1 1 calc(50% - 10px); */}
      flex: 1 1 50%; 
      ${'' /* &:nth-of-type(1){
        margin-right:5px;
      }
      &:nth-of-type(2){
        margin-left:5px;
      } */}


    }
  }
  &[data-flex='3']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      flex: 1 1 33%;
    }
  }
  &[data-flex='4']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      flex: 1 1 25%;
    }
  }
  &[data-align='center']{
    justify-content:center;
  }
  &[data-align-child='center']{
      > div {
        justify-content:center;
      }
    }
    &[data-align-child='end']{
      > div {
        justify-content:flex-end;
      }
    }
}
` 


const Container = ({ children, name }) => {

  return (
    <Flex className={`container ${name ? name : ""}`}>
      {children}
    </Flex>
  )
}

const FullWidth = ({ children, name, flex, align, child }) => {

  return (
    <div className={`row fullwidth  ${name ? name : ""}`} data-flex={`${flex ? flex : ""}`} data-align={`${align ? align : ""}`} data-align-child={`${child ? child : ""}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Container, FullWidth}
