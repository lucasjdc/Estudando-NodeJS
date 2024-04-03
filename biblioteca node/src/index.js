import fs from 'fs';
import chalk from 'chalk';

// Função para extrair links de um texto
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados;
}

// Função para tratar erros
function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// Função assíncrona para ler o arquivo e extrair links
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);        
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro)
    }    
}

export default pegaArquivo;
