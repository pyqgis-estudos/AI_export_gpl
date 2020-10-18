# EXPORT Swatch-GPL

Este plugin para Adobe Illustrator visa criar um método de exportação de paleta de cores para o arquivo de cores do QGIS GLP. Este formato é baseado no arquivo de paleta do GIMP. Com este arquivo é possível carregar um conjunto de cores para dentro do QGIS.

## METADADOS

* Autor: Marcelo Baliú Fiamenghi
* Data de criação: 2020-10-18
* Versão: 0.1

## INSTALAÇÃO

**INSTRALAR SCRIPT**: Mover o arquivo JSX para dentro da pasta: `C:\Program Files\Adobe\Adobe Illustrator <version>\Presets\en_US\Scripts`. Depois reiniciar o Illustrator.

ou

**CERREGAR-E-USAR**: Nesse caso, não é necessário instalar o script, apenas cerrega-lo quando quiser roda-lo. Vá em `File > Scripts > Other Script...` e encontre o arquivo do script. Irá executar o script imediatamente.

## MODO DE USAR

1. Organize a amostra de cores. Todas as cores no painel de Amostra irão ser usadas pelo script. (Somente cores do sistema RGB estão disponíveis para processamento)
2. Execute o script, selecionando-o em `File > Scripts` ou carregando ele.
3. Escolha a paste para salvar o arquivo de exportação.
4. Concluído

Carregando no QGIS

1. Vá em `Janela de Seleção de Cor > Amostra de Cores > Cores do Projeto`
2. Selecione o botão `...` e escolha `Importar Cores`
3. Escolha o arquivo `SWATCH_exported.gpl`
4. Concluído