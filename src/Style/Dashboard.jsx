import styled from 'styled-components';

export const DashboardTitle = styled.h2`
  margin: 2.5rem;
  opacity: .7;
`;

export const StyledPetitionCard = styled.div`
  box-shadow: 0 0 1rem lightgrey;
  margin: 2.5rem;
  padding: 1rem 2rem;
`;

export const PetitionTitles = styled.div`
  display: flex;
`;

export const PetitionTitle = styled.div`
  background-color: #EDF6FD;
  color: #3575AB;
  margin: 1rem .5rem;
  padding: .3rem;
`;

export const PetitionSubtype = styled.p`
  color: #F26526;
  font-weight: bold;
  margin-bottom: .5rem;
`;

export const PetitionResume = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const PetitionFooter = styled.div`
  color: #3575AB;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PetitionDate = styled.div`
`;

export const PetitionLink = styled.p`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPaginate = styled.div`
  .pagination {
    align-items: center;
    color: #3575AB;
    display: flex;
    justify-content: right;
    margin-bottom: 1rem;
    margin-right: 2.5rem;
  }

  .pageClassName {
    border: 1px solid #D9D9D9;
    list-style: none;
    margin: .5rem;
    padding: .3rem .5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .activeLinkClassName {
    color: #F26526;
  }

  .nextClassName {
    border: 1px solid #D9D9D9;
    list-style: none;
    padding: .3rem .5rem;
  }

  .previousClassName {
    border: 1px solid #D9D9D9;
    list-style: none;
    padding: .3rem .5rem;
  }

  .breakClassName {
    list-style: none;
  }
`;

