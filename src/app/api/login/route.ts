import { NextResponse } from "next/server";
import { getDBConnection } from "../../../data-source";
import { Users } from "../../../entity/User";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req:NextApiRequest, res:NextApiResponse) {
    try {
        console.log('iniciando')
         //Inicializa o AppDataSource
        const conection = await getDBConnection();
        const users = conection.getRepository(Users);
        const email = 'joana@example.com' //verificar como receber esse dado por parametro com next ou pelo front
        const senha= 'senha123'

        const user = await users.manager.findOne(Users,{where:{
            email:email }})
        if (user){
            if (user.password == senha){
                return NextResponse.json({auth: true ,message: "Usuário encontrado"});
            }else{
                return NextResponse.json({auth: false, message:"Senha incorreta"})
            }
        }else{
            return NextResponse.json({ auth: false, message: "Usuário não encontrado"});
        }        
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        console.error('Erro:', error);
        return NextResponse.json({ auth: false, message: "Falha ao buscar os usuarios" })
    }
}

