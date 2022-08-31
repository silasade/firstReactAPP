import React from "react";
export default function Card(props){
    return(
        <div className="card">
            <div>
                <img src={props.imageURL} alt=""/>
            </div>
            <div >
                <div className="map">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(245, 90, 90, 1)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
                    <span>
                        {props.Location}
                    </span>
                    <a href={props.Google_Maps} target="_blank">View on Google Maps</a>
                </div>
                <h1>
                    {props.Title}
                </h1>
                <h5>{props.startDate}&nbsp; - &nbsp;{props.endDate}</h5>
                <h5 className="description">
                    {props.description}
                </h5>
            </div>
        </div>
    )
}