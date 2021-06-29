import React, { useState, useEffect } from 'react';
import styles from './WorkPage.module.scss';
import Heading from './Heading';
import Project from './Project';
import projects from './ProjectsArray';

export default function WorkPage(props) {
    const [projectCount, setProjectCount] = useState({ counter: 2 });
    const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, projectCount.counter));

    // Updates the displayedProjects state every time the projectCount changes
    // Needs to be in useEffect because setState is async
    useEffect(() => {
        setDisplayedProjects(projects.slice(0, projectCount.counter));
        // Hide button if end of list reached
        projectCount === projects.length && document.getElementById('moreProjectsBtn').classList.add(styles.hidden);
    }, [projectCount]);


    function handleClick () {
        setProjectCount((prev) => prev.counter + 1);
    }

    return (
        <div id='workPage' className={styles.workPage_container}>
            <div className={styles.workPage_content}>
                <Heading heading="My Work" subHeading="Some recent projects I've been working on" />

                <div className={styles.projects_grid}>
                    {displayedProjects.map((project, i)=>{

                        return (
                            <Project 
                                name={project.name}
                                key={`${project.name}_${i}`}
                                containerId={`container_${i}`}
                                innerId={`inner_${i}`}
                                description={project.description}
                                url={project.url}
                                desktopId={project.desktopId}
                                desktopImg_Large={project.desktopImg_large}
                                desktopImg_Small={project.desktopImg_small}
                                mobileId={project.mobileId}
                                mobileImg_Large={project.mobileImg_large}
                                mobileImg_Small={project.mobileImg_small}
                                color={project.color}
                                mobile={props.mobile}
                            />
                        )
                    })}
                </div>

                <button id="moreProjectsBtn" className={styles.viewMore} onClick={handleClick}>View More</button>
            </div>
        </div>
    )
}
