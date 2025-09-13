var preguntas =
[
  {
    "idPregunta": 1,
    "txtPregunta": "Si mi prima es hija de la hermana de mi madre, ¿qué relación tiene conmigo la abuelita materna de la hija de mi prima?",
    "respOpciones": [
      "1) Tía",
      "2) Prima",
      "3) Madre",
      "4) Abuela"
    ],
    "idRespPregunta": 1,
    "respPregunta": "En este ítem se requiere analizar la información dada para identificar las relaciones familiares. Una posible estrategia es construir un diagrama para organizar la información:[IMG-01] De acuerdo con el diagrama, la madre de mi prima es mi tía. Luego, la abuela de la hija de mi prima, es la madre de mi prima, quien es mi tía. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 2,
    "txtPregunta": "Se tienen tres lapiceros X, Y y Z: dos son verdes y uno es rojo; además, X y Y son de diferente color.\nConsidere las siguientes proposiciones:\nA. Y es verde.\nB. Z es verde.\nC. X es verde.\nDe las anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) Solo B",
      "2) Solo C",
      "3) B y C",
      "4) A y B"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Una posible estrategia para identificar las distintas posibilidades es organizar la información mediante tablas. De esta manera, se pueden construir los siguientes escenarios:[IMG-02] Del análisis de los escenarios posibles, las proposiciones A y C no se pueden establecer con certeza y solo B ocurre en ambos. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 3,
    "txtPregunta": "Suponga que para cinco números representados por V, W, X, Y y Z se sabe que:\n&bullet; V es el doble de W y a lo sumo tiene el valor de Y.\n&bullet; El valor de X junto con el de Z representan el valor de W.\nConsidere las siguientes afirmaciones:\nA. Y es el doble de W.\nB. Y es más que el doble de X.\nC. Z es al menos la mitad de W.\nDe las afirmaciones anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) A y B",
      "2) Solo C",
      "3) A y C",
      "4) Solo B"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Para facilitar el razonamiento, las premisas pueden expresarse mediante relaciones matemáticas:\no 1. V=2W y V \\le Y\n2. X+Z=W\ncCon estas expresiones, se analiza cada afirmación:\n \nA. Y es el doble de W: \nSegún las premisas, Y \\ge V=2W pero Y no necesariamente es igual a 2W; puede ser mayor. Por lo tanto, esta afirmación no se cumple con certeza.\n \nB. Y es más que el doble de X:\n Reemplazando W=X+Z en V=2W, se obtiene: \noV=2(X+Z)=2X+2Z.\nc Dado que V \\le Y, se concluye que Y \\ge 2X+2Z. Por lo tanto, Y siempre será mayor que 2X, y esta afirmación es correcta.\n \nC. Z es al menos la mitad de W:\n De W=X+Z no es posible determinar con certeza que Z \\ge \\frac{W}{2} ya que Z depende de X, cuya relación específica no se establece en las premisas. Por lo tanto, esta afirmación no se cumple con certeza.\n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 4,
    "txtPregunta": "Hay tres personas: Jorge, Lorena y Arturo que viven en provincias distintas: San José, Alajuela y Puntarenas, y tienen apellidos distintos: Berrocal, Castro y Soto.\nSe sabe que:\n&bullet; Jorge no vive en San José ni Lorena en Alajuela.\n&bullet; El que vive en Puntarenas es de apellido Soto.\n&bullet; El que vive en San José no es de apellido Berrocal.\n&bullet; Lorena no es de apellido Berrocal ni Castro.\nCon certeza, ¿dónde vive Arturo y cuál es su apellido?",
    "respOpciones": [
      "1) Alajuela - Castro",
      "2) San José - Castro",
      "3) Puntarenas - Soto",
      "4) Alajuela - Berrocal"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Una posible estrategia es analizar por separado los datos proporcionados:\n&bullet; De 'Lorena no es de apellido Berrocal ni Castro', se deduce por descarte que Lorena es de apellido Soto.\n&bullet; Como 'la persona que vive en Puntarenas tiene el apellido Soto', se concluye que Lorena vive en Puntarenas.\n&bullet; Dado que Jorge no vive en San José y Lorena vive en Puntarenas, Jorge debe vivir en Alajuela.\n&bullet; Por eliminación, Arturo vive en San José.\n&bullet; Como 'el que vive en San José no tiene el apellido Berrocal' y el apellido Soto ya está asignado a Lorena, Arturo debe tener el apellido Castro.\nDado que Lorena es de apellido Soto y vive en Puntarenas, y Jorge vive en Alajuela, entonces Arturo vive en San José y su apellido es Castro. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 5,
    "txtPregunta": "Considere la siguiente información:\n&bullet; Cada una de las letras A, O, P y Z representa una cifra del 0 al 9 distinta.\n&bullet; Z = 1\nCon base en la información anterior, en la expresión\no (ZO)^2 = PAO\nc¿Cuál es el valor de PA?",
    "respOpciones": [
      "1) 12",
      "2) 22",
      "3) 25",
      "4) 40"
    ],
    "idRespPregunta": 3,
    "respPregunta": "La expresión es (1O)^2 = PAO. Se busca un número de dos cifras que empiece con 1, tal que al elevarlo al cuadrado, el resultado sea un número de tres cifras donde la última cifra sea la misma que la del número original (O). Los únicos dígitos que cumplen esto son 0, 1, 5 y 6.\n&bullet; Si O=0, (10)^2 = 100. Aquí P=1, A=0, O=0, Z=1. No funciona porque A y O no pueden ser el mismo dígito 0.\n&bullet; Si O=1, (11)^2 = 121. Aquí P=1, A=2, O=1, Z=1. No funciona porque P, O y Z no pueden ser el mismo dígito 1.\n&bullet; Si O=5, (15)^2 = 225. Aquí P=2, A=2, O=5, Z=1. No funciona porque P y A no pueden ser el mismo dígito 2.\n&bullet; Si O=6, (16)^2 = 256. Aquí P=2, A=5, O=6, Z=1. Todas las letras representan cifras distintas.\nEste es el único caso que cumple la condición. El valor de PA es 25. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 6,
    "txtPregunta": "Considere las letras C, D, E, I, N, O, R, S, T que representan cifras del 0 al 9 y cada letra representa una cifra distinta. Si se sabe que:\n&bullet; S + S = D + R\n&bullet; C = 1\n&bullet; T = 9\ny además:[IMG-03] Considere las siguientes proposiciones basadas en las condiciones anteriores:\nA. Si S = 6 entonces N = 3\nB. Si S = 7, entonces N = 5\nC. Si S = 8 entonces N = 7\nDe las anteriores, ¿cuáles son verdaderas?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo B",
      "3) A y C",
      "4) B y C"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Como T=9, de la suma T+D=CI se deduce que I=0 y que D debe ser menor que T, por lo que D+T lleva una unidad. \nLa suma queda D+9(+1)=10. Como C=1 e I=0, esto es consistente. \nSe analiza cada proposición:\n&bullet; A. Si S=6: S+S=12, así que O=2 (y se lleva 1). \nEn la siguiente columna: O+E+1=N, es decir, 2+E+1=N. \nY en la siguiente D+R+1=I=10. De S+S=D+R, tenemos 12=D+R. Con D+R=12 y D+R+1=I=10+C, se debe llevar 1, es decir D+R debe ser mayor a 9.\n Con S=6, D+R=12 es una posibilidad. N=3 se cumple por el acarreo. Por lo tanto A es verdadera.\n&bullet; B. Si S=7: S+S=14, O=4. D+R=14. Esto es posible, pero no es viable con los dígitos restantes.\n&bullet; C. Si S=8: S+S=16, O=6. D+R=16. No es viable con los dígitos restantes.\nSolo en la opción A es posible que D+R=2S. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 7,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Todos los ciervos tienen cuernos.\nPremisa 2: Algunos rumiantes son ciervos.\nDe las premisas anteriores se sigue que:",
    "respOpciones": [
      "1) algunos ciervos no son rumiantes.",
      "2) algunos rumiantes tienen cuernos.",
      "3) todos los rumiantes tienen cuernos.",
      "4) algunos rumiantes no tienen cuernos."
    ],
    "idRespPregunta": 2,
    "respPregunta": "La información se puede ilustrar con un diagrama. [IMG-04] La premisa 1 establece que el conjunto de 'ciervos' está contenido en el conjunto de 'animales con cuernos'. \nLa premisa 2 indica que hay una intersección entre el conjunto de 'rumiantes' y el de 'ciervos'.\nDado que algunos rumiantes son ciervos, y todos los ciervos tienen cuernos, se puede concluir con certeza que esos rumiantes que son ciervos también tienen cuernos. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 8,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Toda conferencia es discurso.\nPremisa 2: Algunas conferencias no son lecciones.\nDe las premisas anteriores se sigue que:",
    "respOpciones": [
      "1) ninguna lección es discurso.",
      "2) todas las lecciones son discursos.",
      "3) algunos discursos no son lecciones.",
      "4) todos los discursos son conferencias."
    ],
    "idRespPregunta": 3,
    "respPregunta": "[IMG-05] La premisa 1 indica que el conjunto 'conferencias' está dentro del conjunto 'discursos'. \nLa premisa 2 dice que hay una parte del conjunto 'conferencias' que no pertenece al conjunto 'lecciones'.\nComo hay conferencias que no son lecciones, y todas esas conferencias son discursos, entonces se puede concluir con certeza que hay discursos que no son lecciones. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 9,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Todos los músicos coleccionan carteles.\nPremisa 2: P no es músico y Q no colecciona carteles.\nConsidere las siguientes afirmaciones:\nA. P no colecciona carteles.\nB. Q no es músico.\nC. P colecciona carteles.\nDe las anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo B",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 2,
    "respPregunta": "[IMG-06] La premisa 1 indica que si alguien es músico, entonces colecciona carteles. Su contrapositiva es que si alguien no colecciona carteles, entonces no es músico. \nLa premisa 2 indica que P no es músico, pero de esto no se puede concluir nada sobre si colecciona o no carteles (podría o no hacerlo). \nEn el caso de Q, se dice que no colecciona carteles. Usando la contrapositiva de la premisa 1, se cumple con certeza que, al no coleccionar carteles, Q no es músico. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 10,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Si V lee, entonces L dibuja o J salta.\nPremisa 2: Si L dibuja, entonces P no corre.\nPremisa 3: L no dibuja y J no salta.\nDe las premisas anteriores se sigue que:",
    "respOpciones": [
      "1) V lee.",
      "2) P corre.",
      "3) V no lee.",
      "4) P no corre."
    ],
    "idRespPregunta": 3,
    "respPregunta": "Se requiere concatenar las premisas para extraer una conclusión lógica. \nSe puede empezar con la premisa 3, que afirma dos hechos: 'L no dibuja' y 'J no salta'. Esto significa que la condición 'L dibuja o J salta' de la premisa 1 es falsa. \nEn una implicación 'si A, entonces B', si B es falso, A debe ser falso para que la premisa sea válida. \nPor lo tanto, se deduce que 'V lee' es falso, es decir, V no lee. La premisa 2 no aporta ninguna conclusión válida. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 11,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Si A es un muchacho, entonces A es más joven que J.\nPremisa 2: Si A no tiene 14 años, entonces A no es más joven que J.\nPremisa 3: A no tiene 14 años.\nDe las premisas anteriores se sigue que:",
    "respOpciones": [
      "1) A es menor que J.",
      "2) J es menor que A.",
      "3) J es un muchacho.",
      "4) A no es un muchacho."
    ],
    "idRespPregunta": 4,
    "respPregunta": "De la premisa 3 ('A no tiene 14 años'), y usando la premisa 2, se concluye que 'A no es más joven que J'. \nAhora, considerando la premisa 1 ('Si A es un muchacho, entonces A es más joven que J'), y sabiendo que 'A no es más joven que J', podemos usar la contrapositiva: si A no es más joven que J, entonces A no es un muchacho. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 12,
    "txtPregunta": "Considere las siguientes premisas:\nPremisa 1: Todo C es S.\nPremisa 2: Ningún E es T.\nPremisa 3: Todo S es T.\nDe las anteriores se sigue que:",
    "respOpciones": [
      "1) todo S es E.",
      "2) todo C no es E.",
      "3) algunos S son E.",
      "4) algunos T son E."
    ],
    "idRespPregunta": 2,
    "respPregunta": "Según la premisa 1, todo C es S. Según la premisa 3, todo S es T. Combinando estas dos, se concluye que todo C es T. \nLa premisa 2 establece que ningún E es T. Si todo C está en el conjunto T, y nada de E está en el conjunto T, entonces no puede haber nada de C que también esté en E. \nPor lo tanto, se concluye que todo C no es E. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 13,
    "txtPregunta": "Considere la siguiente secuencia:\n1, 5, 14, 30, 55, ...\n¿Cuál es el sétimo término de esta secuencia?",
    "respOpciones": [
      "1) 79",
      "2) 91",
      "3) 104",
      "4) 140"
    ],
    "idRespPregunta": 4,
    "respPregunta": "El patrón se descubre analizando las diferencias entre términos. \nLa diferencia entre 1 y 5 es 4 (2^2). \nLa diferencia entre 5 y 14 es 9 (3^2). \nLa diferencia entre 14 y 30 es 16 (4^2). \nLa diferencia entre 30 y 55 es 25 (5^2). \nEl siguiente término (el sexto) sería 55 + 6^2 = 55 + 36 = 91. \nEl sétimo término sería 91 + 7^2 = 91 + 49 = 140. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 14,
    "txtPregunta": "Considere la siguiente secuencia:\n−1, 1, 0, 1, 1, 2, 3, 5, p\n¿Cuál es el valor de p?",
    "respOpciones": [
      "1) 5",
      "2) 6",
      "3) 7",
      "4) 8"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Esta es una secuencia similar a la de Fibonacci, donde cada término (a partir del tercero) es la suma de los dos anteriores. \n−1+1=0, \n1+0=1, \n0+1=1, \n1+1=2, \n1+2=3, \n2+3=5. \nPara encontrar p, se suman los dos últimos términos conocidos: p = 3 + 5 = 8. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 15,
    "txtPregunta": "Considere la siguiente secuencia, donde n es un número entero positivo:\n3n − 1, 3n + 2, 3n + x, 3n + 8,...\n¿Cuál es el valor de x?",
    "respOpciones": [
      "1) 3",
      "2) 4",
      "3) 5",
      "4) 6"
    ],
    "idRespPregunta": 3,
    "respPregunta": "La expresión 3n es constante en todos los términos, por lo que el patrón se encuentra en la parte que se suma: -1, 2, x, 8, ...\nLa diferencia entre -1 y 2 es 3. \nSi es una progresión aritmética, la diferencia debería ser constante. \nVerifiquemos: 2+3 = 5, y 5+3 = 8. El patrón encaja. Por lo tanto, x=5. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 16,
    "txtPregunta": "Considere la siguiente secuencia de pares ordenados:\n(1,2), (3,8), (7,26), (b,80), (31,a), (63,728), ...\n¿Cuál es el valor de a + b?",
    "respOpciones": [
      "1) 255",
      "2) 256",
      "3) 257",
      "4) 258"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Se deben identificar los patrones para los primeros y segundos elementos de cada par por separado.\nPara los primeros elementos: 1, 3, 7, b, 31, 63. El patrón es 2^n - 1, donde n es la posición del par. El cuarto elemento (b) es 2^4 - 1 = 16 - 1 = 15. Así, b=15.\nPara los segundos elementos: 2, 8, 26, 80, a, 728. El patrón es 3^n - 1. El quinto elemento (a) es 3^5 - 1 = 243 - 1 = 242. Así, a=242.\nEl valor de a + b = 242 + 15 = 257. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 17,
    "txtPregunta": "Considere la siguiente secuencia:[IMG-07]¿Cuál es la expresión que continúa la secuencia?",
    "respOpciones": [
      "1) [IMG-08]",
      "2) [IMG-09]",
      "3) [IMG-10]",
      "4) [IMG-11]"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Se analiza el patrón del numerador y del denominador por separado. \nEl numerador sigue la secuencia de números impares: 1, 3, 5, ... El siguiente es 7. \nEn el denominador, el exponente de n aumenta de dos en dos: 2, 4, 6, ... El siguiente es 8. \nEl término constante que se suma aumenta de uno en uno: 1, 2, 3, ... El siguiente es 4. \nPor lo tanto, la expresión que continúa la secuencia es: [IMG-10]. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 18,
    "txtPregunta": "Considere la siguiente secuencia:[IMG-12]¿Cuál es el valor de z + y?",
    "respOpciones": [
      "1) 40",
      "2) 46",
      "3) 47",
      "4) 56"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Analicemos los patrones.\nEl denominador es la suma de números impares consecutivos: \nD1=1, \nD2=1+3=4, \nD3=1+3+5=9. \nEntonces: \nD4 (w)=1+3+5+7=16\nD5 (y)=1+3+5+7+9=25.\nEl numerador se construye sumando el numerador y el denominador de la fracción anterior: \nN2=N1+D1=1+1=2.\n N3=N2+D2=2+4=6. \nEntonces:\n N4 (x)=N3+D3=6+9=15.\nN5 (z)=x+w=15+16=31.\nSe pide la suma z + y = 31 + 25 = 56. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 19,
    "txtPregunta": "Analice el siguiente patrón:[IMG-13]Si se continúa con el mismo patrón, ¿en cuál fila la suma de sus números sobrepasa por primera vez 96?",
    "respOpciones": [
      "1) Sétima",
      "2) Octava",
      "3) Novena",
      "4) Décima"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Cada término (excepto los extremos 1 y 2) es la suma de los dos elementos inmediatamente superiores de la fila anterior. Calculemos las sumas de cada fila:\nFila 1: 1\nFila 2: 1+2=3\nFila 3: 1+3+2=6\nFila 4: 1+4+5+2=12\nFila 5: 1+5+9+7+2=24\nLa suma de cada fila se duplica. La sexta fila sumaría 48. La sétima fila sumaría 96. La octava fila sumaría 192.[IMG-14] La suma sobrepasa 96 por primera vez en la octava fila. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 20,
    "txtPregunta": "Considere el siguiente patrón:[IMG-15]Cada número interior del triángulo está rodeado por otros 6 números. Por ejemplo, 4 está rodeado por 1, 1, 3, 6, 10 y 5.\nConsidere las siguientes afirmaciones:\nA. El número 50 estará en la fila 49.\nB. Hay un número rodeado solo de números impares.\nC. El 28 está dentro del grupo de números que rodea al 7.\nDe las anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) A y B",
      "2) B y C",
      "3) Solo B",
      "4) Solo C"
    ],
    "idRespPregunta": 2,
    "respPregunta": "A. Falsa. Tome en cuenta que en una misma fila no se encuentra el valor del número de fila y su consecutivo, ya que cada término es la suma de los dos elementos inmediatamente superiores de la fila anterior. Por ejemplo, el 10 de la fila 6 es la suma del 6 y el 4 de la fila cinco.\nB. Verdadera. El 2 en la tercera fila (1 2 1) está rodeado por 1, 1, 1, 3, 3, 1, todos impares.\nC. Verdadera. Para verificarlo, se deben construir las filas 7, 8 y 9.[IMG-16] El número 7 aparece en la fila 7 (1 7 21 35 35 21 7 1). Los números que lo rodean son de la fila 6 (1 6 15 20 15 6 1) y de la fila 8 (1 8 28 56 70 56 28 8 1). Efectivamente, el 28 de la fila 8 está adyacente al 7 de la fila 7. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 21,
    "txtPregunta": "¿Cuál es el último dígito del número 2545 \\cdot 5^117 + 1?",
    "respOpciones": [
      "1) 0",
      "2) 1",
      "3) 5",
      "4) 6"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Para la resolución de este ítem, se debe tener en cuenta que en cualquier potencia de base cinco el último dígito es 5, ya que al multiplicar números terminados en cinco, el producto también terminará en 5.[IMG-17] Entonces, 5^117 terminará en 5, al igual que 2545 \\cdot 5^5117, por lo que al sumarle el 1 se tiene que la última cifra será 6.\n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 22,
    "txtPregunta": "Considere las siguientes equivalencias:\no10 tazas de agua = 2000 ml\n16 cucharadas de agua = 200 ml\nc¿Cuántas tazas se obtienen de 240 cucharadas de agua?",
    "respOpciones": [
      "1) 15",
      "2) 24",
      "3) 30",
      "4) 48"
    ],
    "idRespPregunta": 1,
    "respPregunta": "De la primera equivalencia, 1 taza = 2000 ml / 10 = 200 ml.\n De la segunda equivalencia, 16 cucharadas = 200 ml. \nPor lo tanto, 1 taza es equivalente a 16 cucharadas. \nPara saber cuántas tazas son 240 cucharadas, dividimos: 240 cucharadas / 16 cucharadas/taza = 15 tazas. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 23,
    "txtPregunta": "Después de hacer una encuesta en la población A, conformada por 425 mujeres y 325 hombres, se obtiene la siguiente información:[IMG-18]Considere las siguientes afirmaciones:\nA. De cada 75 adultos mayores, 13 son mujeres.\nB. Por cada 7 colegiales hay 9 escolares.\nC. De cada 30 escolares, 13 son hombres.\nDe las afirmaciones anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) Solo B",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Las afirmaciones A y C no se pueden cumplir con certeza porque asumen que la proporción de hombres y mujeres es la misma en cada subgrupo, lo cual no se especifica. La proporción general es 425/750 para mujeres y 325/750 para hombres. No hay garantía de que esta proporción se mantenga en los subgrupos de edad.\nPara la afirmación B, se calcula la proporción entre colegiales y escolares: 175/225. Simplificando esta fracción (dividiendo ambos por 25) se obtiene 7/9. Esto significa que por cada 7 colegiales hay 9 escolares. Esta afirmación es verdadera. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 24,
    "txtPregunta": "Una empresa dispone de tres contenedores con capacidad para 90 kg, 180 kg y 150 kg, respectivamente. En cada uno se colocan frijoles empacados en sacos con el mayor peso posible y con igual peso en los tres contenedores. ¿Cuántos kilogramos debe pesar cada saco de frijoles?",
    "respOpciones": [
      "1) 15",
      "2) 30",
      "3) 45",
      "4) 90"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El problema pide encontrar el mayor peso posible para los sacos, de modo que se puedan llenar exactamente los contenedores de 90, 180 y 150 kg. Esto es equivalente a encontrar el Máximo Común Divisor (MCD) de 90, 150 y 180.\n&bullet; Divisores de 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90.\n&bullet; Divisores de 150: 1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150.\n&bullet; Divisores de 180: 1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90, 180.\nEl mayor divisor común es 30. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 25,
    "txtPregunta": "Una fábrica tiene tres timbres. Uno suena cada hora y cuarto, el segundo cada hora y veinte, el tercero cada hora y media. Si los tres suenan simultáneamente a las 10 de la mañana del domingo, ¿cuándo es la próxima vez que volverá a suceder?",
    "respOpciones": [
      "1) A las 10 de la noche del lunes",
      "2) A las 10 de la noche del martes",
      "3) A las 10 de la mañana del jueves",
      "4) A las 10 de la mañana del miércoles"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Primero, convertimos los intervalos a minutos: 1 hora y cuarto = 75 min; 1 hora y veinte = 80 min; 1 hora y media = 90 min. Luego, calculamos el Mínimo Común Múltiplo (mcm) de 75, 80 y 90. El mcm(75, 80, 90) es 3600. Esto significa que volverán a sonar juntos después de 3600 minutos. \n\n3600 minutos / 60 min/hora = 60 horas. \n\n60 horas son 2 días y 12 horas (2*24 + 12). A partir de las 10 a.m. del domingo, 2 días nos llevan a las 10 a.m. del martes. Sumando las 12 horas restantes, llegamos a las 10 de la noche del martes. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 26,
    "txtPregunta": "Si hace 5 años la persona P tenía el cuádruplo de la edad de la persona Z y dentro de 5 años tendrá el doble de la edad de Z, ¿cuántos años tiene P?",
    "respOpciones": [
      "1) 15",
      "2) 20",
      "3) 25",
      "4) 30"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Sea x la edad actual de P y sea y la de Z. Las ecuaciones son:\n\no1) x - 5 = 4(y - 5) → x - 5 = 4y - 20 → x = 4y - 15\n2) x + 5 = 2(y + 5) → x + 5 = 2y + 10 → x = 2y + 5\nc\nIgualando las expresiones para x:\n\no4y - 15 = 2y + 5 → 2y = 20 → y = 10\nc\nLa edad de Z es 10 años.\nSustituyendo y en la segunda ecuación:\n\nox = 2(10) + 5 = 25\nc\nLa edad de P es 25 años. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 27,
    "txtPregunta": "En un torneo participan 6 jugadores: X, Y, Z, D, E y F y cada uno se enfrenta a los demás. Se asignan tres puntos por cada gane y un punto por cada empate. La tabla final de resultados tiene la siguiente información:\nGanados Empatados Perdidos Puntos totales\nX 2  -   2    -\nY -  1   -   10\nZ 1  2   -    5\nD 2  1   -    -\nE 1  -   4    3\nF -  3   0    -\nConsidere las siguientes afirmaciones:\nA. D perdió contra X.\nB. Hay dos jugadores que empatan en puntaje.\nC. Si F hubiera ganado un partido más, habría ganado el torneo.\nDe las anteriores, ¿cuáles se cumplen con certeza?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo B",
      "3) A y C",
      "4) B y C"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Cada jugador participa en 5 juegos. Completamos la tabla usando la fórmula: Puntos = 3 &bullet; Ganados + Empatados.\n&bullet; X: 2 G, ? E, 2 P. Total juegos = 5. Falta 1 juego, debe ser empate (2G, 1E, 2P). Puntos=3(2)+1=7.\n&bullet; Y: ? G, 1 E, ? P. Puntos=10. 3(G)+1=10 → 3G=9 → G=3. (3G, 1E, 1P).\n&bullet; Z: 1 G, 2 E, 2 P. Puntos=3(1)+2=5. (Correcto).\n&bullet; D: 2 G, 1 E, 2 P. Puntos=3(2)+1=7.\n&bullet; E: 1 G, ? E, 4 P. Puntos=3. 3(1)+E=3 → E=0. (1G, 0E, 4P).\n&bullet; F: ? G, 3 E, 0 P. Total juegos = 5. Faltan 2, deben ser ganados (2G, 3E, 0P). Puntos=3(2)+3=9.\n \nLa tabla completa de puntos es: X(7), Y(10), Z(5), D(7), E(3), F(9).\n \n&bullet; A. No se puede asegurar que D perdió contra X.\n&bullet; B. Es cierto, D y X empatan con 7 puntos.\n&bullet; C. F no puede haber ganado un partido más, pues ya jugó sus 5 partidos.\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 28,
    "txtPregunta": "¿Cuántos productos distintos se pueden obtener al multiplicar dos de los siguientes números: 3, 5, 6, 7 y 9 sin repetirlos?",
    "respOpciones": [
      "1) 9",
      "2) 10",
      "3) 20",
      "4) 25"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Se trata de formar parejas de números distintos de un conjunto de 5 números para multiplicarlos. El orden no importa (3x5 es el mismo producto que 5x3). Esto es un problema de combinaciones: el número de maneras de elegir 2 elementos de un conjunto de 5. Se calcula como C(5,2):\n\noC(5,2) = \\frac{5!}{2!(5-2)!} = \\frac{120}{2 \\cdot 6} = 10\nc\nHay 10 posibles productos. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 29,
    "txtPregunta": "¿Cuántos diferentes ordenamientos de cuatro letras se pueden hacer con M, S, R, A, O de modo que cada uno comience en S y termine en A?",
    "respOpciones": [
      "1) 9",
      "2) 10",
      "3) 20",
      "4) 25"
    ],
    "idRespPregunta": 4,
    "respPregunta": "El ordenamiento tiene 4 posiciones: S _ _ A. La primera y la última letra están fijas. Para la segunda posición, hay 5 opciones (M, S, R, A, O), ya que el enunciado no restringe la repetición de letras. Para la tercera posición, también hay 5 opciones. El total de ordenamientos es:\n\no1 &bullet; 5 &bullet; 5 &bullet; 1 = 25\nc\n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 30,
    "txtPregunta": "¿Cuántos números de cuatro cifras se pueden formar de manera que el dígito de las unidades sea 0 y los otros sean tres dígitos del 1 al 7, distintos entre sí?",
    "respOpciones": [
      "1) 18",
      "2) 120",
      "3) 210",
      "4) 216"
    ],
    "idRespPregunta": 3,
    "respPregunta": "El número tiene la forma _ _ _ 0. Los tres primeros dígitos deben ser distintos y elegidos del conjunto {1, 2, 3, 4, 5, 6, 7}. Para la primera cifra (millares), hay 7 opciones. Para la segunda cifra (centenas), como deben ser distintos, quedan 6 opciones. Para la tercera cifra (decenas), quedan 5 opciones. El total de números que se pueden formar es:\n\no7 &bullet; 6 &bullet; 5 = 210\nc \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 31,
    "txtPregunta": "¿Cuántos números de tres cifras se pueden formar utilizando solamente el 1 y el 7?",
    "respOpciones": [
      "1) 5",
      "2) 6",
      "3) 7",
      "4) 8"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se pueden formar números de tres cifras _ _ _. El enunciado no restringe la repetición de cifras. Para la primera cifra, hay 2 opciones (1 o 7). Para la segunda cifra, hay 2 opciones. Para la tercera cifra, hay 2 opciones. El total de números que se pueden formar es:\n\no2 &bullet; 2 &bullet; 2 = 8\nc\n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 32,
    "txtPregunta": "En una colección de películas, 9 son de comedia y 7 son de terror. Considere las siguientes afirmaciones:\nA. La cantidad de maneras para elegir dos películas, sin importar el orden es 120.\nB. La cantidad de maneras para elegir dos películas de comedia es 81.\nC. La cantidad de maneras para elegir dos películas, primero de comedia y luego de terror, es 63.\nDe acuerdo con lo anterior, ¿cuál de las afirmaciones anteriores se cumple con certeza?",
    "respOpciones": [
      "1) Solo A",
      "2) A y B",
      "3) B y C",
      "4) A y C"
    ],
    "idRespPregunta": 4,
    "respPregunta": "&bullet; A. Hay 16 películas en total. El número de maneras de elegir 2 sin importar el orden es C(16,2) = \\frac{16 \\cdot 15}{2} = 120. La afirmación A es correcta.\n \n&bullet; B. Hay 9 películas de comedia. El número de maneras de elegir 2 sin importar el orden es C(9,2) = \\frac{9 \\cdot 8}{2} = 36. La afirmación B es incorrecta.\n \n&bullet; C. Hay 9 opciones para la película de comedia y 7 para la de terror. Como el orden importa ('primero de comedia y luego de terror'), se multiplican las opciones: 9 &bullet; 7 = 63. La afirmación C es correcta.\n \nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 33,
    "txtPregunta": "Si k es un número natural, ¿cuáles expresiones representan dos números naturales impares consecutivos?",
    "respOpciones": [
      "1) 2k − 1 y 2k",
      "2) 2k − 1 y 2k + 3",
      "3) 2k + 1 y 2k + 3",
      "4) 2k + 1 y 2k + 2"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Un número par se puede representar como 2k. Un número impar se obtiene sumando o restando 1 a un número par, por ejemplo, 2k+1. El siguiente número impar consecutivo se obtiene sumando 2 al anterior, es decir, (2k+1)+2 = 2k+3. Por lo tanto, las expresiones 2k+1 y 2k+3 representan dos números impares consecutivos. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 34,
    "txtPregunta": "En el conjunto de los números reales se define la operación ⊙, que cumple las siguientes condiciones:\n&bullet; m ⊙ −1 = m\n&bullet; 2 ⊙ −2 = 1\nDe acuerdo con lo anterior, ¿cuál es una posible fórmula para definir la operación ⊙?",
    "respOpciones": [
      "1) a ⊙ b = 2a + ab",
      "2) a ⊙ b = a + b + 1",
      "3) a ⊙ b = a − b − 3",
      "4) a ⊙ b = a + 2b + 2"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Se prueba cada opción con las dos condiciones dadas.\n \n1) a ⊙ b = 2a + ab:\nm ⊙ -1 = 2m + m(-1) = m. Cumple. \n2 ⊙ -2 = 2(2) + 2(-2) = 0. No cumple.\n \n2) a ⊙ b = a + b + 1:\nm ⊙ -1 = m + (-1) + 1 = m. Cumple. \n2 ⊙ -2 = 2 + (-2) + 1 = 1. Cumple.\n \n3) a ⊙ b = a − b − 3:\nm ⊙ -1 = m - (-1) - 3 = m - 2. No cumple.\n \n4) a ⊙ b = a + 2b + 2:\nm ⊙ -1 = m + 2(-1) + 2 = m. Cumple. \n2 ⊙ -2 = 2 + 2(-2) + 2 = 0. No cumple.\n \nLa única fórmula que cumple ambas condiciones es la de la opción 2. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 35,
    "txtPregunta": "Se requiere que n^p siempre sea un número impar, con n y p naturales distintos de cero.\nConsidere las siguientes afirmaciones:\nA. n tiene que ser un número par siempre que p sea impar.\nB. n puede ser cualquier número natural siempre que p sea impar.\nC. p tiene que ser un número impar y n puede ser un número impar.\nD. p puede ser cualquier número natural siempre que n sea impar.\nDe las anteriores, ¿cuáles son verdaderas?",
    "respOpciones": [
      "1) Solo B",
      "2) Solo C",
      "3) C y D",
      "4) A y B"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Para que el resultado de una potencia sea impar, la base debe ser impar. El exponente no afecta la paridad del resultado (impar elevado a cualquier potencia natural es impar).\n \nA. Falsa. Si n es par, el resultado es par.\n \nB. Falsa. Si n es par, el resultado es par.\n \nC. Verdadera. Si n es impar, el resultado es impar (independientemente de si p es par o impar). Esta afirmación es un caso particular de la condición necesaria.\n \nD. Verdadera. Si n es impar, n^p es siempre impar para cualquier p natural. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 36,
    "txtPregunta": "Considere un sistema de numeración con los siguientes símbolos: |=1, ||=2, |||=3, ||||=4, Γ=5, Δ=10, H=100. Los símbolos que se colocan al mismo nivel se suman y el que se coloca como exponente se multiplica con la base.\nPor ejemplo: 13=Δ|||, 60=ΓΔΔ, 500=ΓH.\n¿Cuál número corresponde a la diferencia entre ΓH HΔΓ y H H ΓΔΔΔ||?",
    "respOpciones": [
      "1) 272",
      "2) 343",
      "3) 615",
      "4) 887"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Primero, se decodifican los números:\n&bullet; ΓH HΔΓ = (Γ &bullet; H) + H + Δ + Γ = (5 &bullet; 100) + 100 + 10 + 5 = 615.\n&bullet; H H ΓΔΔΔ|| = H + H + (Γ &bullet; Δ) + Δ + Δ + || = 100 + 100 + (5 &bullet; 10) + 10 + 10 + 2 = 272.\n\nLa diferencia es:\n\no615 - 272 = 343\nc\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 37,
    "txtPregunta": "Se sabe que el producto de dos números naturales A y B es S. ¿Cuál expresión representa A aumentado en 2 unidades multiplicado por B?",
    "respOpciones": [
      "1) S + 2",
      "2) S + B",
      "3) S + 2A",
      "4) S + 2B"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se tiene que A &bullet; B = S. La expresión 'A aumentado en 2 unidades' es (A + 2). Al multiplicarlo por B, se obtiene:\n\no(A + 2) &bullet; B = (A &bullet; B) + (2 &bullet; B)\nc\nSustituyendo A &bullet; B por S, la expresión queda: S + 2B.\n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 38,
    "txtPregunta": "Se le llama número habilidoso a un número de tres dígitos que es múltiplo de 4 y divisible por 7. ¿Cuál es la última cifra del menor y la última cifra del mayor número habilidoso?",
    "respOpciones": [
      "1) 2 y 0",
      "2) 8 y 5",
      "3) 0 y 6",
      "4) 2 y 6"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Un número que es múltiplo de 4 y 7 es múltiplo de su mcm, que es 28. Buscamos múltiplos de 28 de tres dígitos.\n&bullet; Menor: El primer múltiplo de 28 mayor que 100. 100/28 ≈ 3.57. El múltiplo es 28 &bullet; 4 = 112. Su última cifra es 2.\n&bullet; Mayor: El último múltiplo de 28 menor que 1000. 1000/28 ≈ 35.7. El múltiplo es 28 &bullet; 35 = 980. Su última cifra es 0.\n\nLas últimas cifras son 2 y 0. \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 39,
    "txtPregunta": "Sobre el conjunto A={1, 2, 3, 4}, se define la operación ⊕ por medio de una tabla. Se define el orden de un número como la cantidad de veces que se opera consigo mismo hasta obtener 1.\n\n¿Cuál es el orden de 3?",
    "respOpciones": [
      "1) 2",
      "2) 3",
      "3) 4",
      "4) 5"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Para encontrar el orden de 3, operamos 3 consigo mismo repetidamente hasta obtener 1 (se asume una tabla de operaciones no proporcionada).\n&bullet; 1ra operación:\no3 ⊕ 3 = 2\nc\n&bullet; 2da operación:\no(3 ⊕ 3) ⊕ 3 = 2 ⊕ 3 = 1\nc\nSe necesitaron 2 operaciones para obtener 1. Por lo tanto, el orden de 3 es 2. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 40,
    "txtPregunta": "Considere la siguiente figura que sigue un patrón por fila:\n[IMG-19]\n¿Cuál opción corresponde a la cuarta fila?",
    "respOpciones": [
      "1) [IMG-20]",
      "2) [IMG-21]",
      "3) [IMG-22]",
      "4) [IMG-23]"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se deben analizar los patrones en cada columna. \na) Primer rectángulo: El círculo se mueve en sentido horario entre los cuatro cuadrantes definidos por las diagonales: izquierda, arriba, derecha. En la cuarta fila debe estar abajo. \nb) Segundo rectángulo: Los colores (oscuro/claro) se alternan. En la cuarta fila debe ser claro arriba de la diagonal y oscuro abajo. \nc) Tercer rectángulo: El color del rectángulo completo alterna. En la cuarta fila debe ser claro. \nLa opción 4 ([IMG-23]) es la única que cumple con estas tres condiciones. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 41,
    "txtPregunta": "Considere la siguiente figura que sigue un patrón por fila:\n[IMG-24]\n¿Cuál opción debe colocarse en el recuadro en blanco?",
    "respOpciones": [
      "1) [IMG-25]",
      "2) [IMG-26]",
      "3) [IMG-27]",
      "4) [IMG-28]"
    ],
    "idRespPregunta": 3,
    "respPregunta": "En cada fila hay tres tipos de figuras: 4 triángulos, 4 cuadrados y 9 cuadrados. En la tercera fila faltan las figuras de 4 y 9 cuadrados. Además, hay un patrón de sombreado por columna: Columna 1 siempre tiene 1 sección sombreada, Columna 2 siempre tiene 3, y Columna 3 siempre tiene 2. La figura faltante está en la columna 2, por lo que debe tener 3 secciones sombreadas. De las opciones, la única que corresponde a una figura de 9 cuadrados con 3 secciones sombreadas es la opción 3 ([IMG-27]). \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 42,
    "txtPregunta": "Considere la siguiente figura que sigue un patrón por fila:\n[IMG-29]\n¿Cuál opción debe colocarse en el recuadro en blanco?",
    "respOpciones": [
      "1) [IMG-30]",
      "2) [IMG-31]",
      "3) [IMG-32]",
      "4) [IMG-33]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El patrón es que al superponer las figuras de las primeras tres columnas se obtiene la figura de la cuarta columna, con la excepción de que si un punto ya existe, desaparece (una operación XOR). Para la tercera fila, al superponer la figura de la columna 1 con la de la columna 2, se obtiene un resultado. Para que este resultado, superpuesto con la figura faltante (de la columna 3), dé la figura de la columna 4, se debe buscar la opción que cumpla esta regla. Analizando la tercera fila, se determina que la figura faltante es la opción 2 ([IMG-31]). \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 43,
    "txtPregunta": "Considere la siguiente figura que sigue un patrón por fila:\n[IMG-34]\n¿Cuál opción corresponde a la parte faltante?",
    "respOpciones": [
      "1) [IMG-35]",
      "2) [IMG-36]",
      "3) [IMG-37]",
      "4) [IMG-38]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El patrón en cada fila es una rotación de la figura. La primera figura se rota 90 grados para obtener la segunda, y esta se rota 90 grados para obtener la tercera. En la tercera fila, se tiene un pentágono. Siguiendo el patrón de rotación de 90 grados en sentido horario, la figura faltante (la segunda de la fila) debe ser el pentágono de la primera posición rotado 90 grados. Esta corresponde a la opción 2 ([IMG-36]). \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 44,
    "txtPregunta": "Considere la siguiente figura que sigue un patrón por fila:\n[IMG-39]\n¿Cuál opción debe colocarse en el recuadro en blanco?",
    "respOpciones": [
      "1) [IMG-40]",
      "2) [IMG-41]",
      "3) [IMG-42]",
      "4) [IMG-43]"
    ],
    "idRespPregunta": 4,
    "respPregunta": "En cada fila, los cuadrados alternan entre sombreados y no sombreados. En los no sombreados, un círculo gris se mueve sobre la diagonal en tres posiciones: 'arriba', 'medio' y 'abajo'. En cada fila, deben aparecer las tres posiciones. En la tercera fila, ya tenemos las posiciones 'arriba' y 'abajo'. Por lo tanto, falta la posición 'medio'. \n\nLa opción correcta es la 4 ([IMG-43])."
  },
  {
    "idPregunta": 45,
    "txtPregunta": "Considere las siguientes figuras:\n[IMG-44]\n¿Cuál figura tiene un patrón geométrico diferente de las otras?",
    "respOpciones": [
      "1) 1",
      "2) 2",
      "3) 4",
      "4) 5"
    ],
    "idRespPregunta": 3,
    "respPregunta": "En las figuras 1, 2, 3 y 5, la diferencia entre el número de puntos en el cuadro superior y el inferior es de una unidad. En la figura 4, la diferencia es de 2 unidades (5 puntos arriba, 3 abajo). Por lo tanto, la figura 4 tiene un patrón diferente. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 46,
    "txtPregunta": "Considere las siguientes figuras:\n[IMG-45]\n¿Cuál figura tiene un patrón geométrico diferente de las otras, con respecto a los cuadros sombreados?",
    "respOpciones": [
      "1) 1",
      "2) 2",
      "3) 3",
      "4) 4"
    ],
    "idRespPregunta": 3,
    "respPregunta": "En las figuras 1, 2 y 4, los cuadrados sombreados se agrupan en múltiplos de dos (formando rectángulos de 1x2 o 2x1). En la figura 3, hay un cuadro sombreado que está aislado y no forma parte de una pareja, rompiendo el patrón. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 47,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-46]\n¿Cuál es la figura que continúa la secuencia?",
    "respOpciones": [
      "1) [IMG-47]",
      "2) [IMG-48]",
      "3) [IMG-49]",
      "4) [IMG-50]"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Hay dos patrones. Primero, las formas planas se repiten en un ciclo de tres: círculo, cuadrado, triángulo. La figura 7 es un triángulo, por lo que la siguiente debe ser un círculo. Segundo, la línea externa rota en sentido horario en cinco posiciones posibles. Siguiendo la rotación, la siguiente posición corresponde a la de la opción 1 ([IMG-47]). \n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    "idPregunta": 48,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-51]\n¿Cuál figura debe ir en la posición 6?",
    "respOpciones": [
      "1) [IMG-52]",
      "2) [IMG-53]",
      "3) [IMG-54]",
      "4) [IMG-55]"
    ],
    "idRespPregunta": 4,
    "respPregunta": "La línea divisoria de la figura gira 45 grados en sentido horario en cada paso. Empezando vertical (0°), pasa a 45°, luego horizontal (90°), luego 135°, y vuelve a vertical (180°). El siguiente giro de 45° desde la posición 5 (vertical) la llevaría a una diagonal a 225°. Esta posición corresponde a la figura de la opción 4 ([IMG-55]). \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 49,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-56]\n¿Cuál figura debe ir en la posición 8?",
    "respOpciones": [
      "1) [IMG-57]",
      "2) [IMG-58]",
      "3) [IMG-59]",
      "4) [IMG-60]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Se observa un patrón que se repite cada 4 figuras: 1) Triángulo fuera. 2) Triángulo doblado hacia adentro. 3) Figura rotada 180 grados. 4) Triángulo devuelto a su posición original. Este ciclo se repite. La figura 5 es como la 1, pero rotada. La figura 6 será como la 2 (triángulo adentro), la 7 como la 3 (rotada 180°), y la 8 será como la 4 (triángulo afuera). Respetando la orientación de la figura 5, la figura 8 debe corresponder a la opción 2 ([IMG-58]). \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 50,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-61]\n¿Cuál figura debe ir en la posición 8?",
    "respOpciones": [
      "1) [IMG-62]",
      "2) [IMG-63]",
      "3) [IMG-64]",
      "4) [IMG-65]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Las figuras son cuadrados de puntos de tamaño creciente (1x1, 2x2, 3x3, etc.). La figura en la posición n es un cuadrado de nxn. Además, el color del punto en la primera fila y primera columna alterna entre negro y blanco. Para la figura 8, será un cuadrado de 8x8. Dado el patrón de alternancia, el color del punto de la esquina superior izquierda será blanco y la diagonal será negra. La opción 2 ([IMG-63]) muestra un cuadrado de 8x8 con estas características. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 51,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-66]\n¿Cuál figura debe ir en la posición 36?",
    "respOpciones": [
      "1) [IMG-67]",
      "2) [IMG-68]",
      "3) [IMG-69]",
      "4) [IMG-70]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Hay dos patrones. Primero, el sombreado de la estrella alterna: las figuras en posición impar están sombreadas, y las pares no. Como 36 es par, la figura no debe estar sombreada. Segundo, el círculo negro se mueve entre las 5 puntas de la estrella, volviendo a la posición original cada 5 pasos. Para la posición 36, calculamos el residuo de 36 al dividir por 5, que es 1 (36 = 5*7 + 1). Esto significa que el círculo estará en la misma posición que en la figura 1. Una figura no sombreada con el círculo en la posición 1 corresponde a la opción 2 ([IMG-68]). \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 52,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-71]\n¿Cuál figura debe ir en la posición 99?",
    "respOpciones": [
      "1) [IMG-72]",
      "2) [IMG-73]",
      "3) [IMG-74]",
      "4) [IMG-75]"
    ],
    "idRespPregunta": 3,
    "respPregunta": "El patrón consta de 4 figuras que se repiten cíclicamente. Para encontrar la figura en la posición 99, se divide 99 entre 4. 99 / 4 = 24 con un residuo de 3. Esto significa que la secuencia completa 24 ciclos y luego avanza 3 posiciones más. La figura en la posición 99 será la misma que la de la posición 3 ([IMG-74]). \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 53,
    "txtPregunta": "Considere la siguiente secuencia de figuras formada por pajillas y bolitas:\n[IMG-76]\n¿Cuántas pajillas se necesitan para construir la figura 10?",
    "respOpciones": [
      "1) 20",
      "2) 52",
      "3) 57",
      "4) 70"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Analicemos la estructura. La figura n tiene 3 filas horizontales de n pajillas cada una (total 3n). También tiene (n+1) pajillas verticales y (n+1) pajillas oblicuas. La fórmula para el total de pajillas en la figura n es:\n\no3n + (n+1) + (n+1) = 5n + 2\nc\nPara la figura 10, se necesitan:\n\no5(10) + 2 = 52 pajillas\nc\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 54,
    "txtPregunta": "Considere la siguiente figura:\n[IMG-77]\n¿Cuál es la forma que proyectan las figuras sobre el plano con respecto a la vista frontal?",
    "respOpciones": [
      "1) [IMG-78]",
      "2) [IMG-79]",
      "3) [IMG-80]",
      "4) [IMG-81]"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Al proyectar cada figura tridimensional hacia el plano desde la vista frontal, se obtiene su sombra o contorno bidimensional. La figura curva (sección de cilindro) proyecta un rectángulo. El cono truncado proyecta un círculo. La pirámide truncada rectangular proyecta un rectángulo. \n\nPor lo tanto, la opción correcta es la 1 ([IMG-78])."
  },
  {
    "idPregunta": 55,
    "txtPregunta": "Considere las siguientes vistas de una figura tridimensional:\n[IMG-82]\n¿Cuál de las siguientes figuras se puede formar con estas vistas?",
    "respOpciones": [
      "1) [IMG-83]",
      "2) [IMG-84]",
      "3) [IMG-85]",
      "4) [IMG-86]"
    ],
    "idRespPregunta": 3,
    "respPregunta": "La vista superior muestra que la figura debe tener un trapecio en el techo, lo que descarta las opciones 1 y 4. La vista lateral muestra un corte en diagonal, lo que descarta la opción 2, que tiene un corte vertical. La única figura que coincide con las tres vistas (frontal, superior y lateral) es la opción 3 ([IMG-85]). \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 56,
    "txtPregunta": "¿Cuál de las siguientes figuras se debe rotar para obtener la figura de referencia?\n[IMG-87]\n[IMG-88]",
    "respOpciones": [
      "1) a",
      "2) b",
      "3) c",
      "4) d"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Se debe analizar cuál de las figuras de las opciones, al ser rotada, puede coincidir exactamente con la figura de referencia. Las figuras a y c tienen líneas internas que no son paralelas, a diferencia de la figura de referencia, por lo que se descartan. La figura d, al rotarla, no coincide con la posición de las diagonales. La figura b, al rotarla 90 grados en sentido antihorario, coincide perfectamente con la figura de referencia. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 57,
    "txtPregunta": "Para empacar cinco bolas se utilizan cilindros de 3 cm de radio y 30 cm de altura. Se puede afirmar con certeza que cada empaque contiene bolas que:",
    "respOpciones": [
      "1) exceden los 3 cm de radio.",
      "2) exceden los 6 cm de diámetro.",
      "3) no exceden los 3 cm de radio.",
      "4) no exceden los 3 cm de diámetro."
    ],
    "idRespPregunta": 3,
    "respPregunta": "Para que las bolas quepan en el cilindro, su radio no puede ser mayor que el radio del cilindro. El radio del cilindro es de 3 cm. Por lo tanto, el radio de cada bola no puede exceder los 3 cm. Esto no excluye que puedan ser más pequeñas. Las opciones 1 y 2 son falsas porque si las bolas excedieran ese tamaño, no cabrían. La opción 4 es indeterminada, ya que podrían tener un radio entre 1.5 cm y 3 cm. La única afirmación que se cumple con certeza es que las bolas no exceden los 3 cm de radio. \n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    "idPregunta": 58,
    "txtPregunta": "Si se dobla la siguiente figura para formar un cubo, ¿cuál figura se obtiene?\n[IMG-89]",
    "respOpciones": [
      "1) [IMG-90]",
      "2) [IMG-91]",
      "3) [IMG-92]",
      "4) [IMG-93]"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Al doblar la figura, las caras opuestas serán: triángulo y cuadrado negro; estrella y corazón; círculo y cuadrado blanco. Visualizando el cubo formado, el corazón queda al lado del círculo, y el triángulo negro arriba del corazón. Las opciones 1, 3 y 4 muestran una disposición incorrecta de las caras adyacentes u opuestas. La opción 2 ([IMG-91]) es la única que muestra una vista posible del cubo ensamblado correctamente. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 59,
    "txtPregunta": "Considere la siguiente figura, la cual corresponde a un papel cuadrado doblado con algunas figuras marcadas:\n[IMG-94]\nAl desdoblar el papel, ¿cuál figura se obtiene, de manera que presente simetría con respecto a ambas diagonales?",
    "respOpciones": [
      "1) [IMG-95]",
      "2) [IMG-96]",
      "3) [IMG-97]",
      "4) [IMG-98]"
    ],
    "idRespPregunta": 4,
    "respPregunta": "La condición clave es que la figura desdoblada debe tener simetría con respecto a ambas diagonales. Esto descarta las figuras 2 y 3. Al observar el papel doblado, se ve que los cuadrados marcados no son continuos. Al desdoblar la figura con simetría diagonal, las marcas se reflejarán a través de las diagonales, creando un patrón discontinuo y rotado, como se muestra en la opción 4 ([IMG-98]). \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 60,
    "txtPregunta": "Considere la siguiente secuencia de figuras:\n[IMG-99]\nCon base en el patrón anterior, considere las siguientes afirmaciones:\nA. El área sombreada de la figura 2 es 1/3 del área sombreada de la figura 1.\nB. El área sombreada de la figura 1 es 1/4 del área sombreada de la figura 3.\nC. El área sombreada de la figura 3 es 1/2 del área sombreada de la figura 2.\nDe las anteriores, ¿cuáles son verdaderas?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Sea A el área del cuadrado mayor. \n&bullet; Área sombreada Fig 1 = A/3. \n&bullet; Área sombreada Fig 2 = 2 &bullet; (1/3 &bullet; (A/4)) = A/6. \n&bullet; Área sombreada Fig 3 = 4 &bullet; (1/3 &bullet; (A/16)) = A/12. \n \nRevisamos las afirmaciones: \n&bullet; A. ¿Es A/6 = 1/3 &bullet; (A/3)? No, A/6 ≠ A/9. Falsa. \n&bullet; B. ¿Es A/3 = 1/4 &bullet; (A/12)? No, A/3 ≠ A/48. Falsa. \n&bullet; C. ¿Es A/12 = 1/2 &bullet; (A/6)? Sí, A/12 = A/12. Verdadera. \n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    "idPregunta": 61,
    "txtPregunta": "Considere el siguiente texto:\nLa televisión nos tantaliza, quedamos como prendados de ella. Este efecto entre mágico y maléfico es obra, creo, del exceso de la luz que con su intensidad nos toma. (Sábato, 2000)\nSegún el texto, ¿cuál palabra resume el efecto de la televisión?",
    "respOpciones": [
      "1) Nociva",
      "2) Ilusoria",
      "3) Atractiva",
      "4) Seductora"
    ],
    "idRespPregunta": 4,
    "respPregunta": "En este ítem se solicita una definición de la palabra televisión con base en el texto. Una posible estrategia es analizar las características de la televisión para encontrar una palabra que las englobe. Según el texto, la televisión produce un efecto hipnótico, mágico y cautivador en el espectador. Dentro de este contexto, las opciones nociva, atractiva e ilusoria no necesariamente integran este conjunto de características. Por otra parte, el significado de seductora implica un efecto de cautivar o atrapar; por tanto, este es el término que mejor define a la televisión. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 62,
    "txtPregunta": "Considere el siguiente texto:\nAl principio, en la isla de Nueva Guinea, donde hace unos 10.000 años se domesticó la caña de azúcar, la gente cogía las cañas y masticaba el tallo hasta sentir la ______ en la lengua. El azúcar era una especie de ______, la cura de todos los males, y ocupaba un lugar destacado en los antiguos ______ de la isla. (National Geographic, 2020)\nSegún el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) dulzura - elixir - mitos",
      "2) delicia - bálsamo - ritos",
      "3) melaza - jarabe - símbolos",
      "4) suavidad - remedio - cuentos"
    ],
    "idRespPregunta": 1,
    "respPregunta": "El texto presenta tres espacios que deben completarse coherentemente. Para el primer espacio, se alude al sentido del gusto, por lo que 'dulzura' o 'delicia' son opciones viables. La frase 'la cura de todos los males' es clave para el segundo término; esta propiedad se relaciona directamente con el concepto de 'elixir', un remedio maravilloso que cura todos los males. Finalmente, 'mitos' o 'ritos' encajan en el contexto de las creencias y capacidades mágicas atribuidas a la caña. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 63,
    "txtPregunta": "Considere el siguiente texto:\nDisculpen esta impericia, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor... (Víquez, 1994)\nSegún el texto, ¿cuál palabra es equivalente a 'impericia'?",
    "respOpciones": [
      "1) Desorden",
      "2) Accidente",
      "3) Negligencia",
      "4) Incompetencia"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se busca un sinónimo de 'impericia' en el contexto dado. La clave que ofrece el texto es 'no soy escritor'. La palabra 'impericia' se refiere a la falta de destreza para ejecutar una actividad, que en este contexto es una 'incompetencia' al escribir. 'Desorden' alude a cambios pero no a falta de habilidad, 'accidente' a un suceso fortuito y 'negligencia' a un descuido. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 64,
    "txtPregunta": "Considere el siguiente texto:\nEl chiste es un dicho breve, agudo y gracioso que surge espontáneamente del pueblo; algunos investigadores y autores los recopilan para su publicación. (de la Torre, 2005)\nSegún el texto, ¿cuál palabra sintetiza los términos subrayados (breve, agudo y gracioso)?",
    "respOpciones": [
      "1) Sagaz",
      "2) Burlesco",
      "3) Ingenioso",
      "4) Perspicaz"
    ],
    "idRespPregunta": 3,
    "respPregunta": "Se debe sintetizar el significado de 'breve, agudo y gracioso' para identificar el atributo principal del chiste. Estas cualidades describen una capacidad de ingenio que combina creatividad, perspicacia y síntesis. 'Sagaz' y 'perspicaz' apuntan más a la agudeza, mientras que 'burlesco' se relaciona solo con lo gracioso. 'Ingenioso' es el término que mejor engloba las tres características. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 65,
    "txtPregunta": "Considere el siguiente texto:\nLa literatura comprometida está hecha de pruebas, de alegatos, de refutaciones. Leerla puede no causarnos placer, pero nos inclina a asentir o a rechazar. (Castellanos, 1959)\nSegún el texto, ¿cuál palabra sintetiza los términos subrayados (pruebas, alegatos, refutaciones)?",
    "respOpciones": [
      "1) Evidencias",
      "2) Testimonios",
      "3) Declaraciones",
      "4) Argumentaciones"
    ],
    "idRespPregunta": 4,
    "respPregunta": "El objetivo es encontrar un término que englobe 'pruebas', 'alegatos' y 'refutaciones'. 'Evidencias' es sinónimo de 'pruebas', pero no incluye a los otros dos. Un 'alegato' es un argumento o discusión, y una 'refutación' es hallar el error en una argumentación. El término 'argumentaciones' involucra contradecir (refutar o alegar) usando hechos (pruebas) para respaldar una opinión. Por lo tanto, es la palabra que mejor sintetiza los tres conceptos. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 66,
    "txtPregunta": "Considere el siguiente texto:\nLa diferencia entre mito y leyenda es imprecisa, ya que sus orígenes son ______. En su lenguaje desempeñan un papel de particular relevancia la ______ y la alegoría; ya que describen figuras míticas, que generalmente son ______. (de la Torre, 2005)\nSegún el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) idénticos - poesía - insólitas",
      "2) semejantes - metáfora - simbólicas",
      "3) exactos - ambigüedad - metafísicas",
      "4) relacionados - historia - imaginarias"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El texto expone más similitudes que diferencias entre mito y leyenda, por lo que en el primer espacio se deduce que sus orígenes son 'semejantes' o 'relacionados'. Las palabras 'lenguaje', 'alegoría' y 'míticas' apuntan a un término como 'metáfora' para el segundo espacio, que alude a una representación simbólica. En el tercer espacio, el término buscado debe reflejar lo mítico y alegórico, lo cual se asocia con la característica de 'simbólico' o 'imaginario'. La opción 2 ofrece la combinación más coherente. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 67,
    "txtPregunta": "Considere el siguiente texto:\nMachu Picchu es considerada, al mismo tiempo, una obra maestra de la arquitectura y la ingeniería. Sus peculiares características arquitectónicas y paisajísticas, y el velo de misterio que ha tejido a su alrededor buena parte de la literatura publicada sobre el sitio, lo han convertido en una de las siete maravillas del mundo moderno.\nSegún el texto, ¿cuál opción sintetiza las características subrayadas (obra maestra de la arquitectura y la ingeniería, peculiares características arquitectónicas y paisajísticas)?",
    "respOpciones": [
      "1) Sitio espiritual",
      "2) Paraje histórico",
      "3) Lugar legendario",
      "4) Entorno monumental"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se debe sintetizar el significado de las características subrayadas para identificar el atributo más alusivo a Machu Picchu. El texto lo describe como una 'obra maestra' con 'características arquitectónicas y paisajísticas' únicas, lo que describe lo impresionante del lugar. Las opciones 1 y 3 no sintetizan estas características, mientras que la opción 2 se enfoca en lo histórico y no en su entorno físico. La opción 'Entorno monumental' es la que mejor describe estas cualidades. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 68,
    "txtPregunta": "Considere el siguiente texto:\nLos textos electrónicos presentan nuevas ______ y también nuevos retos que pueden tener gran impacto sobre las ______ que tiene el individuo de comprender lo que lee. La destreza en las nuevas competencias de Internet se convertirá en algo esencial para el futuro ______ de nuestros alumnos. (Asociación Internacional de Lectura, 2001)\nSegún el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) acciones - estrategias - progreso",
      "2) ayudas - capacidades - alfabetismo",
      "3) dificultades - habilidades - desarrollo",
      "4) preferencias - actitudes - aprendizaje"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El primer espacio presenta una contraposición con 'retos', por lo que 'ayudas' es la única opción que encaja. Para el segundo espacio, 'capacidades' o 'habilidades' son posibles opciones que se refieren a las condiciones que una persona desarrolla para la lectura. Finalmente, 'alfabetismo' y 'aprendizaje' se relacionan con el contexto de la lectura y la educación de los alumnos. La combinación de la opción 2 es la más coherente. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 69,
    "txtPregunta": "Considere el siguiente texto:\nEse texto, sin duda, por sus contenidos, por la manera en que está redactado, por su gran aporte histórico y demás características, promete tener gran envergadura para todos aquellos lectores que logren identificar toda su riqueza. (Elaboración propia)\nSegún el texto, ¿cuál palabra es equivalente a 'envergadura'?",
    "respOpciones": [
      "1) Calidad",
      "2) Sentido",
      "3) Significado",
      "4) Trascendencia"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se busca un sinónimo de 'envergadura' según el contexto. Las claves son su 'aporte histórico' y su 'riqueza'. 'Envergadura' se asocia con el alcance, importancia y relevancia que tendrá el texto para los lectores, lo cual es sinónimo de 'trascendencia'. 'Calidad' se refiere a las características del escrito, pero no a su relevancia, mientras que 'sentido' y 'significado' aluden más a la comprensión. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 70,
    "txtPregunta": "Considere el siguiente texto:\nActualmente, se desarrolla el vínculo entre seres orgánicos y la tecnología. Precisamente, la bioelectrónica aprovecha directamente el prolífico repertorio de sensores olfativos y el sofisticado sistema nervioso de los insectos para crear biorrobots. (Hidalgo, 2020)\nSegún el texto, ¿cuáles palabras se oponen a los términos subrayados (prolífico, sofisticado)?",
    "respOpciones": [
      "1) limitado - básico",
      "2) amplio - elemental",
      "3) reducido - complejo",
      "4) insuficiente - artificial"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Se deben encontrar los antónimos de 'prolífico' y 'sofisticado' en el contexto del texto. 'Prolífico' se refiere a un gran y abundante repertorio, por lo que su antónimo sería 'limitado', 'reducido' o 'insuficiente'. 'Sofisticado' describe la complejidad del sistema nervioso, por lo que su antónimo sería 'básico' o 'elemental'. La opción que presenta antónimos para ambos términos es la 1: limitado y básico. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 71,
    "txtPregunta": "Considere el siguiente texto:\nLa localidad aparece por primera vez mencionada en la segunda mitad del siglo IX. De aquellos años quedan sepulcros en los alrededores de la parroquia de San Vicente. Pero sin duda los vestigios más destacados, además de una veintena de casas colgantes, son los de su castillo. (Luján, 2023)\nSegún el texto, ¿cuál palabra es equivalente a 'vestigios'?",
    "respOpciones": [
      "1) Añicos",
      "2) Restos",
      "3) Destrozos",
      "4) Escombros"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El término 'vestigios' se refiere a edificios o partes de ellos que se mantienen a través de los años. 'Añicos', 'destrozos' y 'escombros' implican rotura, daño violento o residuos de una demolición, lo cual no encaja con el contexto de estructuras antiguas que han perdurado. La palabra 'restos' se refiere a las partes de algo que ha prevalecido en el tiempo, siendo el sinónimo más adecuado. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 72,
    "txtPregunta": "Considere el siguiente texto:\nDominando la escena central del Egeo, se distingue una constelación de islas a las que los griegos denominaron Cícladas por su disposición en círculo. Después de cinco milenios, el barco sigue siendo el medio utilizado para desplazarse entre las islas griegas. Mikonos es un excelente inicio para un periplo que visite las seis joyas más preciadas de islas habitadas que componen el archipiélago. (Martínez, 2019)\nSegún el texto, ¿cuál palabra es equivalente a 'periplo'?",
    "respOpciones": [
      "1) Paseo",
      "2) Acceso",
      "3) Destino",
      "4) Trayecto"
    ],
    "idRespPregunta": 4,
    "respPregunta": "'Periplo' significa un viaje o recorrido, usualmente largo y por mar. En el contexto de visitar seis islas, 'paseo' (salida corta), 'acceso' (entrada) y 'destino' (punto de llegada) no son equivalentes. 'Trayecto', que significa un espacio que se recorre, corresponde adecuadamente al viaje para visitar las islas. La respuesta correcta es la 4."
  },
  {
    "idPregunta": 73,
    "txtPregunta": "Considere el siguiente texto:\nEn el momento de la fundación de la Roma Quadrata, el latín era una simple habla ______ y empleada por pastores, campesinos y forajidos soldados rudos; pero, conforme Roma comienza a lograr victoria tras victoria sobre otros pueblos, su idioma comienza a ______ por la misma Italia y fuera de sus fronteras. (Quirós, 2000)\nSegún el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) antigua - dividirse",
      "2) rústica - expandirse",
      "3) exótica - distribuirse",
      "4) arcaica - transmitirse"
    ],
    "idRespPregunta": 2,
    "respPregunta": "Para el primer espacio, el latín es descrito como el habla de 'pastores, campesinos y soldados rudos', lo que sugiere que era una habla 'rústica'. Para el segundo espacio, el texto indica que Roma logró 'victoria tras victoria', imponiendo su idioma en otros lugares. Este proceso de imponer una lengua a través de la conquista es una 'expansión'. Los términos 'rústica' y 'expandirse' completan el texto con sentido lógico. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 74,
    "txtPregunta": "Considere el siguiente texto:\nAmbos lugares (un lago ártico helado y una cueva tropical saturada de gases tóxicos) podrían proporcionar claves para resolver uno de los misterios más antiguos y apasionantes del mundo: ¿hay vida fuera de nuestro planeta? Es posible que la vida en otros mundos (...) tenga que ______ en océanos cubiertos de hielo (...) o en cuevas llenas de gases. Si encontramos la manera de ______ e identificar en la Tierra formas de vida capaces de ______ en ese tipo de ambientes extremos, estaremos un paso más cerca de hallar vida en otros planetas. (National Geographic, 2018)\nSegún el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) florecer - aislar - prosperar",
      "2) prosperar - capturar - mutar",
      "3) evolucionar - acordonar - variar",
      "4) mejorar - circundar - evolucionar"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Para el primer espacio, se habla del surgimiento de la vida en ambientes adversos, lo que encaja con 'florecer' o 'prosperar'. El segundo espacio se refiere a encontrar y estudiar estas formas de vida en la Tierra, por lo que 'aislar' sería un paso previo para su estudio. Para el tercer espacio, se busca un término que describa la capacidad de la vida para sobrevivir en ambientes extremos, donde 'prosperar' o 'evolucionar' son opciones adecuadas. La combinación de la opción 1 ('florecer', 'aislar', 'prosperar') es la más coherente con el contexto científico del texto. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 75,
    "txtPregunta": "Considere el siguiente texto:\nEl storytelling es el arte de contar una historia y aprovechar todos los elementos de su atmósfera para transmitir sensaciones de una forma inolvidable. Consiste en la capacidad de comunicar ideas con la intención de generar un ______ emocional que marque al espectador y que dé lugar a un espacio de reflexión. (Rodríguez, 2021)\nSegún el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) vínculo",
      "2) impacto",
      "3) ambiente",
      "4) encuentro"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El texto describe el storytelling como una forma de comunicar ideas con la intención de provocar una reacción emocional significativa que 'marque al espectador'. La palabra 'impacto' es la que mejor se ajusta a esta idea de una impresión emocional profunda y duradera. 'Vínculo', 'ambiente' o 'encuentro' no transmiten con la misma fuerza esta idea de una reacción intensa que deja una huella. Por lo tanto, 'impacto' es la palabra que mejor completa el sentido. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 76,
    "txtPregunta": "Considere el siguiente texto:\nComo parte del uso del ingenio se encuentra también el motivo del disfraz, el cual es usado como ______. Un ejemplo de ello es cuando el personaje de Odiseo se disfraza de mendigo en varias ocasiones, no solo a su llegada a Ítaca, sino también antes, durante la guerra de Troya, ciudad en la que entra así como espía y roba el Paladio. (Cerdas y Guevara, 2023)\nSegún el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?",
    "respOpciones": [
      "1) timo",
      "2) truco",
      "3) fraude",
      "4) artimaña"
    ],
    "idRespPregunta": 4,
    "respPregunta": "El texto menciona el uso del ingenio y el disfraz para lograr objetivos estratégicos, como en el caso de Odiseo. Las palabras 'timo' y 'fraude' tienen una connotación negativa de estafa o ilegalidad que no se ajusta al contexto heroico. 'Truco' implica un engaño menor o simple. 'Artimaña' se refiere a una acción astuta, hábil y planeada para lograr un fin mediante el engaño, lo cual se ajusta perfectamente al uso del disfraz por parte de Odiseo. Por lo tanto, 'artimaña' es la palabra que mejor completa el sentido. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 77,
    "txtPregunta": "Considere el siguiente texto:\nAunque parezca paradójico, los mensajes más cotidianos son los más difíciles de descifrar porque el hablante, dada la poca trascendencia del mensaje o la rapidez con que debe pensarlo, no tiene mucho tiempo para reflexionar sobre él.\nSegún el texto, ¿cuáles palabras son equivalentes a 'paradójico' y 'trascendencia'?",
    "respOpciones": [
      "1) absurdo - importancia",
      "2) controversial - eficacia",
      "3) incomprensible - necesidad",
      "4) cuestionable - consecuencia"
    ],
    "idRespPregunta": 1,
    "respPregunta": "En el contexto del texto, 'paradójico' se refiere a una situación que parece contraria a la lógica o al sentido común, lo que es similar a 'absurdo'. 'Trascendencia' se refiere a la relevancia o significación de algo, por lo que 'importancia' es un sinónimo directo en este caso. Las otras opciones no presentan una relación de significado tan directa con las palabras subrayadas. Por lo tanto, las palabras que mantienen una relación de sinonimia son 'absurdo' e 'importancia'. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 78,
    "txtPregunta": "Considere el siguiente texto:\nLa idea de que un texto sea capaz de múltiples lecturas es característica de la Edad Media, esa Edad Media tan calumniada y compleja que nos ha dado la arquitectura gótica, las sagas de Islandia y la filosofía escolástica en la que todo está discutido. Que nos dio, sobre todo, la Comedia, que seguimos leyendo y que nos sigue asombrando, que durará más allá de nuestra vida, mucho más allá de nuestras vigilias y que será enriquecida por cada generación de lectores. (Borges, 1980)\nDel texto anterior se puede inferir que la Edad Media:",
    "respOpciones": [
      "1) ha trascendido gracias a su legado.",
      "2) ha sido elogiada por sus contribuciones.",
      "3) será ignorada por las nuevas generaciones.",
      "4) limitó al lector de la Comedia en muchos sentidos."
    ],
    "idRespPregunta": 1,
    "respPregunta": "El texto destaca que, a pesar de ser 'calumniada', la Edad Media ha dejado grandes aportes como la arquitectura, la filosofía y, notablemente, la Comedia, una obra que 'seguimos leyendo' y 'durará más allá de nuestra vida'. Al relacionar estas ideas, se concluye que la Edad Media ha sido relevante en tiempos posteriores, es decir, ha trascendido gracias a su legado. La opción 2 contradice el calificativo de 'calumniada', y las opciones 3 y 4 contradicen la idea de la trascendencia de la Comedia. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 79,
    "txtPregunta": "Considere los siguientes textos:\nTexto 1: El liderazgo es la función que ocupa una persona que se distingue del resto y es capaz de tomar decisiones acertadas (...), inspirando al resto de los que participan de ese grupo a alcanzar una meta común. Es un elemento fundamental en los gestores del mundo empresarial, (...) pero también lo es en otros ámbitos, como los deportes (...), la educación (...) y hasta en la familia.\nTexto 2: El estilo de años atrás, jerárquico y decisivo, está dando paso a un nuevo modelo de liderazgo, más colaborativo, ágil e integral. Si algo caracterizaba a los líderes del antiguo entorno laboral, era la estructura piramidal.\n¿Cuál es una característica del líder presente en solo uno de los textos?",
    "respOpciones": [
      "1) La idoneidad para dirigir al equipo",
      "2) La capacidad para tomar decisiones",
      "3) La habilidad para alcanzar las metas",
      "4) La capacidad de dirigir en diferentes entornos"
    ],
    "idRespPregunta": 4,
    "respPregunta": "El texto 1 señala que un líder debe tomar decisiones, establecer metas, motivar y ser gestor en diferentes ámbitos (empresarial, deportes, educación, familia). El texto 2 se centra en el ámbito empresarial y compara dos modelos de liderazgo (jerárquico vs. colaborativo). Al comparar ambos, se encuentra que la característica de dirigir en diferentes entornos (deportes, educación, familia) se menciona explícitamente solo en el texto 1. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 80,
    "txtPregunta": "Considere los siguientes textos:\nTexto 1: El liderazgo es la función que ocupa una persona que se distingue del resto y es capaz de tomar decisiones acertadas (...), inspirando al resto de los que participan de ese grupo a alcanzar una meta común.\nTexto 2: (...) hoy en día, cada uno de los empleados en la empresa, de cualquier nivel, ha de ser informado y recibir la capacitación y el poder para alcanzar los objetivos de la compañía.\nDe ambos textos se deduce que una característica del liderazgo es:",
    "respOpciones": [
      "1) dirigir equipos en diferentes ámbitos.",
      "2) impulsar a las personas para alcanzar las metas.",
      "3) organizar la información y capacitaciones para el equipo.",
      "4) desarrollar el potencial de cada persona en una empresa."
    ],
    "idRespPregunta": 2,
    "respPregunta": "El texto 1 resalta que el líder inspira al grupo 'a alcanzar una meta común'. El texto 2, aunque describe un modelo diferente, también se enfoca en que los empleados puedan 'alcanzar los objetivos de la compañía'. Al comparar las características en ambos textos, la idea común es que el liderazgo, independientemente del estilo o ámbito, busca guiar o impulsar a las personas para lograr metas u objetivos. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 81,
    "txtPregunta": "Considere el siguiente texto:\nEl cine permite la reunión de personas de distintos estratos sociales en un mismo lugar. Esto ayuda al público a identificarse como colectivo y a generar catarsis frente a los hechos que han marcado su historia. (...) cuando el espectador se enfrenta con un filme que lo conmueve (...), entonces la experiencia cinematográfica se convierte en un ejercicio sociológico y psicológico.\nConsidere los siguientes efectos:\nA. Crear una identidad cultural colectiva.\nB. Hacer una crítica sobre la realidad social.\nC. Sensibilizar sobre las experiencias de vida.\nD. Educar al público sobre la vida en sociedad.\nSegún el texto, ¿cuáles de los anteriores son efectos del cine en el público?",
    "respOpciones": [
      "1) A y B",
      "2) A y C",
      "3) B y D",
      "4) C y D"
    ],
    "idRespPregunta": 2,
    "respPregunta": "El texto plantea que el cine propicia un espacio socializador y humano. Del hecho de que el público se 'identifique como colectivo' se deduce el efecto A: 'Crear una identidad cultural colectiva'. Del hecho de que el espectador se enfrente a un filme que lo 'conmueve', se deduce el efecto C: 'Sensibilizar sobre las experiencias de vida'. Los efectos B y D no se pueden inferir del texto, ya que no hay ideas que apoyen explícitamente un efecto crítico o educativo. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 82,
    "txtPregunta": "Considere el siguiente texto:\nVarios artistas del Renacimiento pintaron obras cuyos personajes tenían seis dedos. Aunque una de las hipótesis es que esta cualidad corresponde a un error, otros críticos concluyen que es una decisión deliberada dado el carácter meticuloso de las obras y las variadas interpretaciones del número seis. (Elaboración propia)\nConsidere las siguientes afirmaciones:\nA. Las motivaciones dadas por el artista carecen de importancia para la crítica.\nB. Los artistas renacentistas eran conscientes de los detalles en su arte.\nC. Las pinturas del Renacimiento cuentan con un carácter simbólico.\nDe las anteriores, ¿cuáles se infieren del texto?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 4,
    "respPregunta": "&bullet; A. Esta afirmación es falsa, ya que el texto indica que los críticos deliberaron sobre las razones, lo que muestra la importancia de las motivaciones.\n&bullet; B. Esta afirmación es verdadera; es una paráfrasis de 'el carácter meticuloso de las obras'.\n&bullet; C. Esta afirmación es verdadera, ya que se mencionan 'variadas interpretaciones del número seis', lo que sugiere que el detalle tiene múltiples significados simbólicos.\n\nEn conclusión, se pueden inferir las afirmaciones B y C. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 83,
    "txtPregunta": "Considere el siguiente texto:\nLos programas 'divertidos' tienen mucho rating −y el rating es lo supremo−, no importa a costa de qué valor, ni quién lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad. (Sábato, 2000)\nConsidere las siguientes afirmaciones:\nA. Los programas culturales tienen poca popularidad.\nB. Las personas seleccionan el programa según el nivel de audiencia.\nC. La oferta tiende hacia la superficialidad y el entretenimiento.\nDe las anteriores, ¿cuáles se infieren del texto?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 2,
    "respPregunta": "&bullet; A. No se puede inferir, ya que el texto no menciona los programas culturales.\n&bullet; B. No está explícito en el texto que el público seleccione por el nivel de audiencia, sino que los programas con alto rating tienen ciertas características.\n&bullet; C. Se puede inferir de frases como 'donde todo se banaliza' y 'comedia de regular calidad', que describen una tendencia hacia contenidos de poca trascendencia y superficialidad cuyo único objetivo es la diversión.\n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 84,
    "txtPregunta": "Considere los siguientes textos acerca de la empatía:\nTexto 1: Es importante tener en cuenta que la empatía es una cualidad de la relación humana, sin la que nuestra mente no hubiera podido estructurarse saludablemente (...), ya que para que seamos capaces de dar sentido a nuestro propio mundo interno alguien ha tenido que hacerlo antes por nosotros. (Artés, 2021)\nTexto 2: La 'empatía' es una habilidad adquirida que se relaciona con las condiciones socioculturales en las que nos criamos y las características estructurales y funcionales en donde transcurren nuestros procesos de socialización (...).\nConsidere las siguientes afirmaciones acerca de la empatía:\nA. Es necesaria para el bienestar del ser humano.\nB. Es fundamental para el desarrollo mental.\nC. Es una destreza aprendida con la convivencia.\nDe las anteriores, ¿cuáles se infieren de ambos textos?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 1,
    "respPregunta": "Se deben identificar las ideas presentes en ambos textos.\n&bullet; A. Se infiere de ambos textos que la empatía permite el bienestar y una relación saludable con el mundo.\n&bullet; B. Se refiere al desarrollo mental ('mente estructurada saludablemente'), lo cual se infiere únicamente del texto 1.\n&bullet; C. Se establece que la empatía es una 'habilidad adquirida' mediante relaciones sociales solo en el texto 2. \n\nPor lo tanto, la única afirmación que se infiere de ambos textos es la A. \n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 85,
    "txtPregunta": "Considere el siguiente texto:\nLos griegos desarrollaron una visión religiosa naturalista cimentada en los dioses del Olimpo (...); cuando despertaron del mito y la fábula, cuestionaron el origen fantástico de sus conocimientos, surgiendo así la filosofía, que tiene, a partir de entonces, su origen en la razón humana y ya no más en las concepciones míticas. (Martínez, 2016)\nSegún el texto, la filosofía nace en Grecia debido a:",
    "respOpciones": [
      "1) la fama que gozaban los grandes pensadores griegos.",
      "2) al desarrollo del pensamiento libre propiciado por los griegos.",
      "3) las condiciones culturales que favorecieron el pensamiento crítico.",
      "4) las explicaciones mitológicas que fundamentaron el pensamiento crítico."
    ],
    "idRespPregunta": 3,
    "respPregunta": "El texto plantea una ruptura en las creencias de los griegos, pasando de una visión basada en el mito a una basada en la razón. Esta transición cultural, donde se 'cuestionaron el origen fantástico de sus conocimientos', propició un cambio en el pensamiento que dio origen a la filosofía. Por lo tanto, fueron las condiciones culturales las que favorecieron el pensamiento crítico. El texto no menciona la fama de los pensadores ni el pensamiento libre, y señala que el pensamiento crítico surge en oposición, no a partir, de las explicaciones mitológicas. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 86,
    "txtPregunta": "Considere el siguiente texto:\nLa palabra simpatía hace referencia a la puesta en común de dos individualidades en un intento de sintonizar emocionalmente, sin que por ello nadie deba hacer abstracción de lo que piensa o siente. Podemos afirmar que la simpatía tiene más que ver con la expresión subjetiva de sentimientos y pensamientos, mientras que la empatía busca la comprensión objetiva del mundo interno del otro. (Artés, 2021)\nSegún el texto, ¿en qué se basa la diferencia entre simpatía y empatía hacia otras personas?",
    "respOpciones": [
      "1) En el balance con las propias emociones.",
      "2) En la experimentación de su mundo interior.",
      "3) En el grado de entendimiento de su mundo interno.",
      "4) En la identificación imparcial con sus sentimientos."
    ],
    "idRespPregunta": 3,
    "respPregunta": "El texto diferencia la simpatía (sintonizar emocionalmente y expresar sentimientos subjetivos) de la empatía (buscar la comprensión objetiva del mundo interno del otro). La diferencia clave, por tanto, no es solo la conexión emocional, sino el nivel de análisis y entendimiento del contexto del otro. La empatía implica una mayor profundización en la comprensión, más allá de la simple coincidencia emocional. Por lo tanto, la diferencia se basa en el grado de entendimiento del mundo interno de la otra persona. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 87,
    "txtPregunta": "Considere los siguientes textos:\nTexto 1: En los años noventa, aparecen las computadoras con fuerza en los hogares y con ellas el e-learning o enseñanza a distancia, toda una revolución que facilitó la educación (...).\nTexto 2: En pleno siglo XXI ha bajado la venta de computadoras y es la era del celular y entramos en el m-learning o aprendizaje móvil, el espacio para aprender de forma inalámbrica, en cualquier momento y en cualquier lugar del mundo.\n¿Cuál es una idea común en ambos textos?",
    "respOpciones": [
      "1) El uso del celular es el más efectivo para el aprendizaje.",
      "2) Las computadoras desplazaron la enseñanza tradicional.",
      "3) La diversificación de los dispositivos ha mejorado la educación.",
      "4) El uso de los dispositivos ha transformado la educación tradicional."
    ],
    "idRespPregunta": 4,
    "respPregunta": "El texto 1 señala que las computadoras revolucionaron la educación con el e-learning. El texto 2 menciona que el celular facilitó el aprendizaje móvil (m-learning). La idea común es que ambos dispositivos tecnológicos, en su respectivo momento, han provocado cambios y transformaciones en la educación en comparación con los modelos más tradicionales. Las opciones 1 y 2 solo reflejan ideas de uno de los textos, y la opción 3 no se menciona en ninguno. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 88,
    "txtPregunta": "Considere el siguiente texto:\nLa era de la posverdad se caracteriza por amoldar los medios de información, y los contenidos, al gusto de los usuarios. Se nos muestra una verdad embellecida y configurada a nuestro gusto, algo que aceptamos como más verdadero que la propia verdad de los hechos. (Montoya, 2019)\nUna conclusión que se infiere del texto anterior es que:",
    "respOpciones": [
      "1) las personas deciden el valor de los hechos.",
      "2) el aumento de los medios ha configurado la información.",
      "3) la redacción atrayente favorece el consumo de la información.",
      "4) las personas tienen menos acceso a información crítica y objetiva."
    ],
    "idRespPregunta": 4,
    "respPregunta": "El texto afirma que la posverdad 'amoldea los contenidos al gusto de los usuarios' y presenta una 'verdad embellecida'. Si la información se configura para agradar en lugar de para reflejar los hechos objetivamente, se puede concluir que el acceso a información crítica y objetiva disminuye. Las otras opciones no se infieren directamente del texto. \n\nLa opción correcta es la 4."
  },
  {
    "idPregunta": 89,
    "txtPregunta": "Considere los siguientes textos:\nTexto 1: (...) la primera razón por la que debemos llegar a tiempo es por una cuestión de educación y respeto. (...) que una persona llegue tarde resulta un incordio para el resto.\nTexto 2: La puntualidad es la cortesía de las personas inteligentes y comprensivas que saben que los demás tienen otras ocupaciones (...). Si pudiéramos sumar los minutos que llegamos tarde (...) y pudiéramos calcular un costo promedio por hora (...) estaríamos en capacidad de comprender la pérdida colectiva, el desperdicio nacional, que representa el desprecio por esta palabra.\nDe ambos textos se deduce que la impuntualidad genera:",
    "respOpciones": [
      "1) un hábito que produce desconfianza.",
      "2) un juicio negativo que afecta a las personas.",
      "3) un proceder que no tiene graves consecuencias.",
      "4) un comportamiento que conlleva pérdidas económicas."
    ],
    "idRespPregunta": 2,
    "respPregunta": "El texto 1 describe la impuntualidad como una falta de respeto y un 'incordio'. El texto 2 la califica como una falta de cortesía y 'desprecio' que además genera pérdidas. Ambas descripciones (falta de respeto, descortesía) contribuyen a generar un juicio negativo sobre la persona impuntual. Las opciones 1 y 4 son mencionadas, pero solo en uno de los textos o de forma parcial, mientras que la 2 engloba la consecuencia común en ambos. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 90,
    "txtPregunta": "Considere los siguientes textos:\nTexto 1: Si eres puntual, seguramente tendrás otras cualidades como puede ser (...) el orden, que representa también a una persona responsable. (...) llegar antes a los lugares te permitirá aprovechar el tiempo al máximo. (Además menciona evitar la distracción en clase y asegurar el ingreso).\nTexto 2: Si pudiéramos sumar los minutos que llegamos tarde a las citas o que llegan retrasados nuestros trabajadores, y pudiéramos calcular un costo promedio por hora (...) estaríamos en capacidad de comprender la pérdida colectiva, el desperdicio nacional (...).\nConsidere las siguientes consecuencias:\nA. Mayor productividad.\nB. Asegurar el ingreso a clases.\nC. Menos distracción para los demás.\n¿Cuáles se mencionan en ambos textos como consecuencias de la puntualidad?",
    "respOpciones": [
      "1) A y B",
      "2) B y C",
      "3) Solo A",
      "4) Solo C"
    ],
    "idRespPregunta": 3,
    "respPregunta": "&bullet; A. 'Mayor productividad' se menciona en ambos textos. El texto 1 habla de 'aprovechar el tiempo al máximo', y el texto 2 explica cómo la impuntualidad representa una 'pérdida colectiva' y 'desperdicio', infiriéndose que la puntualidad evita esto, llevando a mayor productividad.\n&bullet; B y C. 'Asegurar el ingreso a clases' y 'Menos distracción para los demás' se mencionan únicamente en el texto 1. \n\nPor lo tanto, la única consecuencia mencionada en ambos textos es A. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 91,
    "txtPregunta": "Considere el siguiente texto:\n(...) El arte callejero, al integrar sus elementos en lugares públicos bastante transitados, pretende sorprender a los espectadores. Suele tener un llamativo mensaje subversivo que critica a la sociedad con ironía e invita a la lucha social, la crítica política o, simplemente, a la reflexión.\nConsidere las siguientes definiciones:\nA. Forma de expresión que invita a la crítica y a la rebeldía.\nB. Creaciones que exploran diferentes manifestaciones artísticas.\nC. Tendencia nacida para transmitir el sentimiento de una generación.\nSegún el texto, ¿cuáles de las anteriores definen el arte callejero?",
    "respOpciones": [
      "1) Solo A",
      "2) A y C",
      "3) Solo B",
      "4) B y C"
    ],
    "idRespPregunta": 1,
    "respPregunta": "&bullet; A. Se deduce del texto, que menciona que el arte callejero tiene un 'mensaje subversivo que critica a la sociedad' e 'invita a la lucha social'.\n&bullet; B. No se puede inferir del texto. Aunque se menciona que las obras se salen de los parámetros establecidos, no se describe que exploren diferentes manifestaciones.\n&bullet; C. No se puede deducir del texto. Se afirma que es una forma de expresión de creencias sociales y culturales, no necesariamente de una generación específica.\n\nLa opción correcta es la 1."
  },
  {
    "idPregunta": 92,
    "txtPregunta": "Considere el siguiente texto:\nLa literatura como arte produce goce estético, pero también aporta conocimientos (...); asimismo, nos enfrenta a los valores más intrínsecos de la especie humana como la solidaridad, el respeto, el amor, la convivencia. Además, nos despierta la sensibilidad y la imaginación (...). Por otra parte, nos ofrece modelos que contribuyen a mejorar la expresión escrita.\nConsidere las siguientes afirmaciones sobre la literatura:\nA. Usa la creatividad para conocer diferentes contextos.\nB. Favorece la innovación de la escritura.\nC. Cumple diversas funciones: artística, social y educativa.\nDe las anteriores, ¿cuáles se infieren del texto?",
    "respOpciones": [
      "1) Solo A",
      "2) B y C",
      "3) Solo C",
      "4) A y B"
    ],
    "idRespPregunta": 3,
    "respPregunta": "&bullet; A. El texto no menciona específicamente el uso de la creatividad para conocer contextos.\n&bullet; B. El texto habla de 'mejorar la expresión escrita', no necesariamente de 'innovarla'.\n&bullet; C. Se puede inferir que la literatura cumple estas tres funciones: artística ('goce estético'), social ('nos enfrenta a los valores (...) la convivencia') y educativa ('aporta conocimientos', 'mejorar la expresión escrita'). \n\nPor lo tanto, solo la afirmación C se puede inferir del texto. \n\nLa opción correcta es la 3."
  },
  {
    "idPregunta": 93,
    "txtPregunta": "Considere el siguiente texto:\nExiste una obra literaria escrita en la Edad de Oro del Islam conformada por relatos de varios escritores provenientes de Asia y África. El libro innova por su gran cantidad de técnicas narrativas, por ejemplo, él mismo puede definirse como un relato enmarcado, es decir, conformado por una historia principal, que abarca otras. (Elaboración propia)\nConsidere las siguientes afirmaciones:\nA. La literatura de la Edad Media del Islam se conformó exclusivamente de autores asiáticos y africanos.\nB. La historia enmarcada corresponde a una forma original de estructurar la narración.\nC. La diversidad cultural influye en esa obra literaria de la Edad de Oro islámica.\nDe las anteriores, ¿cuáles se infieren del texto?",
    "respOpciones": [
      "1) Solo A",
      "2) Solo C",
      "3) A y B",
      "4) B y C"
    ],
    "idRespPregunta": 4,
    "respPregunta": "&bullet; A. No se puede deducir del texto. Aunque menciona autores de Asia y África, no afirma que fueran los únicos ('exclusivamente').\n&bullet; B. Sí se puede inferir. El texto destaca que la obra 'innova' por sus técnicas y menciona el 'relato enmarcado' como ejemplo, lo que implica que es una forma original de estructurar la narración.\n&bullet; C. También se deduce. Al mencionar que los relatos provienen de escritores de distintas regiones (Asia y África), sugiere una influencia de diversas culturas en la obra.\n\nEn conclusión, se infieren B y C. \n\nPor lo tanto, la opción correcta es la 4."
  },
  {
    "idPregunta": 94,
    "txtPregunta": "Considere la siguiente información:\nA. Cada persona tiene un único documento de identidad.\nB. La papeleta presidencial presenta varios candidatos presidenciales.\nC. Una persona con documento de identidad tiene la opción de elegir entre varios candidatos en la papeleta presidencial.\nLas relaciones se simbolizan así: 1→1 (uno a uno), 1→N (uno a varios), N→N (varios a varios), N→1 (varios a uno).\n¿Cómo se representa la relación de los objetos: persona → documento de identidad → candidatos en la papeleta presidencial?",
    "respOpciones": [
      "1) 1→1→1",
      "2) 1→1→N",
      "3) 1→N→N",
      "4) 1→N→1"
    ],
    "idRespPregunta": 2,
    "respPregunta": "La relación 'persona → documento de identidad' es 1→1, ya que cada persona tiene un único documento. La relación 'documento de identidad → candidatos en la papeleta' es 1→N, porque una persona (identificada con su documento) puede elegir entre varios candidatos. Por lo tanto, la cadena de relaciones es 1→1→N. \n\nLa opción correcta es la 2."
  },
  {
    "idPregunta": 95,
    "txtPregunta": "Considere el siguiente diagrama y sus instrucciones:\n[IMG-100]\nA. El diagrama representa posibles caminos para ir de INICIO a FIN.\nB. Hay cinco etapas; los números indican el fin de cada etapa.\nC. Una etapa es independiente y no necesaria. Las otras cuatro deben cumplirse en orden numérico ascendente.\nD. Las flechas indican direcciones posibles.\nE. Se puede pasar más de una vez por un cuadro.\n¿Cuántos caminos hay para llegar a 1 saliendo de INICIO?",
    "respOpciones": [
      "1) 2",
      "2) 3",
      "3) 4",
      "4) Más de 4"
    ],
    "idRespPregunta": 4,
    "respPregunta": "Se deben trazar las rutas desde INICIO hasta el cuadro 1 siguiendo las flechas.\n1) INICIO → B → Z → G → 1\n2) INICIO → B → Z → H → Y → J → K → 1\n3) INICIO → C → F → L → K → 1\n4) INICIO → D → 3 → L → K → 1\n5) INICIO → C → F → G → 1\nYa se han encontrado 5 caminos distintos, y es posible que existan más (por ejemplo, haciendo bucles permitidos por la instrucción E). Por lo tanto, la respuesta es que hay más de 4 caminos. \n\nLa opción correcta es la 4."
  }
]