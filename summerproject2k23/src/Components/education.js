import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const EducationAndProjects = () => {
  // Sample data for education and projects
  const educationData = [
    {
      id: 1,
      institution: "San Jose State University",
      degree: "Masters in Computer Software Engineering",
      year: "2022-present",
      courses: "Data Mining, Enterprise Software Platforms, Cloud Technologies, Software Systems Engg, Software Testing",
    },
    {
      id: 2,
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      degree: "Bachelors of Technology in Information Technology",
      year: "2015-2019",
      courses: ": Data Structures, Design and analysis of algorithms, OS, Java Programming, DBMS, Web Technologies",
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={2}>
        {educationData.map((education) => (
          <Grid xs={12} sm={6} md={6} sx={{ bgcolor: "#6082B6", p: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  <b>{education.institution}</b>
                </Typography>
                <Typography variant="body1" component="p">
                  {education.degree}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {education.year}
                </Typography>
                <Typography variant="body2" color="p">
                  <b>Courses: </b>{education.courses}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid xs={12} sm={6} md={6} sx={{ bgcolor: "#6082B6", p: 3 }}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EducationAndProjects;
