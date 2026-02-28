import styled from "styled-components";

export const ToggleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleTrack = styled.div`
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.secondtext};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 30px;
  position: relative;
`;

export const ToggleKnob = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.highlight};
  position: relative;
  z-index: 2;
`;

export const TrackIconLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;

export const TrackIconRight = styled.div`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;