(() => {

    // Función para obtener información de una película por ID
    function getMovieById(id: string): void {
        console.log({ id });
    }

    // Función para obtener los actores de una película por ID
    function getMovieCastById(id: string): void {
        console.log({ id });
    }

    // Función para obtener la biografía de un actor por ID
    function getActorBioById(id: string): void {
        console.log({ id });
    }

    // Interfaz para crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    // Crear una película
    function createMovie({
        title,
        description,
        rating,
        cast,
    }: Movie): void {
        console.log({ title, description, rating, cast });
    }

    // Crear un actor
    function createActor(
        fullName: string,
        birthdate: Date
    ): boolean {

        // Tarea asíncrona para verificar nombre
        if (fullName === 'fernando') {
            return false;
        }

        console.log('Crear actor');
        return true;
    }

    const getPayAmount = ({
        isDead = false,
        isSeparated = true,
        isRetired = false,
    }): number => {

        if (isDead) return 1500;
        if (isSeparated) return 2500;
        if (isRetired) return 3000;

        return 4000;
    };

})();
