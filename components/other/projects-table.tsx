import { GeistMono } from "geist/font/mono";

type Props = {
  className?: string;
};

const ProjectsTable = ({ className }: Props) => {
  const projects = [
    {
      name: "Selfia",
      year: "2023",
      agency: "Freelance",
      img: "",
    },
    {
      name: "Bruto Studio",
      year: "2023",
      agency: "Freelance",
      img: "",
    },
    {
      name: "Don't drink and drive",
      year: "2023",
      agency: "Personal",
      img: "",
    },
    {
      name: "Kestela",
      year: "2023",
      agency: "Set & Forget",
      img: "",
    },
    {
        name: "Home Planet",
        year: "2021",
        agency: "personal",
        img: "",
      },
  ];

  return (
    <div className={`${className}`}>
      <div className="w-full">
        {projects.map((project, idx) => (
          <div key={idx} className={`w-full grid grid-cols-12 py-[26px] text-small uppercase ${GeistMono.className}`}>
            <p className="col-span-4 text-title">{project.name}</p>
            <p className="col-span-1 col-start-6">{project.year}</p>
            <p className="col-span-3 col-start-10 text-end">agency - {project.agency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTable;
