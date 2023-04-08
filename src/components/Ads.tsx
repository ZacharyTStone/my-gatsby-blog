import * as React from "react"
import styled from "styled-components"
//@ts-ignore
import ad1 from "../images/ad1.jpg"
//@ts-ignore
import ad2 from "../images/ad2.png"

const Ads = () => {
  return (
    <>
      <Divider />
      <AdLink href="https://hataraku.herokuapp.com" target="_blank">
        <AdImage src={ad1} alt="ad1" />
      </AdLink>
      <Divider />
      <AdLink
        href="https://www.my-anime-collection.com/landing"
        target="_blank"
      >
        <AdImage src={ad2} alt="ad" />
      </AdLink>
      <Divider />
    </>
  )
}

const Divider = styled.hr`
  border: 1px solid #ccc;
  width: 100%;
  margin: 0 auto;
`

const AdLink = styled.a`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
`

const AdImage = styled.img`
  width: 100%;
  height: auto;
  border: solid 1px black;
`

export default Ads
