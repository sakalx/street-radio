import styled from 'styled-components';
import muiTheme from 'root/theme';

import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import StopIc from '@material-ui/icons/Stop';
import PlayIc from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';

const _playPauseIcon = styled('div')`
  height: 44px !important;
  width: 44px !important;
`;

export const Wrap = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 15px;
  min-width: 150px;
  position: relative;
  transition: all 0.3s linear;
  &:hover {
    ${props => `
      box-shadow: 5px 5px 20px ${props.playing === 'true' 
                                  ? muiTheme.palette.secondary.light
                                  : muiTheme.palette.primary.light
      };
    `};
    };
`;

export const Cover = styled(CardMedia)`
  height: 120px;
  width: 100%;
`;

export const City = styled(Typography)`
  background: ${muiTheme.palette.error.light};
  color: ${muiTheme.palette.common.white} !important;
  padding: 0 5px;
  position: absolute;
  right: 0;
  top: 10px;
`;

export const Title = styled(Typography)`
  padding: 5px;
  ${({active}) => active === 'true' && `
    color: ${muiTheme.palette.primary.dark} !important;  
  `};
`;

export const PlayIcon = _playPauseIcon.withComponent(PlayIc);

export const StopIcon = _playPauseIcon.withComponent(StopIc);

export const Spinner = styled(CircularProgress)`
  bottom: 0;
  position: absolute;
`;