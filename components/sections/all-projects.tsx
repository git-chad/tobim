import ProjectsTable from "../other/projects-table";
import Container from "../ui/container";
import SubHeading from "../ui/subheading";

const AllProjects = () => {
  return (
    <section className="flex flex-col mt-[159px]">
      <Container className="relative min-h-full grid grid-cols-12 gap-4 tracking-tighter leading-[1.075rem]">
        <SubHeading text="Other projects" className="uppercase text-subheading h-max font-semibold col-span-12 py-8 mb-[42px] tracking-tighter"/>
        <ProjectsTable className="col-span-12"/>
      </Container>
    </section>
  );
};

export default AllProjects;
