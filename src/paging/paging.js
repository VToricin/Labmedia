const PAGE_SIZE = 3;
const mainStyle = {
    display: 'inline-flex'
}
const pagePointStyle = {
    marginRight: '8px' 
}
function paging({props}) {    
    const length = props.items.length;
    if (!props.items || length <= 1) {
        return (<div></div>)
    }

    const all = Math.ceil(length / PAGE_SIZE);
    if (all <= 5 ) {
        const arr = [];
        for (let i = 0; i < all; i++) {
            arr.push(i);
        }
        return (<div style={mainStyle}>
            {arr.map((item, index) => <div
             onClick={props.changeCurrentPage.bind(null, item)}
              style={pagePointStyle} key={'paging_key' + index}>
                  {index + 1}
                </div>)}
        </div>)
    }

    if (props.currentPage <= 2) {
        return (<div style={mainStyle}>
            <div onClick={props.changeCurrentPage.bind(null, 1)}  style={pagePointStyle}>1</div>
            <div onClick={props.changeCurrentPage.bind(null, 2)}  style={pagePointStyle}>2</div>
            <div onClick={props.changeCurrentPage.bind(null, 3)}  style={pagePointStyle}>3</div>
            <div style={pagePointStyle}>...</div>
            <div onClick={props.changeCurrentPage.bind(null, all)} >{all}</div>
        </div>)
    } 
    if (props.currentPage > all - 3) {
        return (<div style={mainStyle}>
            <div style={pagePointStyle}>...</div>
            <div onClick={props.changeCurrentPage.bind(null, props.currentPage - 1)}  style={pagePointStyle}>{props.currentPage - 1}</div>
            <div onClick={props.changeCurrentPage.bind(null, props.currentPage)}  style={pagePointStyle}>{props.currentPage}</div>
            <div onClick={props.changeCurrentPage.bind(null, props.currentPage + 1)}  style={pagePointStyle}>{props.currentPage + 1}</div>
        </div>)
    }

    return (<div style={mainStyle}>
        <div style={pagePointStyle}>...</div>
        <div onClick={props.changeCurrentPage.bind(null, props.currentPage - 1)}  style={pagePointStyle}>{props.currentPage - 1}</div>
        <div onClick={props.changeCurrentPage.bind(null, props.currentPage)}  style={pagePointStyle}>{props.currentPage}</div>
        <div onClick={props.changeCurrentPage.bind(null, props.currentPage + 1)}  style={pagePointStyle}>{props.currentPage + 1}</div>
        <div style={pagePointStyle}>...</div>
        <div onClick={props.changeCurrentPage.bind(null, all)} >{all}</div>
    </div>)
}

export default paging;