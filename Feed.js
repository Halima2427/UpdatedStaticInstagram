import React from 'react';
const Feed=()=>
{
return(
    <div><br></br><center><h1 style={{color:"white"}}>Welcome to Instagram Profile</h1></center>
    <div className="Container-fluid">
        <div className="row">
            <div className="col-12">
                <nav class="navbar navbar-primary bg-black">
                    <a class="navbar-brand" href="#">
                        <img src="https://img.icons8.com/nolan/2x/instagram-new.png" width="60" height="60" class="d-inline-block align-center" alt="" />InstagramProfile</a>
                        <img src="https://img.icons8.com/nolan/2x/menu-2.png" width="60" height="60" class="d-inline-block align-top" alt="" float="right"></img>
                </nav>
            </div>
        </div><br></br><br></br>
        <div className="row">
            <div className="col-3">
                <div><img src="https://img.icons8.com/officel/2x/circled-user-female-skin-type-5.png" position="absolute" width="300px" alt="Profile pic"></img></div>
            </div>
            <div className="col-9">
                <div className="row" style={{color:"pink"}} width="150px"><br></br><br></br>
                    <div className="col-4" position="absolute" align="center" ><h2>Posts</h2></div>
                    <div className="col-4" position="absolute" align="center"><h2 >Followers</h2></div>
                    <div className="col-4" position="absolute" align="center"><h2 >Followings</h2></div>
                    <div className="col-4" align="center"><h2>1234</h2></div>
                    <div className="col-4" align="center"><h2>6546</h2></div>
                    <div className="col-4" align="center"><h2>2287</h2></div>
                </div><br></br><br></br><br></br>
                
                    <div><button className="col-12" class="btn btn-outline-primary btn-lg btn-block">EDIT YOUR PROFILE</button></div>  </div>            
        </div>
        <div className="row" >
            <div className="col-4">
                <h2><ul style={{['list-style-type']: "none",color:"#3CBDBD"}}>
                    <li>Halima Syed</li>
                    <li>halimafarz@gmail.com</li>
                    <li>Pondicherry</li>
                    <li>Integra</li>
                </ul></h2>
            </div>
            <div className="col-8"><h2 ><span style={{color:"pink"}} align="center">Quotes!..</span>Dont Change Your Originality For The Sake Of Others Because No One Can Do Your Role Better Than You</h2></div>
            
        </div>
        <div className="row" style={{background:" #0A0A0A"}} align="center" >
            <div className="col-3">
                <img src="https://img.icons8.com/material-rounded/2x/hashtag-activity-feed-2.png" alt="icon"></img>
            </div>
            <div className="col-3">
            <img src="https://img.icons8.com/ios-glyphs/2x/camera.png" alt="icon1"></img>
            </div>
            <div className="col-3"> <img src="https://img.icons8.com/ios-glyphs/2x/gallery.png" alt="icon2"></img></div>
            <div className="col-3"> <img src="https://img.icons8.com/material/2x/point-objects.png" alt="icon3"></img></div>
        </div><br></br>
        <div className="row" align ="center" >
            
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRatRo7AYwk1Kv30HxihkE_QXDucGkfbDc8jg1g_bHzKX-3M69lQ&s" alt="img" width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGIJpy-2pYWHdN6aBZ0ykBTr9elwq2CpsATOQ6-UGeCKlYDjh&s" alt="img1"width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWEbReRYJ0Jp7SkwvM5FYE1idbIgO2Rlp7B53MVD_gdIUyWmM&s" alt="img2"width="100%" height="100%"></img></div>
           
           
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxOfJH4kqQ9e-PL1UTUaRluHjWqG6J8Of5itGHXhu49oqfz2sQw&s" alt="img3"width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLYDx3GGlrUHaAlMeli1o1LE-DT3tbDa7Xe93Ze3FTAMljolx&s" alt="img4"width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyJ669VRO_V9Uyo4Se3r7dRj9UsOHjGH4Ovc5_wUsGWD1qhfl&s" alt="img5"width="100%" height="100%"></img></div>
            
               
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaHrCpSwuof0R_Gbm2twx4VIg7eVYI4Q_KVyclGbqazInoZbm&s" alt="img6"width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDU0PaZHWR4CQ31vv_TzwUjMSQzOouUIs5t8sONFOXbSsYYj05Q&s" alt="img7"width="100%" height="100%"></img></div>
                <div class="col-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2DWS361SYOIF4FgKk02pgdwEuU78f2KNm_CnnMOnbA_v2pFAbw&s" alt="img8"width="100%" height="100%"></img></div>
           
        </div>
    </div>
    </div>
)
}
export default Feed;
