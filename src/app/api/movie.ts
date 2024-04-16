// o nome desse arquivo é definido por padrão
import { NextRequest, NextResponse } from "next/server";
import { getDBConnection } from "../../data-source";
import { Movie } from "../../entity/Movie";
import { NextApiRequest, NextApiResponse } from "next";

console.log('PAGINAAAA')
export default async function GET(req:NextApiRequest, res: NextApiResponse) {
    try {
        console.log('iniciando')
         // Inicializa o AppDataSource
        const conection = await getDBConnection();
        const movieRepository = conection.getRepository(Movie);
        const allMovies = await movieRepository.find();

        // Retorna a resposta com os filmes encontrados
        return res.json(allMovies);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        console.error('Erro:', error);
        return res.json({ auth: false, message: "Falha ao buscar os filmes" });
    }
}


//   export async function POST (){
//     try{
//         const movieRepository = AppDataSource.getRepository(Movie)
//         const {
//             title,
//             gender,
//             classification,
//             subtitle,
//             image,
//             releasedate,
//             director,
//             writer,
//             studio,
//             actors,
//             resume,
//             awards,
//             note,
//           } = req.body
//         const newMovie = movieRepository.create({
//             title,
//             gender,
//             classification,
//             subtitle,
//             image,
//             releasedate,
//             director,
//             writer,
//             studio,
//             actors,
//             resume,
//             awards,
//             note,
//           })
    
//           await movieRepository.save(newMovie)
//           return NextResponse.json({ message: "sucesso", newMovie })
//     }
//     catch{
//         return NextResponse.json({"auth":"false","message":"falha"})

//     }
//   }