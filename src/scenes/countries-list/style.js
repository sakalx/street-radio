import styled from 'styled-components';

import SearchButton from 'root/components/search-button';

export const Wrap = styled('section')`
  position: relative;
`;

export const List = styled('div')`
  min-height: 48px;
  overflow-x: hidden;
`;

export const SearchSection = styled('div')`
   left: 0;
   overflow-x: hidden;
   position: absolute;
   top: 0;
   width: 100%;
`;

export const SearchBtn = styled(SearchButton)`
  margin: 15px;
  position: absolute;
  right: 0;
`;