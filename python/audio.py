import os;
#os.system('sudo apt-get install audiowaveform')
#os.system('sudo apt-get install mp3info')

# Fonction qui permet de lire la premiere ligne d'un fichier
# Parametre : nom du fichier
def readFirstLine(nomFichier):
    firstLine = ''
    with open(nomFichier) as fichier:
        firstLine = fichier.readline()
    return firstLine

# Fonction qui permet de retourner le PGCD des deux nombres en parametre
def pgcd(a,b):
	rep=0
	if b==0:
		rep=a
	elif b == 1:
			rep=400
	else:
		r=a%b
		rep=pgcd(b,r)
	return rep

os.system('mp3info -p "%S" flowers.mp3 > musique.txt')
textDureeSeconde = readFirstLine('musique.txt')
dureeSeconde = int(textDureeSeconde)
nombreDeBarre = 400
pgcd = pgcd(dureeSeconde,nombreDeBarre)
print "Le PGCD est " + `pgcd`
dureeSeconde = dureeSeconde * pgcd
print "Apres multiplication on obtient  " + `dureeSeconde`
nombreDeBarre = nombreDeBarre
resultat = dureeSeconde / nombreDeBarre
print "On recupere 1 point tout les " + `resultat` + " points"




#note pour laurent :
# la commande linux pour generer un waveform
os.system('audiowaveform -i flowers.mp3 -o flowers.json -b 8 --pixels-per-second ' + `pgcd`)
os.system('rm musique.txt')

#print dureeSeconde
