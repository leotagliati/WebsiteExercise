function About() {
    return (
        <>
            <div className=" mt-96 my-10 grid gap-4 grid-rows-2 ">
                <div className="flex justify-center">

                    {/* Container fixo para borda */}
                    <div className="relative flex items-center justify-center rounded-full h-52 w-52"
                        style={{
                            border: '2px solid #00FFFF', // Cor ciano
                        }}
                    >
                        {/* Imagem com tamanho controlado */}
                        <img
                            src={"img/profileImage.png"}
                            alt=""
                            className="rounded-full h-52 w-52 object-cover"
                        />
                    </div>
                </div>



                <div className="p-3">
                    <h6 className="mt-6 mr-3 text-center text-cream-leo  h-14 text-5xl font-jetbrains">Olá, eu sou Léo!</h6>
                    <p className="my-5 mr-3 text-center text-cream-leo  font-jetbrains text-3xl">
                        Sou um engenheiro de software no Brasil, especializado em Desenvolvimento de Jogos Digitais e Sistemas Backend.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;