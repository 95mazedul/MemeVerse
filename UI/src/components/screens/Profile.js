import React from 'react';

const Profile =()=>{
    return (
        <div style={{maxWidth:"70%",margin:"0px auto"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadious:"80px"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h4>Xian xu</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6> 40 posts</h6>
                        <h6> 40 followers</h6>
                        <h6> 40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>       
    )
}

export default Profile