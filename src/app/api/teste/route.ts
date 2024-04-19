import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { getDBConnection } from '../../../data-source'
import { Users } from '../../../entity/User'
 
type ResponseData = {
  message: string
}
 
export function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  NextResponse.json({ message: 'Hello from Next.js!' })
}

export async function POST(req:Request) {
    try {
        console.log('iniciando')
         //Inicializa o AppDataSource
        const conection = await getDBConnection();
        const users = conection.getRepository(Users);
        const email = 'joaoa@email.com'
        const password = 'senha123'
        console.log(email,password)
        const user = await users.manager.findOne(Users,{
            where:{
            email:email 
        }})
        if (user){
            if (user.password == password){
                return NextResponse.json({auth: true ,message: "Usuário encontrado"}); // quando o dado é estático não funciona
            }
            else if(user.email == email && user.password == password) {
                return NextResponse.json({auth: false, message:"password incorreta"})
            }else{
                return NextResponse.json({auth: false, message:"falha na solicitação"})
            }
        }else{
            return NextResponse.json({ auth: false, message: "Usuário não encontrado"});
        }        
    } catch (error) {
        // Em caso de erro, retorna uma NextResponseposta de erro
        console.error('Erro:', error);
        return NextResponse.json({ auth: false, message: "Falha ao buscar os usuarios" })
    }
}
