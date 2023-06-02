import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const SkillsGrid = () => {
  const skillsData = [
    {
      id: 1,
      category: "Languages & Web Technologies",
      skills: [
        "Python",
        "React.js",
        "Node.js",
        "C",
        "SQL",
        "PLSQL",
        "C++",
        "Java",
        "JavaScript",
        "CSS",
        "HTML",
      ],
    },
    {
      id: 2,
      category: "Databases/Cloud",
      skills: [
        "Oracle",
        "MySQL",
        "MongoDB",
        "EC2",
        "S3",
        "Google Cloud Engine",
      ],
    },
    {
      id: 3,
      category: "Libraries/Frameworks",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Github"],
    },
    {
      id: 4,
      category: "Design principles & SDLC",
      skills: ["ER Diagram", "Scrum", "UML diagram", "Agile"],
    },
    {
      id: 5,
      category: "ERP Solutions",
      skills: [
        "Oracle HRMS 11i/R12 – Core HR",
        "SSHR",
        "OTL",
        "Fast Formulae",
      ],
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        {skillsData.map((skill) => (
          <Grid item key={skill.id} xs={12} sm={6} md={4} sx={{ bgcolor: "#6082B6", p: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {skill.category}
                </Typography>
                  {skill.skills.map((s) => (
                      <Typography variant="body2" color="p">
                        {s}
                      </Typography>
                  ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsGrid;
