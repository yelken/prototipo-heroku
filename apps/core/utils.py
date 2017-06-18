import PyPDF2

def readPDF(pdfFile):
	pdfReader = PyPDF2.PdfFileReader(pdfFile)

	list_pdf = []
	dic_pdf = {}
	for page in range(pdfReader.numPages):
		pageObj = pdfReader.getPage(1)  
		pageObj = pageObj.extractText()        
		
		cnpj = pageObj.find('CNPJ')
		matricula = pageObj.find('Matricula')
		mes = pageObj.find('Mês')
		nome = pageObj.find('Nome')
		pis = pageObj.find('PIS')
		funcao = pageObj.find('Função')
		admissao = pageObj.find('Admissão')
		horario_entrada_saida = pageObj.find('Horario de Entrada/Saída')
		intervalo_refeicao = pageObj.find('Intervalo de Refeição')
		centro_custo = pageObj.find('Centro de Custo')
		escala_trabalho = pageObj.find('Escala de Trabalho')
		horario = pageObj.find('HorárioRefeiçãoHoras')

		dic_pdf['matricula'] = pageObj[matricula+10:mes].strip()
		dic_pdf['nome'] = pageObj[nome+6:pis].strip()
		dic_pdf['funcao'] = pageObj[funcao+7:admissao].strip()
		dic_pdf['horario_entrada_saida'] = pageObj[horario_entrada_saida+25:centro_custo].strip()
		dic_pdf['intervalo_refeicao'] = pageObj[intervalo_refeicao+22:escala_trabalho].strip()
		dic_pdf['cnpj'] = pageObj[cnpj+5:matricula].strip()
		dic_pdf['mes'] = pageObj[mes+4:nome].strip()
		dic_pdf['pis'] = pageObj[pis+4:funcao].strip()
		dic_pdf['admissao'] = pageObj[admissao+9:horario_entrada_saida].strip()
		dic_pdf['centro_custo'] = pageObj[centro_custo+17:intervalo_refeicao].strip()
		dic_pdf['escala_trabalho'] = pageObj[escala_trabalho+21:horario].strip()

		list_pdf.append(dic_pdf)
	return list_pdf