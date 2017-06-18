from django.db import models

class Prototipo(models.Model):
	matricula = models.CharField(max_length=100, null=True, blank=True)
	nome = models.CharField(max_length=100, null=True, blank=True)
	funcao = models.CharField(max_length=100, null=True, blank=True)
	horario_entrada_saida = models.CharField(max_length=100, null=True, blank=True)
	intervalo_refeicao = models.CharField(max_length=100, null=True, blank=True)
	cnpj = models.CharField(max_length=100, null=True, blank=True)
	mes = models.CharField(max_length=100, null=True, blank=True)
	pis = models.CharField(max_length=100, null=True, blank=True)
	admissao = models.CharField(max_length=100, null=True, blank=True)
	centro_custo = models.CharField(max_length=100, null=True, blank=True)
	escala_trabalho = models.CharField(max_length=100, null=True, blank=True)
	file = models.FileField(null=True, blank=True) 
	
	class Meta:
		verbose_name_plural = 'Prototipos'

	def __str__(self):
		return "{}".format(self.nome)




    