import React, { useEffect, useState } from 'react';
import './CandidateComponent.scss';
import axios from 'axios';

const CandidateComponent = () => {

    const [candidateState, setCandidateState] = useState([]);

    useEffect(() => {
        dataLoad();
    },[])

    const dataLoad = () => {
        axios.get("https://localhost:44329/Candidate").then(response => {
            setCandidateState(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        })
    }

    const onVoteSubmit = (id) => {
        if(!window.confirm("Do you really want to vote this candidate?")){
            return;
        }
        axios.put("https://localhost:44329/Candidate/" + id).then(response => {
            dataLoad();
        }).catch(e => {
            console.log(e);
        })
    }

    const deleteSubmit = (id) => {
        if(!window.confirm("Do you really want to delete this candidate?")){
            return;
        }
        axios.delete("https://localhost:44329/Candidate/" + id).then(response => {
            dataLoad();
        }).catch(e => {
            console.log(e);
        })
    }

    return (<React.Fragment>
        <div className='CandidateComponent'>
            <h1 className='title is-1'>Candidate Page</h1>
            <div className='tableList'>
            {
                candidateState?.map((obj, idx) => {
                    return (
                                <div className='cell'>
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={obj?.COVER_LINKS} alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-left">
                                                    <figure class="image is-48x48">
                                                    <img src={obj?.USER_LINKS} alt="Placeholder image"/>
                                                    </figure>
                                                </div>
                                                <div class="media-content">
                                                    <p class="title is-4">{obj?.FIRSTNAME} {obj?.LASTNAME}</p>
                                                    <p class="subtitle is-6"><b>{obj?.VOTE_COUNT}</b> Vote(s) For {obj?.CANDIDATE_FOR}</p>
                                                </div>
                                            </div>
                
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a href="#">#css</a> <a href="#">#responsive</a>
                                                <br/>
                                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                            </div>
                                            <button className='button is-success' onClick={() => onVoteSubmit(obj.ID)} style={{marginRight : "12px"}}>Vote</button> 
                                            <button className='button is-danger' onClick={() => deleteSubmit(obj.ID)}>Delete</button>
                                        </div>
                                    </div>
                                </div> 
                            )
                })
            }
            </div>
        </div>
    </React.Fragment>)
}

export default CandidateComponent;