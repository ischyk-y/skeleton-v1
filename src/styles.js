import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    font-family: 'Inter', sans-serif !important;
    font-size: .96rem !important;
    line-height: 1.5 !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${(props => props.theme.background)} !important;
    color: ${props => props.theme.color} !important;
  }
  
  .navbar {
    background: ${(props => props.theme.backgroundNavbar)} !important;
  }
  
  a {
    color: ${(props => props.theme.linkColor)} !important; 
  }
  
  .modal {
    --bs-modal-bg: ${(props => props.theme.backgroundModal)} !important;
  }

  .c-aggregation {
    box-shadow: 0 0 2.5rem ${(props => props.theme.shadowAggregation)} !important;
  }

  .c-aggregation__row {
    color: ${(props => props.theme.colorAggregationRow)} !important;
    background: ${(props => props.theme.backgroundAggregationRow)} !important;
    min-width: 10rem;
    border-right: 1px solid ${(props => props.theme.borderColor)} !important;
  }

  .c-aggregation__row:nth-last-child(1) {
    border-right: 0;
  }

  .c-aggregation__right-row {
    border-left: 1px solid ${(props => props.theme.borderColor)};
  }

  .modal-title {
    font-family: 'Proxima Nova Rg';
    font-weight: bold;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      width: 450px !important;
    }

    .modal-sm {
      width: 350px !important;
    }
  }

  .modal-backdrop {
    background-color: rgba(2, 23, 35, 0.63) !important;
  }
  
  .c-data-table {
    max-height: 500px
  }

  .c-data-table__left-col {

  }

  .c-data-table__left-body {

  }

  .c-data-table__center-col {
    position: relative;
  }

  .c-data-table__center-body {
    overflow-y: scroll;
    overflow-x: scroll;
  }

  .c-data-table__scroller {
    position: absolute;
    width: 60px;
    height: calc(100% - 4px);
    z-index: 1;
    top: 0;
    pointer-events: none;
  }

  .c-data-table__scroller--left {
    left: 0;
    border-left: 1px solid ${(props => props.theme.borderColor)} !important;;
    background-image: linear-gradient(270deg, rgba(245, 246, 247, 0), ${(props => props.theme.shadowTableRow)})
  }

  .c-data-table__scroller--right {
    right: 0;
    border-right: 1px solid ${(props => props.theme.borderColor)};
    background-image: linear-gradient(90deg, rgba(245, 246, 247, 0), ${(props => props.theme.shadowTableRow)})
  }

  .c-data-table__cell {
    display: flex;
    align-items: center;
    background: ${(props => props.theme.backgroundTableCell)};
    height: 50px;
    margin-bottom: 4px;
    border: 1px solid ${(props => props.theme.borderColor)};
    cursor: default !important;
  }
  
  .c-data-table__cell:hover {
    opacity: .9 !important;
  }

  .c-data-table__header-container {
    height: 50px;
    margin-bottom: 5px;
  }

  .c-data-table__heading {
    display: flex;
    align-items: center;
  }

  .c-img-wrap {
    width: 32px;
    height: 32px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-img-wrap img {
    max-height: 32px;
  }
  
  ._i5--j {
    min-width: 78px;
    background: ${props => props.theme.background};
    outline: 0;
    border: 0 !important;
    border-radius: .35rem;
    padding-left: 8px !important;
    color: ${props => props.theme.color};
  }
  
  .c-data-table__filter {
    border: 1px solid ${props => props.theme.borderColor} !important;
    height: 28px !important;
  }
  
  .c-data__growth {
    background: ${props => props.theme.backgroundTableCell};
  }
`;
