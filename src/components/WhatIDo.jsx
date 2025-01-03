import TecnologyItem from "./TecnologyItem";

function WhatIDo() {
    return (
        <div className="my-10">
            <h1 className="my-6 text-5xl font-pixelify text-cream-leo underline underline-offset-8 decoration-cream-leo decoration-4 ">O que eu faço</h1>

            <p className="my-5 mx-2 text-cream-leo  font-pixelify text-3xl">
                Coloco meu esforço em criar soluções de software eficientes e inovadoras. Com expertise em design e desenvolvimento de aplicações escaláveis, trago uma combinação de criatividade e habilidades técnicas para cada projeto em que trabalho.
            </p>

            <div className="my-16 grid grid-cols-3 gap-12">
                <TecnologyItem title="Web Development" imgNames={['react', 'tailWindCSS']} description={"Desenvolvo aplicações web modernas utilizando React no front-end e Tailwind CSS para interfaces responsivas e elegantes. "}></TecnologyItem>
                <TecnologyItem title="Unity" imgNames={['unity']} description={"Tenho experiência em desenvolvimento de jogos utilizando Unity. Desenvolvi projetos em 2D e 3D, focando em gameplay, física e narrativa interativa."}></TecnologyItem>
                <TecnologyItem title="Backend" imgNames={['java', 'mySQL']} description={"Desenvolvo sistemas back-end utilizando Java, com integração de bancos de dados MySQL. Experiência em criar APIs e arquiteturas escaláveis."}></TecnologyItem>
            </div>

        </div>
    );
}
export default WhatIDo;