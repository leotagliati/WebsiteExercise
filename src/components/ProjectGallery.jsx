import ProjectItem from "./ProjectItem";

function ProjectGallery() {
    const projectList = [
        { name: "Sword of Obsessia", desc: "Um jogo sobre a épica jornada do cavaleiro com uma espada amaldiçoada. Atravesse a masmorra e supere seus desafios.≈" , id:"sword-of-obsessia"},
        { name: "Sword of Obsessia", desc: "lorem" , id:"sword-of-obsessia"},
        { name: "Sword of Obsessia", desc: "lorem" , id:"sword-of-obsessia"},
        { name: "Sword of Obsessia", desc: "lorem" , id:"sword-of-obsessia" },
    ];

    const projectsMap = projectList.map((x, index) => (
        <ProjectItem
            key={index} // Adicione uma `key` única para cada item
            projectTitle={x.name}
            description={x.desc}
            projectId={x.id}
        />
    ));

    return (
        <div className="my-3">
            <h1 className="my-6 text-5xl font-pixelify text-cream-leo underline underline-offset-8 decoration-cream-leo decoration-4 ">Projects</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {projectsMap}
            </div>
        </div>
    );
}

export default ProjectGallery;
