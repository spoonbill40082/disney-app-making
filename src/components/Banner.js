import axios from '../api/axios'
import React from 'react'
import { useEffect, useState } from 'react'
import request from '../api/request'
import './Banner.css'
import styled from'styled-components'

const Banner = () => {

  const [movie, setMovie] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    //현재 상영 중인 영화 정보 가져오기(여러 영화 가져오기)
    const response = await axios.get(request.fetchNowPlaying)
    //여러 영화 중 한 영화의 id 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
        //Math.floor는 부동소수점이 있을 때 가장 큰 값을 반환하는 수식. 
        //Math.random은 0과 1 사이의 소수를 무작위로 반환하는 수식. 
        //Math.random() * 값 0과 특정 값 사이에서 숫자를 무작위로 출력함.
      ].id
    console.log(response)
    console.log(movieId)


    //const movieId를 통해 가져온 특정 영화 하나의 상세 정보 가져오기(비디오 정보까지 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" }
    })

    setMovie(movieDetail)
  }

  //100번째 문자까지만 등장하게 하고, 나머지는 말줄임표로 표시.
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str
  }
  if (isClicked) {
    return (
      <>
      <Container>
        <HomeContainer>
          <Iframe
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
          width='640'
          height='360'
          frameborder='0'
          allow='autoplay; fullscreen'
          ></Iframe>
        </HomeContainer>
      </Container>
      <button onClick={() => setIsClicked(false)}></button>
      </>
    )
  } else {
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
          backgourndPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie?.videos?.results[0]?.key &&
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >PLAY</button>}
          </div>
          <p className='banner__description'>
            {truncate(movie.overview, 100)}
          </p>
        </div>
        <div className='banner--fadeBottom' />
      </header >
    )
  }
}


export default Banner

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Iframe = styled.iframe`
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.65;
border: none;

&::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
}
`