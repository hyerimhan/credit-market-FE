import React from 'react';
import { IStore } from '@/interfaces/store';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Lottie from 'lottie-react';
import LoadingLottie from '@/lotties/loading-animation-blue.json';

const Loading = () => {
  const loading = useSelector((state: IStore) => state.loading);
  if (loading === false) return null;

  return (
    <StyledLoading>
      <Lottie animationData={LoadingLottie} loop={true} />
    </StyledLoading>
  );
};

export default Loading;

const StyledLoading = styled.div`
  border: none;
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.5px);

  div {
    width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
