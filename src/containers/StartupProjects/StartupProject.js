import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { upcommingProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display && !upcommingProjects.display) {
    return null;
  }

  const renderProjects = (projects) => {
    return projects.map((project, i) => (
      <div
        key={i}
        className={
          isDark
            ? "dark-mode project-card project-card-dark"
            : "project-card project-card-light"
        }
      >
        {project.image && (
          <div className="project-image">
            <img
              src={project.image}
              alt={project.projectName}
              className="card-image"
            />
          </div>
        )}
        <div className="project-detail">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {project.projectName}
          </h5>
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {project.projectDesc}
          </p>
          {project.footerLink && (
            <div className="project-card-footer">
              {project.footerLink.map((link, i) => (
                <span
                  key={i}
                  className={isDark ? "dark-mode project-tag" : "project-tag"}
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        {bigProjects.display && (
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
            <div className="projects-container">
              {renderProjects(bigProjects.projects)}
            </div>
          </div>
        )}

        {upcommingProjects.display && (
          <div>
            <h1 className="skills-heading">{upcommingProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {upcommingProjects.subtitle}
            </p>
            <div className="projects-container">
              {renderProjects(upcommingProjects.projects)}
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
